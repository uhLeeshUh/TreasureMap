  import React from 'react';
  import ReactDOM from 'react-dom';

  class FormMap extends React.Component{
    constructor(props){
      super(props);
      this.input = React.createRef();
      this.formMap = React.createRef();
      // this.place = null;
      this.lat = this.props.placeCoords.lat;
      this.lng = this.props.placeCoords.lng;
      if (this.lat === 0 && this.lng === 0){
        this.placeAddress = "";
      } else {
        //write logic for geocode AJAX request
      }
      this.state = {
        mapDisplayClass: "map-hidden"
      };

    }

    componentDidMount(){
      this.createAutoComplete();
    }

    createAutoComplete(){
      const autocomplete = new google.maps.places.Autocomplete(
        this.input.current,
        {types: ['geocode', 'establishment']}
      );

      autocomplete.addListener('place_changed', () => {

        this.place = autocomplete.getPlace();
        let htmlAddressStr = this.place.adr_address;
        let strSearchTerms = ['locality', 'country-name'];
        let cityAndCountry = strSearchTerms.map(searchVal => {
          let parseSearch = new RegExp(`"${searchVal}">(.*?)</span>`);
          let result = parseSearch.exec(htmlAddressStr);
          return result[1];
        })
        let cityName = cityAndCountry[0];
        let countryName = cityAndCountry[1];
        this.lat = this.place.geometry.location.lat();
        this.lng = this.place.geometry.location.lng();

        this.createFormMap();

        this.setState({ mapDisplayClass: "map-shown" });
        this.props.updateArticle({
          lat: this.lat,
          lng: this.lng,
          cityName,
          countryName
        });
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
            <input ref={this.input} id="autocomplete" placeholder="E.g. 304 Deerfield Way, Normal, Illinois" type="text" value={this.placeAddress}></input>
            <div id="form-map" ref={this.formMap} className={this.state.mapDisplayClass}></div>
          </div>
        </section>
      );
    }
  }

  export default FormMap;
