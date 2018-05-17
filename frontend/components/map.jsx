import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class Map extends React.Component{
  constructor(props){
    super(props);
    this.generateMap = this.generateMap.bind(this);
  }

  componentDidMount(){
    this.generateMap();
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (this.props.match !== prevProps.match){
      this.generateMap();
    }
  }

  generateMap(){
    const map = ReactDOM.findDOMNode(this.refs.map);
    const firstLoc = this.props.articles[0];
    const options = {
      center: { lat: firstLoc.lat, lng: firstLoc.lng },
      zoom: parseInt(this.props.zoom)
    };
    this.map = new google.maps.Map(map, options);
    this.addMarkers(this.props.articles);
  }

  addMarkers(articles){
    articles.forEach(article => {
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(article.lat, article.lng),
        map: this.map
      });
      marker.addListener('click', () => {
        alert(article.name);
      });
      return marker;
    });

  }

  render(){
    return (
      <div id="map" ref="map"/>
    );
  }
}

export default withRouter(Map);

//12 for cities and locs

// 8 for countries
