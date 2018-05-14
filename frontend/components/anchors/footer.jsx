import React from 'react';
import { Link } from 'react-router-dom';

const Footer = function(props){

  let footerButton = "";
  if (props.location.pathname !== "/articles/new"){
    footerButton =
    <section className="footer-bottom">
      <div className="footer-outline"></div>
      <div className="footer-button">
        <Link className="footer-link" to="/articles/new">
          <i id="map-pin" class="fas fa-map-pin"></i>
          ADD A PLACE TO THE ATLAS
        </Link>
      </div>
    </section>;
  }

    return (
      footerButton
    );

};


export default Footer;
