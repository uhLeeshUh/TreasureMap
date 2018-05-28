  import React from 'react';
  import ReactDOM from 'react-dom';

  class FormMap extends React.Component{
    constructor(props){
      super(props);
    }

    componentDidMount(){
      this.createAutoComplete();
    }

    //create search bar
    //create map to view location chosen
    //needs to return lat/lng coordinates as a callback to the parent to store in formData

    createAutoComplete(){
      const autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('autocomplete')),
        {types: ['geocode']}
      );

    }

    render(){
      return (
        <section>
          <div>
            <input id="autocomplete" placeholder="E.g. 304 Deerfield Way, Normal, Illinois" type="text" ></input>
          </div>
        </section>
      );
    }
  }

  export default FormMap;
