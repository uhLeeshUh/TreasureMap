export const fetchSearchItems = queryString => {
  return $.ajax({
    method: "post",
    url: "/api/pg_search_documents",
    data: { query: queryString }
  });
};
