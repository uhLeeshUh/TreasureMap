import React from "react";
import { Link } from "react-router-dom";
import ArticleThumb from "../article_thumb";
import Map from "../map";
import { connect } from "react-redux";
import {
  fetchCountry,
  changeCountryDetailLoaded
} from "../../actions/country_actions";

class CountryDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCountry(this.props.match.params.countryId);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    const newCountryId = this.props.match.params.countryId;
    if (newCountryId !== prevProps.match.params.countryId) {
      this.props.fetchCountry(newCountryId);
    }
  }

  componentWillUnmount() {
    this.props.changeCountryDetailLoaded(false);
  }

  render() {
    // (!this.props.countryDetailLoaded || this.props.newCountryNotFetched)
    if (!this.props.countryDetailLoaded || this.props.newCountryNotFetched) {
      return <div />;
    }

    const that = this;

    const articleCount = this.props.articles.length;
    let thing = "things";
    if (articleCount === 1) {
      thing = "thing";
    }

    const articleThumbs = this.props.articles.map((article, idx) => {
      const city = that.props.cities[that.props.articles[idx].city_id];
      return (
        <ArticleThumb
          key={article.id}
          city={city}
          article={article}
          image={that.props.images[article.image_ids[0]]}
          count={idx + 1}
        />
      );
    });

    return (
      <main>
        <div className="city-show-header">
          <div className="city-show-holder-wrapper">
            <section className="city-show-holder" />

            <div className="city-show-text">
              <h2 className="city-show-intro">The Treasure Map guide to</h2>
              <h2 className="city-show-main-title">
                Hidden {this.props.country.name}
              </h2>
              <p className="city-show-tag">
                Discover {articleCount} cool and unusual {thing} to do in{" "}
                {this.props.country.name}
              </p>
            </div>
          </div>
        </div>

        <section className="city-show-article-thumbs">{articleThumbs}</section>

        <div className="city-show-footer">
          <div className="city-show-map-wrapper">
            <section className="city-show-google-map" />

            <div className="city-show-map-text">
              <h2 className="city-show-footer-holder">
                Explore {this.props.country.name}
              </h2>
              <div className="city-show-google-maps-container">
                <Map articles={this.props.articles} zoom="4" />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const countryDetailLoaded = state.ui.countryDetailLoaded;
  // check to see that the component has loaded before, and therefore
  // the full set of country info is in Redux store
  // (not just what is needed for map dropdown)
  if (!countryDetailLoaded) {
    return {
      countryDetailLoaded
    };
  }

  let currentCountryDetailId = state.ui.currentCountryDetailId[0];
  currentCountryDetailId = currentCountryDetailId.toString();
  // check to see that full target country info exists in Redux state,
  // not just what is needed for map dropdown
  let newCountryNotFetched = false;
  const countryId = ownProps.match.params.countryId;
  if (currentCountryDetailId !== countryId) {
    return {
      newCountryNotFetched: true
    };
  }

  const country = state.entities.countries[countryId];
  let cities = {};
  country.city_ids.forEach(cityId => {
    cities[cityId] = state.entities.cities[cityId];
  });

  let articles = [];
  let images = {};

  Object.values(cities).forEach(city => {
    city.article_ids.forEach(articleId => {
      let article = state.entities.articles[articleId];
      articles.push(article);

      let thumbImage = state.entities.images[article.image_ids[0]];
      images[thumbImage.id] = thumbImage;
    });
  });

  return {
    country,
    cities,
    articles,
    images,
    countryDetailLoaded,
    newCountryNotFetched
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCountry: id => dispatch(fetchCountry(id)),
    changeCountryDetailLoaded: bool => dispatch(changeCountryDetailLoaded(bool))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryDetail);
