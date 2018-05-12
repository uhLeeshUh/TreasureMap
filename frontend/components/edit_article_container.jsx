import React from 'react';
import { connect } from 'react-redux';
import ArticleForm from './article_form';
import { editArticle, fetchArticle } from '../actions/article_actions';

class EditArticleForm extends React.Component {
  ComponentDidMount(){
    this.props.fetchArticle(this.props.match.params.articleId);
  }

  render(){
    return (
      <ArticleForm article={this.props.article} formType={this.props.formType} editorId={this.props.editorId} buttonText={this.props.buttonText} action={this.props.action} errors={this.props.errors}/>
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
    author_id: 0,
    city_id: 0,
  };

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
    fetchArticle: (id) => dispatch(fetchArticle(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditArticleForm);

//submission needs to both edit the article and create an entry in
//ArticleEdits table

//deal with new country and city creation
//deal with adding an article edit and updating the slices of state
//deal with updating the image slice of state and image_ids array for article, need to send up the images in the json view for article
