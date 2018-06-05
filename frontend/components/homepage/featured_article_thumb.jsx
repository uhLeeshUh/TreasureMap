import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const FeaturedArticleThumb = (props) => {

  // if (!props.articleInfoFetched){
  //   return <div></div>;
  // }

  return (
    <Link to={`/articles/${props.article.id}`}>
      <section>
        <img key={props.image.id} src={props.image.image_url}></img>
        <div>
          <h3>{props.city.name}</h3>
          <h1>{props.article.name}</h1>
          <p>{props.article.description}</p>
        </div>
      </section>
    </Link>
  );
};

const mapStateToProps = (state, ownProps) => {
  const article = ownProps.article;
  const image = state.entities.images[article.image_ids[0]];
  const city = state.entities.cities[article.city_id];

  return {
    image,
    city,
  };

};

export default connect(mapStateToProps)(FeaturedArticleThumb);
