import React from 'react';

const GoogleMaps = (props) => {
  let locOptions = props.cities.map(city => {
    return (<option key={city.id} value={city.name}>{city.name}, {props.countries[city.country_id].name}</option>);
  });

  return (
    <select onChange={props.sendUpLocation}>
      <option disabled selected value> -- Select a location -- </option>
      {locOptions}
    </select>
  );
};

export default GoogleMaps;

//map the full list of cities avail from DB
//map the full list of countries avail from DB

//will either be rendered by GMArticleFrom (with user search bar) or with another connected component for the
// article show page
