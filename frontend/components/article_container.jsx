import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions/article_actions';

class Article extends React.Component {
  componentDidMount(){
    this.props.fetchArticle(this.props.match.params.articleId);
  }

  render(){
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
            <ul className="article-contributors">
              <li>{this.props.author.username}</li>
              <ul className="article-editors">
                {articleEditors}
              </ul>
            </ul>
          </div>
          <div className="article-google-map"></div>
        </section>

      </main>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  // const defaultArticle = {
  //       id: 4,
  //       title: "The Blue Flash",
  //       headline: "Legendary Indiana backyard rollercoaster",
  //       body: "One Indiana man's dream to build his own rollercoaster...",
  //       lat: 65.234,
  //       long: 48.234,
  //       author_id: 1,
  //       city_id: 16,
  //       image_ids: [5, 9],
  //       editing_user_ids: [2]};
  // const article = state.entities.articles[ownProps.match.params.articleId] || defaultArticle;
  // const city = state.entities.cities[article.city_id];
  // const images = article.image_ids.map(image_id => {
  //   return (state.entities.images[image_id]);
  // });
  // const author = state.entities.users[article.author_id];
  // const editors = article.editing_user_ids.map(editor_id => {
  //   return (state.entities.users[editor_id]);
  // });
  //
  // return {
  //   article,
  //   city,
  //   images,
  //   author,
  //   editors
  // };
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
