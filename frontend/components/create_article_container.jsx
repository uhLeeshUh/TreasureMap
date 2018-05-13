import { connect } from 'react-redux';
import ArticleForm from './article_form';
import { createArticle, clearArticleErrors } from '../actions/article_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultArticle = {
    name: "",
    description: "",
    long_description: "",
    body: "",
    lat: 0,
    lng: 0,
    author_id: 1,
    city_id: 1,
  };

  return {
    article: state.entities.articles[ownProps.match.params.articleId] || defaultArticle,
    formType: "Add a Place",
    author_id: state.session.id,
    buttonText: "SUBMIT THIS PLACE",
    errors: state.errors.article
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (article) => dispatch(createArticle(article)),
    clearArticleErrors: () => dispatch(clearArticleErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);
