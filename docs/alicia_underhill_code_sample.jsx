// -------------------------------------------------------------------
// This code sample overviews the process of either creating
// or editing an article in my web app, TreasureMap.
// Both actions share the same React `ArticleForm` component
// and are connected to the Redux store by container components
// (`CreateArticleContainer` & `EditArticleContainer`, respectively).

// `ArticleForm` holds local state to keep track of anything a user
// enters related to an article (i.e. article inputs, country info,
// city info, & images) and its `submit` method sends this all to the
// backend through chained AJAX calls.
// -------------------------------------------------------------------

// From article_form.jsx:

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: this.props.article,
      country: this.props.country,
      city: this.props.city,
      images: this.props.images
    };
    this.articleFormData = new FormData();
    // ...
  }

  submit(e) {
    e.preventDefault();
    // Clear any submission errors so they may repopulate in this
    // submission attempt if needed
    this.props.clearArticleErrors();

    let { country, city, article } = this.state;
    // Must first check if country exists in the DB; if not, create it
    // See snippet at bottom from CountriesController
    this.createCountry(country).then(countryResponse => {
      // Must then check if city exists in the DB; if not, create it
      this.props
        .createCity(countryResponse.countryPayload.country, city)
        .then(cityResponse => {
          // Now either create or edit the article
          this.handleArticleSubmit(cityResponse, article);
        });
    });
  }

  handleArticleSubmit(cityResponse, article) {
    // Put all article-relevant info into a FormData object
    // to comply with paperclip gem (for image parsing)
    this.appendArticleInfo(cityResponse, article);
    // Both images and article edits are nested resources under `Article`,
    // so they are appended to FormData object as well
    // See snippet at bottom for excerpt from Article model
    this.appendImageInfo();
    this.appendEditInfo();
    // `action` is an alias for an AJAX call, either
    // to create or edit the article depending on form type
    this.props.action(this.articleFormData).then(submitResponse => {
      return this.props.history.push(
        `/articles/${submitResponse.articlePayload.article.id}`
      );
    });
  }
}


// -------------------------------------------------------------------
// See below for the props passed to ArticleForm when user is creating
// a new article
// -------------------------------------------------------------------

// From create_article_container.jsx:

const mapStateToProps = (state, ownProps) => {
  const defaultArticle = {
    name: "",
    description: "",
    long_description: "",
    body: "",
    lat: 0,
    lng: 0
  };
  const country = { name: "" };
  const city = { name: "" };
  const images = [];

  return {
    article:
      state.entities.articles[ownProps.match.params.articleId] ||
      defaultArticle,
    formType: "Add a Place",
    author_id: state.session.id,
    buttonText: "SUBMIT THIS PLACE",
    errors: state.errors.article,
    country,
    city,
    images
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: article => dispatch(createArticle(article)),
    clearArticleErrors: () => dispatch(clearArticleErrors()),
    createCountry: country => dispatch(createCountry(country)),
    createCity: (country, city) => dispatch(createCity(country, city))
  };
};


// -------------------------------------------------------------------
// Countries and Cities controllers' #create method conditionally
// create new entries by checking first to see if DB already has them.
// For example, below is the country logic:
// -------------------------------------------------------------------

// From countries_controller.rb

def create
  @country = Country.new(country_params)
  // use custom `existing_country` method to query DB by country's name
  // return value will be an instance of Country or nil
  already_created_country = Country.existing_country(@country.name)

  if already_created_country
    @country = already_created_country
    render '/api/countries/new_country'
    return
  end

  if @country.save
    render '/api/countries/new_country'
  else
    render json: @country.errors.full_messages, status: 422
  end

end


// -------------------------------------------------------------------
// Nested Image and ArticleEdit creation permitted through associations
// and Article::accepts_nested_attributes_for Rails ActiveRecord class method
// -------------------------------------------------------------------

// From article.rb:

class Article < ApplicationRecord

has_many :edits,
  class_name: :ArticleEdit,
  foreign_key: :article_id

has_many :images,
  class_name: :Image,
  foreign_key: :article_id,
  inverse_of: :article

accepts_nested_attributes_for :images, :edits

end
