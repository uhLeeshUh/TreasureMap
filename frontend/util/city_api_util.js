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

export const createCity = (city) => {
  return $.ajax({
    method: 'post',
    url: 'api/cities',
    data: { city }
  });
};

//test that these AJAX calls work
//write the reducers
//check state
//test action creators
