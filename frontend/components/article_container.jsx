import React from "react";
import { connect } from "react-redux";
import { fetchArticle, deleteArticle } from "../actions/article_actions";
import { Link } from "react-router-dom";
import shortid from "shortid";
import Map from "./map";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.articleId);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.match.params.articleId !== prevProps.match.params.articleId
    ) {
      this.props.fetchArticle(this.props.match.params.articleId);
    }
  }

  deleteArticle() {
    this.props
      .deleteArticle(this.props.article.id)
      .then(() => this.props.history.push("/"));
  }

  render() {
    if (!this.props.articleLoaded) {
      return <div />;
    }

    const images = this.props.images.map(image => {
      return (
        <img className="article-image" key={image.id} src={image.image_url} />
      );
    });

    let articleEditors;
    if (this.props.editors) {
      articleEditors = this.props.editors.map((editor, idx) => {
        let zIndexStyle = {
          zIndex: idx
        };
        return (
          <li className="article-editor-info" key={shortid.generate()}>
            <img
              className="article-editor-image"
              src={editor.image_url}
              alt="editor image"
              style={{ zIndex: idx }}
            />
            <p className="article-editor-name">{editor.username}</p>
          </li>
        );
      });
    }

    const body = this.props.article.body.split("\n").map(par => {
      return (
        <p key={shortid.generate()} className="article-body">
          {par}
        </p>
      );
    });

    let editorsPresent = "";
    if (articleEditors.length > 0) {
      editorsPresent = <p className="contributor-display-text">EDITED BY</p>;
    }

    let deleteArticleButton;
    if (this.props.article.author_id === this.props.viewerId) {
      deleteArticleButton = (
        <span>
          <button
            onClick={this.deleteArticle}
            className="article-delete-button"
          >
            <i id="trash-icon" className="fas fa-trash-alt" />
            DELETE ENTRY
          </button>
        </span>
      );
    }

    return (
      <main>
        <section className="article-head">
          <Link to={`/cities/${this.props.city.id}`}>
            <h2 id="city-name">{this.props.city.name}</h2>
          </Link>
          <h1 id="article-name">{this.props.article.name}</h1>
          <p id="article-desc">{this.props.article.description}</p>
          <div className="article-buttons">
            <span className="edit-button">
              <i id="pencil-icon" className="fas fa-pencil-alt" />
              <Link to={`/articles/${this.props.article.id}/edit`}>
                EDIT ENTRY
              </Link>
            </span>
            {deleteArticleButton}
          </div>
        </section>

        <section className="article-photos">{images}</section>

        <section className="article-main">
          <div className="article-body-holder">
            <p className="long-description">
              {this.props.article.long_description}
            </p>
            {body}
            <div className="article-contributors">
              <div className="article-author">
                <p className="contributor-display-text">CONTRIBUTED BY</p>
                <ul className="author-elements">
                  <li>
                    <img
                      className="article-author-image"
                      src={this.props.author.image_url}
                      alt="author image"
                    />
                  </li>
                  <li className="article-author-name">
                    {this.props.author.username}
                  </li>
                </ul>
              </div>
              <div className="article-editors">
                {editorsPresent}
                <ul className="editor-elements">{articleEditors}</ul>
              </div>
            </div>
          </div>
          <div className="article-google-map">
            <Map articles={[this.props.article]} zoom="15" />
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const article = state.entities.articles[ownProps.match.params.articleId];
  let articleLoaded = true;
  //check to see if full article info exists in Redux state,
  // not just what is needed for thumbs
  if (!article || !article.body) {
    return {
      articleLoaded: false
    };
  }

  const city = state.entities.cities[article.city_id];
  const author = state.entities.users[article.author_id];
  let editors;
  // check to see if article has any editors to render on page
  if (article.editing_user_ids) {
    editors = article.editing_user_ids.map(editorId => {
      return state.entities.users[editorId];
    });
  }
  const viewerId = state.session.id;

  const images = article.image_ids.map(imageId => {
    return state.entities.images[imageId];
  });

  return {
    article,
    city,
    images,
    author,
    editors,
    viewerId,
    articleLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticle: id => dispatch(fetchArticle(id)),
    deleteArticle: id => dispatch(deleteArticle(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
