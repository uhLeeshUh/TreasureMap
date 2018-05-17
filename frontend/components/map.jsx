import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 10
    };
    this.map = new google.maps.Map(map, options);
    this.addMarker({lat: this.props.lat, lng: this.props.lng});
  }

  addMarker(location){
    const pos = new google.maps.LatLng(location.lat, location.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
    marker.addListener('click', () => {
      alert(this.props.name);
    });
  }

  render(){
    return (
      <div id="map" ref="map"/>
    );
  }
}

export default Map;

//need to pass down lat/lng,name
