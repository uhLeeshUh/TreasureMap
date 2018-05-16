import * as CountryAPIUtil from '../util/country_api_util';

export const RECEIVE_COUNTRIES = "RECEIVE_COUNTRIES";
export const RECEIVE_COUNTRY = "RECEIVE_COUNTRY";
export const RECEIVE_COUNTRY_ERRORS = "RECEIVE_COUNTRY_ERRORS";
export const REMOVE_COUNTRY_ERRORS = "REMOVE_COUNTRY_ERRORS";

//synchronous action creators

export const receiveCountries = (countriesPayload) => {
  return {
    type: RECEIVE_COUNTRIES,
    countriesPayload
  };
};

export const receiveCountry = (countryPayload) => {
  return {
    type: RECEIVE_COUNTRY,
    countryPayload
  };
};

export const recieveCountryErrors = (errors) => {
  return {
    type: RECEIVE_COUNTRY_ERRORS,
    errors
  };
};

export const removeCountryErrors = () => {
  return {
    type: REMOVE_COUNTRY_ERRORS
  };
};

//asynchronous action creators

export const fetchCountries = () => {
  return (dispatch) => {
    return CountryAPIUtil.fetchCountries().then(
      (countriesPayload) => dispatch(receiveCountries(countriesPayload)),
      (errors) => dispatch(receiveCountryErrors)
    );
  };
};

export const fetchCountry = (id) => {
  return (dispatch) => {
    return CountryAPIUtil.fetchCountry(id).then(
      (countryPayload) => dispatch(receiveCountry(countryPayload)),
      (errors) => dispatch(receiveCountryErrors)
    );
  };
};

export const fetchTopCountries = () => {
  return (dispatch) => {
    return CountryAPIUtil.fetchTopCountries().then(
      (countriesPayload) => dispatch(receiveCountries(countriesPayload)),
      (errors) => dispatch(receiveCountryErrors)
    );
  };
};
