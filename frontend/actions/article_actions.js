import * as ArticleAPIUtil from '../util/article_api_util';

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";
export const REMOVE_ARTICLE = "REMOVE_ARTICLE";
export const RECEIVE_ARTICLE_ERRORS = "RECEIVE_ARTICLE_ERRORS";
export const CLEAR_ARTICLE_ERRORS = "CLEAR_ARTICLE_ERRORS";

// synchronous action creators
export const receiveArticles = (articles) => {
  return {
    type: RECEIVE_ARTICLES,
    articles
  };
};

export const receiveArticle = (article) => {
  return {
    type: RECEIVE_ARTICLE,
    article
  };
};

export const removeArticle = (id) => {
  return {
    type: REMOVE_ARTICLE,
    id
  };
};

export const receiveArticleErrors = (errors) => {
  return {
    type: RECEIVE_ARTICLE_ERRORS,
    errors
  };
};

export const clearArticleErrors = () => {
  return {
    type: CLEAR_ARTICLE_ERRORS
  };
};


//asynchronous thunk action creators

export const createArticle = (article) => {
  return (dispatch) => {
    return ArticleAPIUtil.createArticle(article).then(
      (article) => {dispatch(receiveArticle(article));},
      (errors) => {dispatch(receiveArticleErrors(errors));}
    );
  };
};

export const fetchArticle = (id) => {
  return (dispatch) => {
    return ArticleAPIUtil.fetchArticle(id).then(
      (articlePayload) => {dispatch(receiveArticle(articlePayload));},
      (errors) => {dispatch(receiveArticleErrors(errors));}
    );
  };
};

export const fetchArticles = (cityId) => {
  return (dispatch) => {
    return ArticleAPIUtil.fetchArticles(cityId).then(
      (articlesPayload) => {dispatch(receiveArticle(articlesPayload));},
      (errors) => {dispatch(receiveArticleErrors(errors));}
    );
  };
};

export const editArticle = (article) => {
  return (dispatch) => {
    return ArticleAPIUtil.editArticle(article).then(
      (articlePayload) => {dispatch(receiveArticle(articlePayload));},
      (errors) => {dispatch(receiveArticleErrors(errors));}
    );
  };
};

export const deleteArticle = (id) => {
  return (dispatch) => {
    return ArticleAPIUtil.deleteArticle(id).then(
      (articlePayload) => {dispatch(removeArticle(articlePayload));},
      (errors) => {dispatch(receiveArticleErrors(errors));}
    );
  };
};
