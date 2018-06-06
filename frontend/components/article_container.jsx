import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle, deleteArticle } from '../actions/article_actions';
import { Link } from 'react-router-dom';
import Map from './map';

class Article extends React.Component {
  constructor(props){
    super(props);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  componentDidMount(){
    this.props.fetchArticle(this.props.match.params.articleId);
    window.scrollTo(0,0);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.match.params.articleId !== prevProps.match.params.articleId) {
      this.props.fetchArticle(this.props.match.params.articleId);
    }
  }

  deleteArticle(){
    this.props.deleteArticle(this.props.article.id).then(
      () => this.props.history.push("/")
    );
  }

  render(){

    if (!this.props.articleLoaded){
      return <div></div>;
    }

    const images = this.props.images.map(image => {
      debugger
      return (<img className="article-image" key={image.id} src={image.image_url}></img>);
    });

    let articleEditors;
    if (this.props.editors){
      articleEditors = this.props.editors.map((editor, idx) => {
        let zIndexStyle = {
          zIndex: idx
        };
        return (
          <li className="article-editor-info" key={editor.id}>
            <img className="article-editor-image" src={editor.image_url} alt="editor image" style={{zIndex:idx}}></img>
            <p className="article-editor-name">{editor.username}</p>
          </li>
        );
      });

    }

    const body = this.props.article.body.split("\n").map((par, idx) => {
      return (<p key={idx} className="article-body">{par}</p>);
    });

    let editorsPresent = "";
    if (articleEditors.length > 0){
      editorsPresent =
      <p className="contributor-display-text">EDITED BY</p>;
    }

    let deleteArticleButton;
    if (this.props.article.author_id === this.props.viewerId) {
      deleteArticleButton =
      <span>
        <button onClick={this.deleteArticle} className="article-delete-button">
          <i id="trash-icon" className="fas fa-trash-alt"></i>
          DELETE ENTRY</button>
      </span>;
    }

    return (
      <main>
        <section className="article-head">
          <Link to={`/cities/${this.props.city.id}`}><h2 id="city-name">{this.props.city.name}</h2></Link>
          <h1 id="article-name">{this.props.article.name}</h1>
          <p id="article-desc">{this.props.article.description}</p>
          <div className="article-buttons">
            <span className="edit-button">
              <i id="pencil-icon" className="fas fa-pencil-alt"></i>
              <Link to={`/articles/${this.props.article.id}/edit`}>EDIT ENTRY</Link>
            </span>
            {deleteArticleButton}
          </div>
        </section>

        <section className="article-photos">
          {images}
        </section>

        <section className="article-main">
          <div className="article-body-holder">
            <p className="long-description">{this.props.article.long_description}</p>
            {body}
            <div className="article-contributors">
              <div className="article-author">
                <p className="contributor-display-text">CONTRIBUTED BY</p>
                <ul className="author-elements">
                  <li><img className="article-author-image" src={this.props.author.image_url} alt="author image"></img></li>
                  <li className="article-author-name">{this.props.author.username}</li>
                </ul>
              </div>
              <div className="article-editors">
                {editorsPresent}
                <ul className="editor-elements">
                  {articleEditors}
                </ul>
              </div>
            </div>
          </div>
          <div className="article-google-map">
            <Map articles={[this.props.article]} zoom="15"/>
          </div>
        </section>

      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  let articleLoaded = true;
  if ((!state.entities.articles[ownProps.match.params.articleId] || !state.entities.articles[ownProps.match.params.articleId].body)){
    return {
      articleLoaded: false
    };
  }
  //
  // const defaultArticle = {
  //   id: 1,
  //   name: "",
  //   description: "",
  //   body: "",
  //   author_id: 1,
  //   city_id: 1,
  //   image_ids: [],
  //   editing_user_ids: []
  // };

  const article = state.entities.articles[ownProps.match.params.articleId];
  const city = state.entities.cities[article.city_id];
  // const images = article.image_ids.map(image_id => {
  //   return (state.entities.images[image_id] || "");
  // });
  // const country = state.entities.countries[city.country_id];
  const author = state.entities.users[article.author_id];
  let editors;
  if (article.editing_user_ids){
    editors = article.editing_user_ids.map(editor_id => {
      return (state.entities.users[editor_id]);
    });
  }
  const viewerId = state.session.id;

  let images = [];
  if (state.entities.articles[ownProps.match.params.articleId]){
    images = state.entities.articles[ownProps.match.params.articleId].image_ids.map(
      image_id => { return state.entities.images[image_id];}
    );
  }

//TODO: replace city hardcording, replace image hardcoding to return the ids
// to be fetched from redux store. Grab the country to user with city at top

// [{id: 1, image_url: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzc4Nzc2OTdiNjc3YWZkODEzZl8yMTQ0MjI3MzM3XzRhN2FjYjg1OTZfby5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"},
// {id: 2, image_url: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzc4Nzc2OTdiNjc3YWZkODEzZl8yMTQ0MjI3MzM3XzRhN2FjYjg1OTZfby5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"},
// {id: 3, image_url: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzc4Nzc2OTdiNjc3YWZkODEzZl8yMTQ0MjI3MzM3XzRhN2FjYjg1OTZfby5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"},
// {id: 4, image_url: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzc4Nzc2OTdiNjc3YWZkODEzZl8yMTQ0MjI3MzM3XzRhN2FjYjg1OTZfby5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"},
// {id: 5, image_url: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzc4Nzc2OTdiNjc3YWZkODEzZl8yMTQ0MjI3MzM3XzRhN2FjYjg1OTZfby5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"}
// ],

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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (id) => dispatch(fetchArticle(id)),
    deleteArticle: (id) => dispatch(deleteArticle(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);



//need to make thunk action creator and API util ajax method to fetch an article
// by its id

//pass down city so I can grab name
//pass down article so I can get its name, description

//need to pass down the article's associated images
  // figure out our array of images to render them in img tags before passing to return

//need to pass down the article's author so I can grab the username and photo

//need to pass down article editors, which I will handle outside of render's return
//to generate an array of lis (to layer on top of each other!)
  // need photo and username


//make the reducer to handle the ajax request!
