import React from 'react';
import { connect } from 'react-redux';
import { fetchTopCities } from '../../actions/city_actions';
import { fetchTopCountries } from '../../actions/country_actions';
import { Link } from 'react-router-dom';

class mapDropdown extends React.Component {
  constructor(props){
    super(props);
    this.firstHalfCountries = this.firstHalfCountries.bind(this);
    this.secondHalfCountries = this.secondHalfCountries.bind(this);
    this.firstThirdCities = this.firstThirdCities.bind(this);
    this.secondThirdCities = this.secondThirdCities.bind(this);
    this.thirdThirdCities = this.thirdThirdCities.bind(this);
  }

  componentDidMount(){
    this.props.fetchTopCities();
    this.props.fetchTopCountries();
  }

  firstHalfCountries(){
    let first = this.props.countries.slice(0,4);
    let firstCountries = first.map(country => {
      return <Link to={`/countries/${country.id}`}><li>{country.name}</li></Link>
    });
    return firstCountries;
  }

  secondHalfCountries(){
    let second = this.props.countries.slice(4);
    let secondCountries = second.map(country => {
      return <Link to={`/countries/${country.id}`}><li>{country.name}</li></Link>
    });
    return secondCountries;
  }

  firstThirdCities(){
    let first = this.props.cities.slice(0,4);
    let firstCities = first.map(city => {
      return <Link to={`cities/${city.id}`}><li>{city.name}</li></Link>
    });
  }

  secondThirdCities(){
    let second = this.props.cities.slice(4,8);
    let secondCities = second.map(city => {
      return <Link to={`cities/${city.id}`}><li>{city.name}</li></Link>
    });
  }

  thirdThirdCities(){
    let third = this.props.cities.slice(8);
    let thirdCities = third.map(city => {
      return <Link to={`cities/${city.id}`}><li>{city.name}</li></Link>
    });
  }



  render(){
    return (
      <main>
        <h1>Top Destinations</h1>
        <section className="map-lists-holder">
          <section className="country-holder">
            <h2>Countries</h2>
            <div className="country-list-holder">
              <ul className="country-list-one">
                {this.firstHalfCountries()}
              </ul>
              <ul className="country-list-two">
                {this.secondHalfCountries()}
              </ul>
            </div>
          </section>

          <section className="city-holder">
            <h2>Cities</h2>
            <div className="city-list-holder">
              <ul className="city-list-one">
                {this.firstThirdCities()}
              </ul>
              <ul className="city-list-two">
                {this.secondThirdCities()}
              </ul>
              <ul className="city-list-three">
                {this.thirdThirdCities()}
              </ul>
            </div>
          </section>
        </section>
      </main>
    );
  }
}


const mapStateToProps = (state) => {

  let firstRender = true;
  if (state.ui.topCountryIds.length > 0){
    firstRender = false;
  }

  if (firstRender){
    return;
  }

  let countries = state.ui.topCountryIds.map(country_id => {
    return state.entities.countries[country_id];
  })

  let cities = state.ui.topCityIds.map(city_id => {
    return state.ui.cities[city_id];
  })

  return {
    countries,
    cities
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopCities: dipsatch(fetchTopCities()),
    fetchTopCountries: dipsatch(fetchTopCountries())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(mapDropdown);
