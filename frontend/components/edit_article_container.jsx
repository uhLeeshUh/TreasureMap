import React from "react";
import { connect } from "react-redux";
import ArticleForm from "./article_form";
import {
  editArticle,
  fetchArticle,
  clearArticleErrors
} from "../actions/article_actions";
import { createCountry } from "../actions/country_actions";
import { createCity } from "../actions/city_actions";
import { withRouter } from "react-router-dom";

class EditArticleForm extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.article.id === nextProps.article.id) {
      return false;
    }
    //if the city or country is created that article is subscribed to,
    //there is no needed to re-render the component
  }

  render() {
    const {
      article,
      formType,
      editorId,
      buttonText,
      action,
      errors,
      clearArticleErrors,
      history,
      lastUpdatedArticleId,
      fetchArticle,
      createCountry,
      createCity,
      city,
      country,
      images
    } = this.props;
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
        images={images}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const article = state.entities.articles[ownProps.match.params.articleId];

  const city = state.entities.cities[article.city_id] || { name: "" };
  const country = state.entities.countries[city.country_id] || { name: "" };
  const images = article.image_ids.map(imageId => {
    return state.entities.images[imageId];
  });

  return {
    article,
    formType: "Edit this Place",
    editorId: state.session.id,
    buttonText: "SUBMIT THIS EDIT",
    errors: state.errors.article,
    city,
    country,
    images
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: article => dispatch(editArticle(article)),
    fetchArticle: id => dispatch(fetchArticle(id)),
    clearArticleErrors: () => dispatch(clearArticleErrors()),
    createCountry: country => dispatch(createCountry(country)),
    createCity: (country, city) => dispatch(createCity(country, city))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditArticleForm)
);
