import React from 'react';
import MapContainer from './map_container';
import SessionDropdownContainer from './session_dropdown_container';
import SearchContainer from './search_container';
import { connect } from 'react-redux';

export const NavBar = (props) => {
  let map;
  let sessionDropdown;
  let search;
  const hiddenPaths = ["/signin", "/signup"];

  if (!hiddenPaths.includes(props.location.pathname)) {
    map = <MapContainer />;
    sessionDropdown = <SessionDropdownContainer />;
    search = <SearchContainer />;
  }

  return(
    <section>
      <div className="logo">I'm here!</div>
      {map}
      {sessionDropdown}
      {search}
    </section>
  );
};

//MapContainer & SearchContainer are connected to redux store
//SerachContainer is a controlled component
