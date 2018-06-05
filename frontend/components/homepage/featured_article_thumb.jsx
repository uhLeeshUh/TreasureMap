import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedArticleThumb = (props) => {

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

export default FeaturedArticleThumb;
