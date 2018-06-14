import { connect } from "react-redux";
import ArticleForm from "./article_form";
import { createArticle, clearArticleErrors } from "../actions/article_actions";
import { createCountry } from "../actions/country_actions";
import { createCity } from "../actions/city_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const defaultArticle = {
    name: "",
    description: "",
    long_description: "",
    body: "",
    lat: 0,
    lng: 0
    // author_id: 0,
    // city_id: 0,
  };

  const country = { name: "" };
  const city = { name: "" };

  return {
    article:
      state.entities.articles[ownProps.match.params.articleId] ||
      defaultArticle,
    formType: "Add a Place",
    author_id: state.session.id,
    buttonText: "SUBMIT THIS PLACE",
    errors: state.errors.article,
    lastUpdatedArticleId: state.ui.lastArticleId[0],
    country,
    city
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: article => dispatch(createArticle(article)),
    clearArticleErrors: () => dispatch(clearArticleErrors()),
    createCountry: country => dispatch(createCountry(country)),
    createCity: (country, city) => dispatch(createCity(country, city))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ArticleForm)
);
