import * as CountryAPIUtil from '../util/country_api_util';

export const RECEIVE_COUNTRIES = "RECEIVE_COUNTRIES";
export const RECEIVE_TOP_COUNTRIES = "RECEIVE_TOP_COUNTRIES";
export const RECEIVE_COUNTRY = "RECEIVE_COUNTRY";
export const RECEIVE_COUNTRY_ERRORS = "RECEIVE_COUNTRY_ERRORS";
export const REMOVE_COUNTRY_ERRORS = "REMOVE_COUNTRY_ERRORS";
export const CHANGE_COUNTRY_DETAIL_LOADED = "CHANGE_COUNTRY_DETAIL_LOADED";

//synchronous action creators

export const receiveCountries = (countriesPayload) => {
  return {
    type: RECEIVE_COUNTRIES,
    countriesPayload
  };
};

export const receiveTopCountries = (countriesPayload) => {
  return {
    type: RECEIVE_TOP_COUNTRIES,
    countriesPayload
  };
};

export const receiveCountry = (countryPayload) => {
  return {
    type: RECEIVE_COUNTRY,
    countryPayload
  };
};

export const receiveCountryErrors = (errors) => {
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

export const changeCountryDetailLoaded = (boolean) => {
  return {
    type: CHANGE_COUNTRY_DETAIL_LOADED,
    boolean
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
      (countriesPayload) => dispatch(receiveTopCountries(countriesPayload)),
      (errors) => dispatch(receiveCountryErrors)
    );
  };
};
