import React from 'react';
import { connect } from 'react-redux';
import ArticleForm from './article_form';
import { editArticle, fetchArticle, clearArticleErrors } from '../actions/article_actions';
import { withRouter } from 'react-router-dom';

class EditArticleForm extends React.Component {
  componentDidMount(){
    this.props.fetchArticle(this.props.match.params.articleId);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.match.params.articleId !== prevProps.match.params.articleId) {
      this.props.fetchArticle(this.props.match.params.articleId);
    }
  }

  render(){
    const { article, formType, editorId, buttonText, action, errors, clearArticleErrors, history} = this.props;
    return (
      <ArticleForm article={article} formType={formType} editorId={editorId} buttonText={buttonText} action={action} errors={errors} clearArticleErrors={clearArticleErrors} history={history}/>
    );
  }


}


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

//TODO: when working on countries and cities, pass down the country and city info
// with mapStateToProps

  return {
    article: state.entities.articles[ownProps.match.params.articleId] || defaultArticle,
    formType: "Edit this Place",
    editorId: state.session.id,
    buttonText: "SUBMIT THIS EDIT",
    errors: state.errors.article
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (article) => dispatch(editArticle(article)),
    fetchArticle: (id) => dispatch(fetchArticle(id)),
    clearArticleErrors: () => dispatch(clearArticleErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditArticleForm));

//submission needs to both edit the article and create an entry in
//ArticleEdits table

//deal with new country and city creation
//deal with adding an article edit and updating the slices of state
//deal with updating the image slice of state and image_ids array for article, need to send up the images in the json view for article
