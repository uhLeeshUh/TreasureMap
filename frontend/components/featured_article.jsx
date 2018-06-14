import React from "react";
import { connect } from "react-redux";
import FeaturedArticleThumb from "./homepage/featured_article_thumb";
import { fetchArticle, fetchRandomArticles } from "../actions/article_actions";
import { Link } from "react-router-dom";

class FeaturedArticle extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRandomArticles();
  }

  render() {
    if (!this.props.articlesInState) {
      return <div />;
    }

    return (
      <main className="feature-article-holder">
        <div className="feature-article-headline-holder">
          <h1 className="feature-article-header">Today's Featured Finds</h1>
        </div>
        <FeaturedArticleThumb
          className="main-feature"
          key={this.props.articles[0].id}
          article={this.props.articles[0]}
        />
        <section className="feature-bottom-row">
          <FeaturedArticleThumb
            className="bottom-thumb"
            key={this.props.articles[1].id}
            article={this.props.articles[1]}
          />
          <FeaturedArticleThumb
            className="bottom-thumb"
            key={this.props.articles[2].id}
            article={this.props.articles[2]}
          />
          <div className="side-title-holder">
            <FeaturedArticleThumb
              className="side-title"
              key={this.props.articles[3].id}
              article={this.props.articles[3]}
            />
            <FeaturedArticleThumb
              className="side-title"
              key={this.props.articles[4].id}
              article={this.props.articles[4]}
            />
            <FeaturedArticleThumb
              className="side-title"
              key={this.props.articles[5].id}
              article={this.props.articles[5]}
            />
            <FeaturedArticleThumb
              className="side-title"
              key={this.props.articles[6].id}
              article={this.props.articles[6]}
            />
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  let articles;
  let articlesInState = true;

  if (state.ui.featuredArticleIds.length === 0) {
    return {
      articlesInState: false
    };
  }

  articles = state.ui.featuredArticleIds.map(articleId => {
    return state.entities.articles[articleId];
  });

  return {
    articles,
    articlesInState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticle: id => dispatch(fetchArticle(id)),
    fetchRandomArticles: () => dispatch(fetchRandomArticles())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedArticle);
