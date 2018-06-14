import * as CityAPIUtil from "../util/city_api_util";

export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const RECEIVE_TOP_CITIES = "RECEIVE_TOP_CITIES";
export const RECEIVE_CITY = "RECEIVE_CITY";
export const RECEIVE_CITY_ERRORS = "RECEIVE_CITY_ERRORS";
export const REMOVE_CITY_ERRORS = "REMOVE_CITY_ERRORS";

//synchronous action creators

export const receiveCities = citiesPayload => {
  return {
    type: RECEIVE_CITIES,
    citiesPayload
  };
};

export const receiveTopCities = citiesPayload => {
  return {
    type: RECEIVE_TOP_CITIES,
    citiesPayload
  };
};

export const receiveCity = cityPayload => {
  return {
    type: RECEIVE_CITY,
    cityPayload
  };
};

export const receiveCityErrors = errors => {
  return {
    type: RECEIVE_CITY_ERRORS,
    errors
  };
};

export const removeCityErrors = () => {
  return {
    type: REMOVE_CITY_ERRORS
  };
};

//asynchronous action creators

export const fetchCity = id => {
  return dispatch => {
    return CityAPIUtil.fetchCity(id).then(
      cityPayload => dispatch(receiveCity(cityPayload)),
      errors => dispatch(receiveCityErrors(errors))
    );
  };
};

export const fetchTopCities = () => {
  return dispatch => {
    return CityAPIUtil.fetchTopCities().then(
      citiesPayload => dispatch(receiveTopCities(citiesPayload)),
      errors => dispatch(receiveCityErrors(errors))
    );
  };
};

export const createCity = (country, city) => {
  return dispatch => {
    return CityAPIUtil.createCity(country, city).then(
      city => dispatch(receiveCity(city)),
      errors => dispatch(receiveCityErrors(errors))
    );
  };
};
