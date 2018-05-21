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
Via a relational database structure, my Article model utilizes its associations and the `#accepts_nested_attributes_for` ActiveRecord class method to concurrently create images and/or article edits when an article is created or edited via the article form. This consolidates three separate backend hits into one AJAX call and eliminates the need for an Images or ArticleEdits controller since these resources are always dependent on articles.

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

The article form compiled article, image and edit information to send up as a single FormData bundle via its `submit` method:

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
To more easily facilitate the connection of users and interesting places for them to visit, I created a dropdown on the site's navbar which highlights the top countries and cities featured on the site (using the heuristic of associated article counts). This feature provided two interesting challenges: (1) querying by associations to determine article count and (2) intelligently fetching shallow vs. deep country and city information to conserve client-side RAM.

#### (1) Querying by associations
I made the following ActiveRecord queries to determine the top countries and cities, respectively, by article count upon the app's initial load:

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
When displaying countries and cities for the navbar dropdown menu, all my redux store should hold is the country or city's `:id` and `:name` to optimize client-side storage. Only when a user clicks on one of these links and navigates to a country or city show page do I need to fetch a complete information set containing associated article, author, editor and image information.

For example, to determine when a country show page needs to bypass its render method and fire an AJAX request to fetch its full information from the database I created two slices of redux state nested under `ui`:

(1) `countryDetailLoaded`: this points to a boolean (defaults to false) and is passed to the component to conditionally return early from the initial render when the value is false. This turns to true after a component is loaded and then turns back to false in the componentWillUnmount lifecycle method.

(2) `currentCountryDetailId`: this is an array which holds the id of the current country show page (if the user is already on the component). If the array holds a value, the component will return early from its render method and re-fetch updated country information via its componentDidUpdate lifecycle method.

The below demo illustrates how the user can interact with the navbar dropdown (requiring a shallow information set for countries and cities) and click a link directed toward a country or city show page (requiring another AJAX call for the full page information).



## Future Direction
I am excited to continue improving the site! In the future I plan to:
* Integrate city and country creation with the article form
* Implement partial text search
* Implement "Been There" and "Want to Visit" tags that users can assign to articles
* Create a user profile page which documents the aforementioned tags and holds personalized maps of visited or wishlist places
