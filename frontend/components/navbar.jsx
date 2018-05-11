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
    sessionDropdown = <SessionDropdownContainer class="sessionDropdown"/>;
    search = <SearchContainer class="search"/>;
  }

  return(
    <section className="nav">
      <div className="logo">I'm the logo!</div>
      {map}
      <div className="right-nav">
        <ul>
          <li>{sessionDropdown}</li>
          <li>{search}</li>
        </ul>
    </div>
    </section>
  );
};

//MapContainer & SearchContainer are connected to redux store
//SerachContainer is a controlled component