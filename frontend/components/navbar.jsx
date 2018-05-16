import React from 'react';
import MapDropdown from './anchors/map_dropdown';
import SessionDropdownContainer from './session_dropdown_container';
import SearchContainer from './search_container';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
  let map;
  let sessionDropdown;
  let search;
  const hiddenPaths = ["/signin", "/signup"];

  if (!hiddenPaths.includes(props.location.pathname)) {
    map = <MapDropdown />;
    sessionDropdown = <SessionDropdownContainer class="sessionDropdown"/>;
    search = <SearchContainer class="search"/>;
  }

  return(
    <section className="nav">
      <div className="logo">
        <Link to="/">
          <img className="logo-image" src={ window.images.treasureMapLogo }></img>
          <p>Treasure Map</p>
        </Link>
      </div>

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
