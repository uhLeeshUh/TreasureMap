export const fetchCity = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/cities/${id}`
  });
};

export const fetchTopCities = () => {
  return $.ajax({
    method: 'get',
    url: '/api/cities/top_cities'
  });
};

export const createCity = (country, city) => {
  return $.ajax({
    method: 'post',
    url: `api/countries/${country.id}/cities`,
    data: { city }
  });
};

//write the reducers
//check state
//test action creators
