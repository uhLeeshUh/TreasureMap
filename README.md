# TreasureMap README

## Description

TreasureMap is a single-page web app clone of the site [Atlas Obscura](https://www.atlasobscura.com/), which hosts publicly sourced articles detailing odd and interesting places across the world.

[View the TreasureMap wiki](https://github.com/AliciaUnderhill/TreasureMap/wiki)

### Main Features:

Users can:
* View articles, as well as create, update and delete them upon signing in
* Search for articles by name, city or country

### Website

[Explore TreasureMap for yourself!](https://the-treasure-map.herokuapp.com/#/)

## Technologies Used

In this fullstack project, I employed the following technologies:
* React
* Redux
* Javascript
* JSX
* HTML
* CSS
* Ruby
* Ruby on Rails
* SQL
* JBuilder

## Notable Features

### Concurrent creation of articles, images and article edits
Via a relational database structure, my Article model utilizes its associations and the #accepts_nested_attributes_for ActiveRecord class method to concurrently create images and/or article edits when an article is created or edited via the article form. This consolidates three separate backend hits into one AJAX call and eliminates the need for an Images or ArticleEdits controller since these resources are always dependent on articles.

I streamlined this implementation via the following associations:

```
# article.rb

class Article < ApplicationRecord

has_many :edits,
  class_name: :ArticleEdit,
  foreign_key: :article_id

has_many :editors,
  through: :edits,
  source: :editor

has_many :images,
  class_name: :Image,
  foreign_key: :article_id,
  inverse_of: :article

accepts_nested_attributes_for :images, :edits

...
end

```

```
# image.rb

class Image < ApplicationRecord

belongs_to :article,
  class_name: :Article,
  foreign_key: :article_id,
  inverse_of: :images

...
end

```

```
# article_edit.rb

class ArticleEdit < ApplicationRecord

  belongs_to :editor,
    class_name: :User,
    foreign_key: :editor_id

  belongs_to :article,
    class_name: :Article,
    foreign_key: :article_id

end

```

My ArticlesController allowed for nested image and articleEdit generation via its strong params (below):

```
# articles_controller.rb

class Api::ArticlesController < ApplicationController

...

def article_params
  params.require(:article).permit(:name, :description, :body, :lat, :lng,
    :city_id, :long_description, images_attributes: [:image], edits_attributes: [:editor_id])
end

...
end
```

The ArticleForm (a reusable React component for creating and editing articles) compiled article, image and edit information to send up as a single FormData bundle via its `submit` method:

```
// article_form.jsx

...

submit(e){
  this.props.clearArticleErrors();
  e.preventDefault();

  let formData = new FormData();
  Object.keys(this.state.article).forEach(key => {
    formData.append(`article[${key}]`, this.state.article[key]);
  });

  this.state.images.forEach(image => {
    formData.append("article[images_attributes[][image]]", image.imageFile);
  });

  if (this.props.editorId){
    formData.append("article[edits_attributes][][editor_id]", this.props.editorId);
  }

  this.props.action(formData);
  //action is a prop which will submit an AJAX call to create or edit an article,
  depending on the form's intended use
}
...

```

### Intelligent loading of top countries and cities by popularity
To more easily facilitate the connection of users and interesting places for them to visit, I created a dropdown on the site's navbar which highlights the top countries and cities featured on the site (using the heuristic of associated article counts). This feature provided two interesting challenges: (1) querying by associations to determine article count and (2) intelligently fetching shallow vs. deep country and city information to protect user RAM depending on the site's use case

#### (1) Querying by associations
I made the following ActiveRecord queries to determine the top countries and cities, respectively, by article count upon the app's inital load

```
# country.rb

class Country < ApplicationRecord

def self.top_countries_by_article_count
  countries = Country.select('countries.*').joins(:cities).joins(:articles).group('countries.id').order('COUNT(articles.id) DESC').limit(6)
end

...
end
```

```
# city.rb

class City < ApplicationRecord

def self.top_cities_by_article_count
  cities = City.select('cities.*').joins(:articles).group('cities.id').order('COUNT(articles.id) DESC').limit(12)
end
...
end
```

#### (2) Shallow vs. deep queries for country and city information
When displaying countries and cities for the navbar dropdown menu, all my redux store should hold is the country or city's `:id` and `:name` to optimize client-side storage. Only when a user clicks on one of these links and navigates to a country or city show page do I need to fetch a complete information set.

For example, below are the JBuilder views used to fetch country and city information needed for the dropdown:
```
# views/api/countries/index.json.jbuilder

@countries.each do |country|
  json.set! country.id do
    json.extract! country, :id, :name
    json.city_ids country.cities.ids
  end
end
```
```
# views/api/cities/index.json.jbuilder

@cities.each do |city|
  json.set! city.id do
    json.extract! city, :id, :name, :country_id
  end
end
```

Comparatively, below is the json response served up for a country show page request:

```
# views/api/countries/show.json.jbuilder

json.country do
  json.extract! @country, :id, :name
  json.city_ids @country.cities.ids
end

json.cities do
  @country.cities.each do |city|
    json.set! city.id do
      json.extract! city, :id, :name, :country_id
      json.article_ids city.articles.ids
    end
  end
end

json.articles do
  @country.articles.each do |article|
    json.set! article.id do
      json.extract! article, :id, :name, :description, :city_id, :lat, :lng
      json.image_ids article.images.ids
    end
  end
end

json.images do
  @country.articles.each do |article|
    article.images.each do |image|
      json.set! image.id do
        json.extract! image, :id
        json.image_url asset_path(image.image.url)
      end
    end
  end
end
```
Since it is possible for my redux store to hold a shallow reference to a country or city (via the navbar dropdown) before the user navigates to that country/city show page, my React show page components needed a way to know when to return early from their initial render and fetch the full information set needed to populate the page. This could happen either when the component is first loaded or when it receives new props after mounting (e.g. a user navigates from one country show page to another).

To highlight my solution for countries, I created two slices of redux state nested under `ui`: `countryDetailLoaded` which points to a boolean and `currentCountryDetailId` which points to an array of a single id.

`countryDetailLoaded` is a prop which is used to return early from the component's initial `render` since the redux store does not have all the information needed for the page.

`currentCountryDetailId` is used to determine if a new AJAX call to the backend should be fired when the component has already mounted with a different country's information and receives new props.

Below is the logic for conditionally bypassing the `render` function when the component first mounts and receives new props:

```
// country_detail.jsx

const mapStateToProps = (state, ownProps) => {

  //let render method know when to return early

  const countryDetailLoaded = state.ui.countryDetailLoaded;
  if (!countryDetailLoaded){
    return {
      countryDetailLoaded
    };
  }

  //return early from render method again so componentDidUpdate can be hit and fetch new country info

  let currentCountryDetailId = state.ui.currentCountryDetailId[0];
  currentCountryDetailId = currentCountryDetailId.toString();

  let newCountryNotFetched = false;
  if (currentCountryDetailId !== ownProps.match.params.countryId){
    return {
      newCountryNotFetched: true
    };
  }
...

render(){
  if ((!this.props.countryDetailLoaded) || (this.props.newCountryNotFetched)){
    return <div></div>;
  }
  ...
}
```

The below React lifecycle methods were used to intelligently make AJAX calls to the backend:
```
// also country_detail.jsx

class CountryDetail extends React.Component {

  //complete country info fetched after returning early from initial render

  componentDidMount(){
    this.props.fetchCountry(this.props.match.params.countryId);
    window.scrollTo(0,0);
  }

  //new country info is fetched with component receives props via url wildcard countryId

  componentDidUpdate(prevProps, prevState){
    if (this.props.match.params.countryId !== prevProps.match.params.countryId) {
      this.props.fetchCountry(this.props.match.params.countryId);
    }
  }

  //redux state now knows to bypass initial render when this component is next called

  componentWillUnmount(){
    this.props.changeCountryDetailLoaded(false);
  }
...
}

```

## Future Direction
I am excited to continue improving the site! In the future I plan to:
* Integrate city and country creation with the article form
* Implement partial text search
* Implement "Been There" and "Want to Visit" tags that users can assign to articles
* Create a user profile page which documents the aforementioned tags and holds personalized maps of visited or wishlist places
