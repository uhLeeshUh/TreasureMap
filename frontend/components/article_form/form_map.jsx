  import React from 'react';
  import ReactDOM from 'react-dom';

  class FormMap extends React.Component{
    constructor(props){
      super(props);
      this.input = React.createRef();
      this.formMap = React.createRef();
    }

    componentDidMount(){
      this.createAutoComplete();
      this.createFormMap();
    }

    //create search bar
    //create map to view location chosen
    //needs to return lat/lng coordinates as a callback to the parent to store in formData

    createAutoComplete(){
      const autocomplete = new google.maps.places.Autocomplete(
        this.input.current,
        {types: ['geocode', 'establishment']}
      );

    }

    createFormMap(){
      const options = {
        center: { lat: 40.730610, lng: -73.935242 },
        zoom: 12
      };
      this.map = new google.maps.Map(this.formMap.current, options);
    }

    render(){
      return (
        <section>
          <div>
            <input ref={this.input} id="autocomplete" placeholder="E.g. 304 Deerfield Way, Normal, Illinois" type="text" ></input>
            <div id="form-map" ref={this.formMap} style={{display:"none"}}></div>
          </div>
        </section>
      );
    }
  }

  export default FormMap;
