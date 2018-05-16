import React from 'react';
import { Link } from 'react-router-dom';
import ArticleThumb from '../article_thumb';
import { connect } from 'react-redux';
import { fetchCity } from '../../actions/city_actions';

class CityDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchCity(this.props.match.params.cityId);
    window.scrollTo(0,0);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.match.params.cityId !== prevProps.match.params.cityId) {
      this.props.fetchCity(this.props.match.params.cityId);
    }
  }

  render(){

    if (!this.props.cityLoaded){
      return <div></div>;
    }

    const articleCount = this.props.articles.length;
    let thing = "things";
    if (articleCount === 1) {thing = "thing";}

    const articleThumbs = this.props.articles.map((article, idx) => {
      return <ArticleThumb key={article.id} city={this.props.city} article={article} image={this.props.images[article.image_ids[0]]} count={idx + 1}/>;
    });

    return (
      <main>
        <div className="city-show-header">
          <Link className="city-show-country-link" to={`/countries/${this.props.country.id}`}>
            <p>{this.props.country.name}</p>
          </Link>

          <div className="city-show-holder-wrapper">
            <section className="city-show-holder" />

            <div className="city-show-text">
              <h2 className="city-show-intro">The Treasure Map guide to</h2>
              <h2 className="city-show-main-title">Hidden {this.props.city.name}</h2>
              <p className="city-show-tag">Discover {articleCount} cool and unusual {thing} to do in {this.props.city.name}, {this.props.country.name}</p>
            </div>
          </div>

        </div>

        <section className="city-show-article-thumbs">
          {articleThumbs}
        </section>

        <div className="city-show-map-wrapper">
          <section className="city-show-google-map"></section>
          <div className="city-show-map-text">
            <h2 className="city-show-footer">Explore {this.props.city.name}</h2>
            <div className="city-show-google-maps-container">Google Maps goes here</div>
          </div>
        </div>

      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const cityId = ownProps.match.params.cityId;
  let cityLoaded = true;
  if (!(state.entities.cities[cityId] && state.entities.cities[cityId].article_ids)){
    return {
      cityLoaded: false
    };
  }

  const city = state.entities.cities[cityId];
  const country = state.entities.countries[city.country_id];


  let articles = [];
  let images = {};
  city.article_ids.forEach(article_id => {
    articles.push(state.entities.articles[article_id]);
    let thumbImage = state.entities.images[state.entities.articles[article_id].image_ids[0]];
    images[thumbImage.id] = thumbImage;
    });

  return {
    city,
    country,
    articles,
    images,
    cityLoaded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCity: (id) => dispatch(fetchCity(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityDetail);


//send down country (id, name)
//send down city name
//send down article count
