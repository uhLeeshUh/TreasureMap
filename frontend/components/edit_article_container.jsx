import React from 'react';
import { connect } from 'react-redux';
import ArticleForm from './article_form';
import { editArticle, fetchArticle, clearArticleErrors } from '../actions/article_actions';
import { createCountry } from '../actions/country_actions';
import { createCity } from '../actions/city_actions';
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
    const { article, formType, editorId, buttonText, action, errors, clearArticleErrors, history, lastUpdatedArticleId, fetchArticle, createCountry, createCity, city, country} = this.props;
    return (
      <ArticleForm
        article={article}
        formType={formType}
        editorId={editorId}
        buttonText={buttonText}
        errors={errors}
        lastUpdatedArticleId={lastUpdatedArticleId}
        city={city}
        country={country}
        action={action}
        fetchArticle={fetchArticle}
        clearArticleErrors={clearArticleErrors}
        createCountry={createCountry}
        createCity={createCity}
        history={history}

        />
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

  const article = state.entities.articles[ownProps.match.params.articleId] || defaultArticle;
  const city = state.entities.cities[article.city_id] || {name: ""};
  const country = state.entities.countries[city.country_id] || {name: ""};

  return {
    article,
    formType: "Edit this Place",
    editorId: state.session.id,
    buttonText: "SUBMIT THIS EDIT",
    errors: state.errors.article,
    lastUpdatedArticleId: state.ui.lastArticleId,
    city,
    country
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (article) => dispatch(editArticle(article)),
    fetchArticle: (id) => dispatch(fetchArticle(id)),
    clearArticleErrors: () => dispatch(clearArticleErrors()),
    createCountry: (country) => dispatch(createCountry(country)),
    createCity: (country, city) => dispatch(createCity(country, city))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditArticleForm));

//submission needs to both edit the article and create an entry in
//ArticleEdits table

//deal with new country and city creation
//deal with adding an article edit and updating the slices of state
//deal with updating the image slice of state and image_ids array for article, need to send up the images in the json view for article
