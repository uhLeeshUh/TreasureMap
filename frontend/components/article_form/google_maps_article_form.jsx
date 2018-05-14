import React from 'react';
import GoogleMaps from '../google_maps';
import { connect } from 'react-redux';

const GoogleMapsArticleForm = (props) => {
  return (
    <GoogleMaps sendUpLocation={props.sendUpLocation} cities={props.cities} countries={props.countries}/>
  );
};

const mapStateToProps = (state) => {
  return {
    cities:
      [{id: 1, name: 'Bruceville, IN', country_id: 1},
      {id: 2, name: 'Hugo, OK', country_id: 1},
      {id: 3, name: 'Paris, TX', country_id: 1},
      {id: 4, name: 'New York City, NY', country_id: 1},
      {id: 5, name: 'Kutna Hora', country_id: 2}],
    countries: {
      1: {id: 1, name: "United States of America"},
      2: {id: 2, name: "Czech Republic"},
    }
};
  // cities: state.entities.cities,
  // countries: state.entities.countries
};

// const mapDispatchToProps = (dispatch) => {
//
// };

export default connect(mapStateToProps)(GoogleMapsArticleForm);

//eventually this page will have the user search bar to type in location
// the GoogleMaps component just exists as a map, and is passed down inline lat/lng info from this component
