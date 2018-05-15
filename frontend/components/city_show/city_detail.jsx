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
    if (this.props.match.params.articleId !== prevProps.match.params.articleId) {
      this.props.fetchCity(this.props.match.params.cityId);
    }
  }

  render(){
    const articleCount = this.props.articles.length;
    let thing = "things";
    if (articleCount === 1) {thing = "thing";}

    const articleThumbs = this.props.articles.map((article, idx) => {
      console.log(this.props.images[article.image_ids[0]]);
      return <ArticleThumb key={article.id} city={this.props.city} article={article} image={this.props.images[article.image_ids[0]]} count={idx + 1}/>;
    });

    return (
      <main>
        <div className="city-show-header">
          <Link className="city-show-country-link" to={`/countries/${this.props.country.id}`}>
            <p>{this.props.country.name}</p>
          </Link>

          <section className="city-show-holder">
              <h1>Hidden {this.props.city.name}</h1>
              <p>Discover {articleCount} cool and unusual {thing} to do in {this.props.city.name}</p>
          </section>
        </div>

        <section className="city-show-article-thumbs">
          {articleThumbs}
        </section>

        <section className="city-show-google-map">
          <h2>Explore {this.props.city.name}</h2>
          <div>Google Maps goes here
          </div>
        </section>

      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //TODO: comment back in countries when add in countries reducer
  const defaultCity = {id: 17, name: "Beijing", country_id: 3 };
  const defaultCountry = {id: 3, name: "China"};

  const cityId = ownProps.match.params.cityId;
  let city = defaultCity;
  if (state.entities.cities) {
    city = state.entities.cities[cityId] || defaultCity;
  }
  let country = defaultCountry;
  // if (state.entities.countries.length > 0) {
  //   country = state.entities.countries[city.country_id] || defaultCountry;
  // }

  let articles = [];
  let images = {};
  if (city.article_ids) {
    city.article_ids.forEach(article_id => {
      articles.push(state.entities.articles[article_id]);

    if (state.entities.articles[article_id] && state.entities.articles[article_id].image_ids.length > 0){
        let thumbImage = state.entities.images[state.entities.articles[article_id].image_ids[0]];
        images[thumbImage.id] = thumbImage;
      }

    });
  }

  return {
    city,
    country,
    articles,
    images
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
