  import React from 'react';
  import ReactDOM from 'react-dom';

  class FormMap extends React.Component{
    constructor(props){
      super(props);
      this.input = React.createRef();
      this.formMap = React.createRef();
      this.place = null;
      this.lat = null;
      this.lng = null;
      this.state = {
        mapDisplayClass: "map-hidden"
      };

      // this.handleInputSelect = this.handleInputSelect.bind(this);
    }

    componentDidMount(){
      this.createAutoComplete();
      // this.createFormMap();
    }

    //create search bar
    //create map to view location chosen
    //needs to return lat/lng coordinates as a callback to the parent to store in formData

    createAutoComplete(){
      const autocomplete = new google.maps.places.Autocomplete(
        this.input.current,
        {types: ['geocode', 'establishment']}
      );

      autocomplete.addListener('place_changed', () => {
        this.place = autocomplete.getPlace();
        this.lat = this.place.geometry.location.lat();
        this.lng = this.place.geometry.location.lng();
        this.createFormMap();
        this.setState({mapDisplayClass: "map-shown"});
        //get lat and lng
          //feed these to the map and have it appear on this page
          //send them to article form for article creation

        //send the country to the article form
        //send the city to the article form
      } );
    }

    createFormMap(){
      let placeLatLng = { lat: this.lat, lng: this.lng };

      const options = {
        center: placeLatLng,
        zoom: 15
      };

      const map = new google.maps.Map(this.formMap.current, options);

      const marker = new google.maps.Marker({
        position: placeLatLng,
        map: map,
        title: 'treasure-map-destination'
        });
    }

    render(){
      return (
        <section>
          <div>
            <input ref={this.input} id="autocomplete" placeholder="E.g. 304 Deerfield Way, Normal, Illinois" type="text" ></input>
            <div id="form-map" ref={this.formMap} className={this.state.mapDisplayClass}></div>
          </div>
        </section>
      );
    }
  }

  export default FormMap;
