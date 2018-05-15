import React from 'react';

const ArticleThumb = (props) => {
  debugger
  return (
    <section>
      <img className="article-thumb-image" src={props.image.image}></img>
      <p className="article-thumb-count">{props.count}</p>
      <ul className="article-thumb-summary">
        <li>{props.city.name}</li>
        <li>{props.article.name}</li>
        <li>{props.article.description}</li>
      </ul>
    </section>
  );
};

export default ArticleThumb;
