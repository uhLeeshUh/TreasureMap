import React from 'react';
import { connect } from 'react-redux';
import ArticleThumb from './article_thumb';
import { fetchArticle } from '../actions/article_actions';
import { Link } from 'react-router-dom';

class FeaturedArticle extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchArticle(1);
  }

  render(){
    if (!this.props.articleInState){
      return <div></div>;
    }

    return (
      <main className="feature-article-holder">
        <div className="feature-article-headline-holder">
          <h1 className="feature-article-header">Today's Featured Find</h1>
        </div>
        <Link className="feature-article-link" to={`/articles/${this.props.article.id}`}>
          <section className="feature-article-content">
            <img key={this.props.image.id}className='feature-article-image' src={this.props.image.image_url}></img>
            <h3 className="feature-article-city">{this.props.city.name}</h3>
            <h1 className="feature-article-title">{this.props.article.name}</h1>
            <p className="feature-article-description">{this.props.article.description}</p>
          </section>
        </Link>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  let article;
  let city;
  let image;
  let articleInState = true;

  if (!state.entities.articles[1]){
    return{
      articleInState: false
    };
  }

  article = state.entities.articles[1];
  city = state.entities.cities[article.city_id];
  image = state.entities.images[article.image_ids[0]];

  return {
    article,
    city,
    image,
    articleInState
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (id) => dispatch(fetchArticle(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedArticle);
