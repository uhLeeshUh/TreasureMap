import React from 'react';

class ArticleForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      article: this.props.article,
      country: {
        name: ""
      },
      city: {
        name: "",
        country_id: 0
      },
      articleEdit: {
        editor_id: this.props.editorId,
        article_id: this.props.article.id
      },
      images:{
        //will I need this?
      }
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    //TODO: update this with city and country info, if needed with GM
    if (this.props !== prevProps) {
      this.setState({
        article: this.props.article,
        articleEdit: {
          article_id: this.props.article.id
        }
      });
    }
  }

  submit(e){
    this.props.clearArticleErrors();
    this.props.action(this.state.article).then(() => {
      //PICK UP HERE
      return (
        this.props.history.push(`/articles/5`)
      );
    });
  }

  handleChange(field, e){
    let inProgressArticle = this.state.article;
    inProgressArticle[field] = e.target.value;
    return this.setState({ inProgressArticle });
  }

  render(){
    let articleErrors;
    if (this.props.errors.length > 0) {
      articleErrors = this.props.errors.map((error, idx) => {
        return <li key={idx}>{error}</li>;
        });
    }
    return (
      <main>
        <h1>{this.props.formType}</h1>
        <form className="article-form" onSubmit={this.submit}>
          {articleErrors}
          <section className="article-basic-info">
            <h3>STEP 1</h3>
            <h2>Basic Information</h2>
              <label>What is the place commonly called?
                <input type="text" placeholder="E.g. Bean Puzzle Tombstone" value={this.state.article.name}
                  onChange={
                    (e) => this.handleChange("name", e)}>
                  </input>
              </label>

              <label>What's the gist? Keep this to a couple of words.
                <input type="text" placeholder="E.g. A tombstone made of beans!" value={this.state.article.description}
                  onChange={
                    (e) => this.handleChange("description", e)}>
                </input>
              </label>

              <label>Optionally in a single sentence, what makes this place special?
                <input type="text" placeholder="E.g. It took over 100 years to decode this enigmatic epitaph for two buried brides." value={this.state.article.long_description} onChange={
                    (e) => this.handleChange("long_description", e)}>
                  </input>
              </label>

              <label>What is the address?
                <input type="text" placeholder="GOOGLE MAPS STUFF HERE"></input>
              </label>

              <label>Lat
                <input type="number" value={this.state.article.lat}></input>
              </label>

              <label>Lng
                <input type="number" value={this.state.article.lng}></input>
              </label>

              <label>City_id
                <input type="number" value={this.state.article.city_id}></input>
              </label>

              <label>Country_name
                <input type="text" value={this.state.country.name}></input>
              </label>
          </section>

          <section className="article-body-section">
            <h3>STEP 2</h3>
            <h2>Write Your Entry</h2>
              <label>Please use your own words to tell the unique story of the place in an engaging, concise way.
                <input type="text" value={this.state.article.body} onChange={(e) => this.handleChange("body", e)}></input>
              </label>
          </section>

          <section className="article-photo-add">
            <h3>STEP 3</h3>
            <h2>Add Photos</h2>
              <label>Please add at least one photo of the place.
                <input type="file"></input>
              </label>
          </section>

          <button className="article-form-button">{this.props.buttonText}</button>
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
