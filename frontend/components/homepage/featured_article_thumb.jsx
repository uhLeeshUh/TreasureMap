import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const FeaturedArticleThumb = (props) => {

  return (
    <div className={`${props.className}-feature-article-thumb`}>
      <Link to={`/articles/${props.article.id}`}>
        <section className={props.className}>
          <img className="other-feature-image" key={props.image.id} src={props.image.image_url}></img>
          <div className="feature-thumb-holder">
            <div className="feature-city-holder">
              <h3 className="feature-city">{props.city.name}</h3>
            </div>
            <h1 className="feature-article-name">{props.article.name}</h1>
            <p className="feature-article-desc">{props.article.description}</p>
            <p className="feature-author-name">Contributed by: {props.author.username}</p>
          </div>
          <div className="feature-image-holder">
            <img className="feature-image" key={props.image.id} src={props.image.image_url}></img>
          </div>
        </section>
      </Link>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const article = ownProps.article;
  const image = state.entities.images[article.image_ids[0]];
  const city = state.entities.cities[article.city_id];
  const author = state.entities.users[article.author_id];

  return {
    image,
    city,
    author,
  };
};

export default connect(mapStateToProps)(FeaturedArticleThumb);
