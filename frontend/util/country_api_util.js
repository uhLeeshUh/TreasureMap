export const fetchCountries = () => {
  return $.ajax({
    method: 'get',
    url: '/api/countries'
  });
};

export const fetchTopCountries = () => {
  return $.ajax({
    method: 'get',
    url: '/api/countries/top_countries'
  });
};

export const fetchCountry = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/countries/${id}`
  });
};

export const createCountry = (country) => {
  return $.ajax({
    method: 'post',
    url: '/api/countries',
    data: { country }
  });
};
