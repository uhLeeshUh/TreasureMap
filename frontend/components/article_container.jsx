import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions/article_actions';

class Article extends React.Component {
  componentDidMount(){
    this.props.fetchArticle(this.props.match.params.articleId);
  }

  render(){
    //expect this.props.images to be an array of image objects
    const images = this.props.images.map(image => {
      return (<img key={image.id} src={image.image_url}></img>);
    });
    // debugger

    const articleEditors = this.props.editors.map(editor => {
      return (
        <li key={editor.id}>
          <img src={editor.image_url} alt="editor image"></img>
          <p>{editor.username}</p>
        </li>
      );
    });

    return (
      <main>
        Hellow werld
        <section className="article-head">
          <ul>
            <li>{this.props.city.name}</li>
            <li>{this.props.article.name}</li>
            <li>{this.props.article.description}</li>
          </ul>
        </section>

        <section className="article-photos">
          {images}
        </section>

        <section className="article-main">
          <div className="article-body-holder">
            <p>{this.props.article.body}</p>
            <div className="article-contributors">
              <div className="article-author">
                <p>CONTRIBUTED BY</p>
                <ul className="author-elements">
                  <li><img src={this.props.author.image_url} alt="author image"></img></li>
                  <li>{this.props.author.username}</li>
                </ul>
              </div>
              <div className="article-editors">
                <p>EDITED BY</p>
                <ul className="editor-elements">
                  {articleEditors}
                </ul>
              </div>
            </div>
          </div>
          <div className="article-google-map"></div>
        </section>

      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // debugger
  const defaultArticle = {
        id: 4,
        name: "The Blue Flash",
        description: "Legendary Indiana backyard rollercoaster",
        body: "One Indiana man's dream to build his own rollercoaster...",
        lat: 65.234,
        long: 48.234,
        author_id: 1,
        // city_id: 11,
        // image_ids: [2, 3],
        editing_user_ids: [2]};
        // debugger
  const article = state.entities.articles[ownProps.match.params.articleId] || defaultArticle;
  // const city = state.entities.cities[article.city_id] || "";
  // const images = article.image_ids.map(image_id => {
  //   return (state.entities.images[image_id] || "");
  // });
  const author = state.entities.users[article.author_id] || {};
  // debugger
  const editors = article.editing_user_ids.map(editor_id => {
    return (state.entities.users[editor_id] || {});
  });

//TODO: replace city hardcording, replace image hardcoding to return the ids
// to be fetched from redux store


  return {
    article: article,
    city: {name: "Barcelona"},
    images: [{id: 1, image_url: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzc4Nzc2OTdiNjc3YWZkODEzZl8yMTQ0MjI3MzM3XzRhN2FjYjg1OTZfby5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"}, {id: 2, image_url: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzc4Nzc2OTdiNjc3YWZkODEzZl8yMTQ0MjI3MzM3XzRhN2FjYjg1OTZfby5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"}, {id: 3, image_url: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzc4Nzc2OTdiNjc3YWZkODEzZl8yMTQ0MjI3MzM3XzRhN2FjYjg1OTZfby5qcGciXSxbInAiLCJ0aHVtYiIsIjEyMDB4PiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0"}],
    author: author,
    editors: editors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (id) => {dispatch(fetchArticle(id));}
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