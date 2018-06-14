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
    // this.props.fetchRandomArticle();
  }

  render() {
    if (!this.props.articlesInState) {
      return <div />;
    }

    // <Link className="feature-article-link" to={`/articles/${this.props.article.id}`}>
    //   <section className="feature-article-content">
    //     <img key={this.props.image.id}className='feature-article-image' src={this.props.image.image_url}></img>
    //     <h3 className="feature-article-city">{this.props.city.name}</h3>
    //     <h1 className="feature-article-title">{this.props.article.name}</h1>
    //     <p className="feature-article-description">{this.props.article.description}</p>
    //   </section>
    // </Link>

    // articleId={this.props.articles[0]}
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
  // let article;
  // let city;
  // let image;
  let articlesInState = true;

  if (state.ui.featuredArticleIds.length === 0) {
    // if (state.ui.randomArticleId.length === 0){
    return {
      articlesInState: false
    };
  }

  articles = state.ui.featuredArticleIds.map(articleId => {
    return state.entities.articles[articleId];
  });
  // state.entities.articles[state.ui.randomArticleId];
  // article = state.entities.articles[state.ui.randomArticleId];
  // city = state.entities.cities[article.city_id];
  // image = state.entities.images[article.image_ids[0]];

  // city,
  // image,
  return {
    articles,
    articlesInState
  };
};

const mapDispatchToProps = dispatch => {
  // fetchRandomArticle: () => dispatch(fetchRandomArticle())
  return {
    fetchArticle: id => dispatch(fetchArticle(id)),
    fetchRandomArticles: () => dispatch(fetchRandomArticles())
  };
};

// export default FeaturedArticle;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedArticle);
