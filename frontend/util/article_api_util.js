export const createArticle = (article) => {
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

export const fetchRandomArticle = () => {
  return $.ajax({
    method: 'get',
    url: '/api/articles/random_article'
  });
};

export const fetchArticles = (cityId) => {
  return $.ajax({
    method: 'get',
    url: `/api/cities/${cityId}/articles`
  });
};

export const editArticle = (article) => {
  debugger
  // url: `/api/articles/${article.get("article[id]")}`,
  return $.ajax({
    method: 'patch',
    url: `/api/articles/${article.get("id")}`,
    contentType: false,
    processData: false,
    data: article
  });
};

// url: `/api/articles/${article.id}`,

export const deleteArticle = (id) => {
  return $.ajax({
    method: 'delete',
    url: `/api/articles/${id}`
  });
};
