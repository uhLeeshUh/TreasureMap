import React from 'react';

class ArticleForm extends React.Component {
  constructor(props){
    super(props);
    const { formType, editor_id, buttonText, action, article } = this.props.formInfo;
    this.state = {
      article: article,
      country: {
        name: ""
      },
      city: {
        name: "",
        country_id: 0
      },
      articleEdit: {
        editor_id: editor_id,
        article_id: props.match.params.articleId
      }
    };
  }

  submit(e){
    action(this.state.article);
  }

  render(){

    let errors = this.props.errors.map(error => {
      return <li>{error}</li>;
    });

    return (
      <main>
        <h1>{formType}</h1>
        <form className="article-form">
        <section className="article-basic-info">
          <h3>STEP 1</h3>
          <h2>Basic Information</h2>
            <label>What is the place commonly called?
              <input type="text" placeholder="E.g. Bean Puzzle Tombstone" value={this.state.article.name}></input>
            </label>

            <label>What's the gist? Keep this to a couple of words.
              <input type="text" placeholder="E.g. A tombstone made of beans!" value={this.state.article.description}></input>
            </label>

            <label>Optionally in a single sentence, what makes this place special?
              <input type="text" placeholder="E.g. It took over 100 years to decode this enigmatic epitaph for two buried brides." value={this.state.article.long_description}></input>
            </label>

            <label>What is the address?
              <input>GOOGLE MAPS STUFF HERE</input>
              <input type="float" value={this.state.article.lat}></input>
              <input type="float" value={this.state.article.lng}></input>
              <input type="integer" value={this.state.article.city_id}></input>
              <input type="text" value={this.state.country.name}></input>
            </label>
        </section>

        <section className="article-body-section">
          <h3>STEP 2</h3>
          <h2>Write Your Entry</h2>
            <label>Please use your own words to tell the unique story of the place in an engaging, concise way.
              <input type="text" value={this.state.article.body}></input>
            </label>
        </section>

        <section className="article-photo-add">
          <h3>STEP 3</h3>
          <h2>Add Photos</h2>
            <label>Please add at least one photo of your place.
              <input type="file"></input>
            </label>
        </section>

        <button className="article-form-button">{buttonText}</button>
        </form>
      </main>
    );
  }

}

export default ArticleForm;

//in both cases, check if country exists. If not, create it
//in both cases, check if city exists. If not, create it
//in both cases, submit the full article slice of baby s state
// JUST FOR EDIT: create a new ArticleEdit

//formType for "edit a place" or "add a place"
//need to pass down the author id in mapStateToProps
//make GoogleMaps stuff its own separate component
//pass down buttonText in mapStateToProps

//find a way to deal with form errors once they've been rendered
//whem using google maps, I'll need to do the following:
  // -grab lat and lng
  // -grab city and use near matching to either assign to existing id or create new entry
  // -grab country and do the same thing as above
