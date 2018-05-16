import React from 'react';
import { connect } from 'react-redux';
import { fetchTopCities } from '../../actions/city_actions';
import { fetchTopCountries } from '../../actions/country_actions';
import { Link, withRouter } from 'react-router-dom';

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
    this.props.fetchTopCities().then(
      () => this.props.fetchTopCountries()
    );
  }

  firstHalfCountries(){
    let first = this.props.countries.slice(0,3);
    let firstCountries = first.map(country => {
      return <Link key={country.id} to={`/countries/${country.id}`} ><li>{country.name}</li></Link>;
    });
    return firstCountries;
  }

  secondHalfCountries(){
    let second = this.props.countries.slice(3);
    let secondCountries = second.map(country => {
      return <Link key={country.id} to={`/countries/${country.id}`} ><li>{country.name}</li></Link>;
    });
    return secondCountries;
  }

  firstThirdCities(){
    let first = this.props.cities.slice(0,4);
    let firstCities = first.map(city => {
      return <Link key={city.id} to={`/cities/${city.id}`} ><li>{city.name}</li></Link>;
    });
    return firstCities;
  }

  secondThirdCities(){
    let second = this.props.cities.slice(4,8);
    let secondCities = second.map(city => {
      return <Link key={city.id} to={`/cities/${city.id}`} ><li>{city.name}</li></Link>;
    });
    return secondCities;
  }

  thirdThirdCities(){
    let third = this.props.cities.slice(8);
    let thirdCities = third.map(city => {
      return <Link key={city.id} to={`/cities/${city.id}`} ><li>{city.name}</li></Link>;
    });
    return thirdCities;
  }



  render(){
    if (this.props.firstRender){
      return <div></div>;
    }

    return (
      <main className="the-atlas">
        <div className="atlas-holder">
          <p className="tag-line">Discover the world's most hidden places</p>
        </div>
        <section className="map-dropdown-holder">
          <h1 className="top-destinations">Top Destinations</h1>
          <section className="map-lists-holder">
            <section className="country-holder">
              <h2 className="map-label-text">Countries</h2>
              <hr className="map-label-divider"></hr>
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
              <h2 className="map-label-text">Cities</h2>
              <hr className="map-label-divider"></hr>
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
        </section>
      </main>
    );
  }
}


const mapStateToProps = (state) => {

  let firstRender = true;
  if (state.ui.topCountryIds.length > 0 && state.ui.topCityIds.length > 0){
    firstRender = false;
  }

  if (firstRender){
    return {firstRender};
  }

  let countries = state.ui.topCountryIds.map(country_id => {
    return state.entities.countries[country_id];
  });

  let cities = state.ui.topCityIds.map(city_id => {
    return state.entities.cities[city_id];
  });

  return {
    countries,
    cities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopCities: () => dispatch(fetchTopCities()),
    fetchTopCountries: () => dispatch(fetchTopCountries())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(mapDropdown));
