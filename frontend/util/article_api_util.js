export const createArticle = (article) => {
  debugger
  return $.ajax({
    method: 'post',
    url: '/api/articles',
    contentType: false,
    processData: false,
    data:   article 
  });
};

export const fetchArticle = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/articles/${id}`
  });
};

export const fetchArticles = (cityId) => {
  return $.ajax({
    method: 'get',
    url: `/api/cities/${cityId}/articles`
  });
};

export const editArticle = (article) => {
  return $.ajax({
    method: 'patch',
    url: `/api/articles/${article.id}`,
    data: { article }
  });
};

export const deleteArticle = (id) => {
  return $.ajax({
    method: 'delete',
    url: `/api/articles/${id}`
  });
};
