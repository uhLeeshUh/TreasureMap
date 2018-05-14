import React from 'react';

const GoogleMaps = (props) = {
  const locOptions = this.props.cities.map(city => {
    return (<option key={city.id} value={city.id}>{city.name}, {this.props.countries[city.country_id]}</option>)
  })

  return (
    <select onChange={this.props.sendUpLocation}>
      {locOptions}
    </select>
  );
};

export default GoogleMaps;

//map the full list of cities avail from DB
//map the full list of countries avail from DB

//will either be rendered by GMArticleFrom (with user search bar) or with another connected component for the
// article show page
