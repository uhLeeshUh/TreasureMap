import { connect } from 'react-redux';
import ArticleForm from './article_form';
import { createArticle } from '../actions/article_actions';

const mapStateToProps = (state) => {
  return {
    formType: "Add a Place",
    author_id: this.state.entities.users[this.state.session.id],
    buttonText: "SUBMIT THIS PLACE"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (article) => dispatch(createArticle(article))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);
