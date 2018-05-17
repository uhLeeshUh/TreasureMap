import React from 'react';
import { Link } from 'react-router-dom';
import ArticleThumb from '../article_thumb';
import { connect } from 'react-redux';
import { fetchCountry, changeCountryDetailLoaded } from '../../actions/country_actions';

class CountryDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchCountry(this.props.match.params.countryId);
    window.scrollTo(0,0);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.match.params.countryId !== prevProps.match.params.countryId) {
      this.props.fetchCountry(this.props.match.params.countryId);
      // .then(
      //   () => this.props.changeCountryDetailLoaded(true)
      // );
    }
  }
  //
  // shouldComponentUpdate(nextProps, nextState){
  //   if (!this.props.countryDetailLoaded)
  // }

  componentWillUnmount(){
    this.props.changeCountryDetailLoaded(false);
  }

  render(){
    if ((!this.props.countryDetailLoaded) || (this.props.newCountryNotFetched)){
      return <div></div>;
    }

    const that = this;

    const articleCount = this.props.articles.length;
    let thing = "things";
    if (articleCount === 1) {thing = "thing";}

    const articleThumbs = this.props.articles.map((article, idx) => {
      const city = that.props.cities[that.props.articles[idx].city_id];
      return <ArticleThumb key={article.id} city={city} article={article} image={that.props.images[article.image_ids[0]]} count={idx + 1}/>;
    });

    return (
      <main>
        <div className="city-show-header">

          <div className="city-show-holder-wrapper">
            <section className="city-show-holder" />

            <div className="city-show-text">
              <h2 className="city-show-intro">The Treasure Map guide to</h2>
              <h2 className="city-show-main-title">Hidden {this.props.country.name}</h2>
              <p className="city-show-tag">Discover {articleCount} cool and unusual {thing} to do in {this.props.country.name}</p>
            </div>
          </div>

        </div>

        <section className="city-show-article-thumbs">
          {articleThumbs}
        </section>

        <div className="city-show-footer">
          <div className="city-show-map-wrapper">
            <section className="city-show-google-map"></section>

            <div className="city-show-map-text">
              <h2 className="city-show-footer-holder">Explore {this.props.country.name}</h2>
              <div className="city-show-google-maps-container">Google Maps goes here</div>
            </div>
          </div>
        </div>

      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const countryDetailLoaded = state.ui.countryDetailLoaded;
  if (!countryDetailLoaded){
    return {
      countryDetailLoaded
    };
  }
  let currentCountryDetailId = state.ui.currentCountryDetailId[0];
  currentCountryDetailId = currentCountryDetailId.toString();
  console.log(currentCountryDetailId);
  let newCountryNotFetched = false;
  if (currentCountryDetailId !== ownProps.match.params.countryId){
    return {
      newCountryNotFetched: true
    };
  }

  const countryId = ownProps.match.params.countryId;

  // const defaultCountry = {id: 3, name: "China"};
  // const defaultCity = {id: 17, name: "Beijing", country_id: 3 };

  // let country = defaultCountry;
  // if (state.entities.countries[countryId]) {
  const country = state.entities.countries[countryId];
  //
  // {id: 1, name: "USA", city_ids: []};
  // }
  let cities = {};
  // if (country.city_ids) {
    country.city_ids.forEach(city_id => {
      cities[city_id] = state.entities.cities[city_id];
      // cities.push(state.entities.cities[city_id]);
    // });
  });

  let articles = [];
  let images = {};
  //PICK UP HERE!!
  // if (country.city_ids){
  //   country.city_ids.forEach(city_id)
  // }

  // if (city.article_ids) {
  Object.values(cities).forEach(city => {
    city.article_ids.forEach(article_id => {
      articles.push(state.entities.articles[article_id]);

      // if (state.entities.articles[article_id] && state.entities.articles[article_id].image_ids.length > 0){
      let thumbImage = state.entities.images[state.entities.articles[article_id].image_ids[0]];
      images[thumbImage.id] = thumbImage;
      // }
    });
  });
  // }
  return {
    country,
    cities,
    articles,
    images,
    countryDetailLoaded,
    newCountryNotFetched
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountry: (id) => dispatch(fetchCountry(id)),
    changeCountryDetailLoaded: (bool) => dispatch(changeCountryDetailLoaded(bool))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);


//send down country (id, name)
//send down city name
//send down article count
