export const fetchSearchItems = (queryString) => {
  return $.ajax({
    method: 'get',
    url: '/api/pg_search_documents',
    data: { query: queryString }
  });
};
