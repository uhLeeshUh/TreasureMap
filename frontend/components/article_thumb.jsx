import React from 'react';
import { Link } from 'react-router-dom';

const ArticleThumb = (props) => {
  if (!props.image){
    return <div></div>;
  }
  return (
    <div className="thumb-holder col-1-4">
      <Link to={`/articles/${props.article.id}`}>
        <section className="article-thumb">
          <img className="article-thumb-image" src={props.image.image_url}></img>
          <div className="article-thumb-count">
            <p>{props.count}</p>
          </div>
          <ul className="article-thumb-summary">
            <li className="thumb-city-name">{props.city.name}</li>
            <li className="thumb-article-name">{props.article.name}</li>
            <li className="thumb-article-desc">{props.article.description}</li>
          </ul>
        </section>
        <div className="thumb-border"></div>
      </Link>
    </div>
  );
};

export default ArticleThumb;







// const imageFill = {
//   backgroundImage: `url(${props.image.image_url})`
// };

// <div className="article-thumb-image" style={imageFill}></div>
