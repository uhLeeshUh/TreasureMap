import React from 'react';
import { merge } from 'lodash';
import GoogleMapsArticleForm from './article_form/google_maps_article_form';
import PreviewImage from './article_form/preview_image';

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
        editor_id: this.props.editorId || "",
        article_id: this.props.article.id
      },
      images: []
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.sendUpLocation = this.sendUpLocation.bind(this);
    this.removePreview = this.removePreview.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0,0);
    //fetch the images in an edit form
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
    //get this as images into an array of image objects wit their necessary form data
    this.props.clearArticleErrors();

    let formData = new FormData();
    Object.keys(this.state.article).forEach(key => {
      formData.append(`article[${key}]`, this.state.article[key]);
    });

    this.state.images.forEach(image => {
      formData.append("article[images_attributes[][image]]", image.imageFile);
    });

    if (this.props.editorId){
      formData.append("article[edits_attributes][][editor_id]", this.props.editorId);
    }

    this.props.action(formData).then(
      () => {
        return (
          this.props.history.push(`/articles/${this.props.lastUpdatedArticleId}`)
        );
      });

    //lastly I would need to create a new ArticleEdit
  }

  handleChange(field, e){
    let inProgressArticle = this.state.article;
    inProgressArticle[field] = e.target.value;
    this.setState({ inProgressArticle });
  }

  updateFile(e){
    const inputFiles = e.currentTarget.files;
    const fileReader = new FileReader();

    fileReader.onloadend = function() {
      let currentImages = this.state.images.slice();

      Array.from(inputFiles).forEach(file => {
        currentImages.push({imageFile: file, imageUrl: fileReader.result});
      });
      this.setState({ images: currentImages });
    }.bind(this);


    if (inputFiles) {
      Array.from(inputFiles).forEach(file => {
        fileReader.readAsDataURL(file);
      });
    }

  }

  sendUpLocation(e){
    let inProgressArticle = this.state.article;
    inProgressArticle.city_id = e.target.value;
    this.setState({ article: inProgressArticle });
  }

  removePreview(idx){
    return (e) => {
      e.preventDefault();
      let newImages = this.state.images.slice();
      newImages.splice(idx);
      this.setState({ images: newImages });
    };
  }


  render(){
    let articleErrors;
    if (this.props.errors.length > 0) {
      articleErrors = this.props.errors.map((error, idx) => {
        return <li key={idx}>{error}</li>;
        });
    }

    let previewImages;
    if (this.state.images.length > 0) {
      previewImages = this.state.images.map((image, idx) => {
        return <PreviewImage key={idx} idx={idx} imageUrl={image.imageUrl} removePreview={this.removePreview}/>;
      });
    }

    return (
      <main className="article-main-form">
        <form className="article-form" onSubmit={this.submit}>
          <h1 className="article-form-header">{this.props.formType}</h1>
          {articleErrors}

          <section className="article-basic-info">
            <h3>STEP 1</h3>
            <h2>Basic Information</h2>
              <label className="article-form-label">What is the place commonly called?
                <input type="text" placeholder="E.g. Bean Puzzle Tombstone" value={this.state.article.name}
                  onChange={
                    (e) => this.handleChange("name", e)}>
                  </input>
              </label>

              <label className="article-form-label">What's the gist? Keep this to a couple of words.
                <input type="text" placeholder="E.g. A tombstone made of beans!" value={this.state.article.description}
                  onChange={
                    (e) => this.handleChange("description", e)}>
                </input>
              </label>

              <label className="article-form-label">Optionally in a single sentence, what makes this place special?
                <input type="text" placeholder="E.g. It took over 100 years to decode this enigmatic epitaph for two buried brides." value={this.state.article.long_description} onChange={
                    (e) => this.handleChange("long_description", e)}>
                  </input>
              </label>

              <label className="article-form-label">Where is the place?
                <GoogleMapsArticleForm sendUpLocation={this.sendUpLocation}/>
              </label>

          </section>

            <hr className="step-divider" align="left"></hr>

          <section className="article-body-section">
            <h3>STEP 2</h3>
            <h2>Write Your Entry</h2>
              <label id="article-form-label">Please use your own words to tell the unique story of the place in an engaging, concise way.
                <br></br>
                <textarea id="article-form-body" type="text" value={this.state.article.body} onChange={(e) => this.handleChange("body", e)}></textarea>
              </label>
          </section>

          <hr className="step-divider" align="left"></hr>

          <section className="article-photo-add">
            <h3>STEP 3</h3>
            <h2>Add Photos</h2>
              <label className="article-form-label">Please add at least one photo of the place. Click the image preview to delete it.
                <br></br>
                  <input className="article-photo-upload" type="file" multiple onChange={this.updateFile}></input>
                  <span className="preview-wrapper">
                    {previewImages}
                  </span>
              </label>
          </section>

            <hr className="step-divider" align="left"></hr>

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
