import React from 'react';
import { connect } from 'react-redux';
import ArticleThumb from './article_thumb';
import { fetchArticle } from '../actions/article_actions';

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
      <section>
        <h1>{this.props.article.name}</h1>
        <img></img>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  let article;
  let city;
  let images;
  let articleInState = true;

  if (!state.entities.articles[1]){
    return{
      articleInState: false
    };
  }

  article = state.entities.articles[1];
  city = state.entities.cities[article.city_id];
  images = article.image_ids.map(image_id => {
    return state.entities.images[image_id];
  });

  return {
    article,
    city,
    images,
    articleInState
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (id) => dispatch(fetchArticle(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedArticle);
