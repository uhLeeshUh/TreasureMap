import React from "react";
import { Link } from "react-router-dom";

const Footer = function(props) {
  const restrictedPaths = ["/articles/new", "/signin", "/signup"];

  let footerButton = "";
  if (!restrictedPaths.includes(props.location.pathname)) {
    footerButton = (
      <section className="footer-bottom">
        <div className="footer-outline" />
        <div className="footer-button">
          <Link className="footer-link" to="/articles/new">
            <i id="map-pin" className="fas fa-map-pin" />
            ADD A PLACE TO THE ATLAS
          </Link>
        </div>
      </section>
    );
  }

  return footerButton;
};

export default Footer;
