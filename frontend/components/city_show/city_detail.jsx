import React from 'react';
import Link from 'react-router-dom';
import ArticleThumb from '../article_thumb';
import { connect } from 'react-redux';

class CityDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchCity(props.match.params.cityId);
  }

  render(){
    const articleCount = this.props.articles.length;
    let thing = "things";
    if (articleCount === 1) {thing = "thing";}

    const articleThumbs = this.props.articles.map(article => {
      return <ArticleThumb key={article.id} article={article}/>;
    });

    return (
      <main>
        <Link to={`/countries/${this.props.country.id}`}>(this.props.country.name)</Link>

        <section className="city-show-header">
          <h1>Hidden {this.props.city.name}</h1>
          <p>Discover {articleCount} cool and unusual {thing} to do in {this.props.city.name}</p>
        </section>

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
  const cityId = ownProps.match.params.cityId;
  const city = state.entities.cities.cityId;
  const articles = city.article_ids.map(article_id => {
    return state.entities.articles[article_id];
  });

  const defaultCity = {id: 0, name: "Barcelona", country_id: 12 };
  const defaultCountry = {id: 0, name: "Spain"};

  return {
    city: city || defaultCity,
    country: state.entities.countries[city.country_id] || defaultCountry,
    articles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCity: (id) => dispatch(fetchCity(id))
  };
};

export default connect(mapStateToProps)(CityDetail);


//send down country (id, name)
//send down city name
//send down article count
