import React from "react";
import { merge } from "lodash";
import FormMap from "./article_form/form_map";
import PreviewImage from "./article_form/preview_image";

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: this.props.article,
      country: this.props.country,
      city: this.props.city,
      images: this.props.images
    };
    this.articleFormData = new FormData();

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.removePreview = this.removePreview.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
    this.createCountry = this.props.createCountry.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  submit(e) {
    e.preventDefault();
    // clear any submission errors so they may repopulate in this
    // submission attempt if needed
    this.props.clearArticleErrors();

    let { country, city, article } = this.state;
    this.createCountry(country).then(countryResponse => {
      this.props
        .createCity(countryResponse.countryPayload.country, city)
        .then(cityResponse => {
          this.handleArticleSubmit(cityResponse, article);
        });
    });
  }

  handleArticleSubmit(cityResponse, article) {
    // put all article-relevant info into a FormData object
    // to comply with paperclip gem (for image parsing)
    this.appendArticleInfo(cityResponse, article);
    this.appendImageInfo();
    this.appendEditInfo();
    this.props.action(this.articleFormData).then(submitResponse => {
      return this.props.history.push(
        `/articles/${submitResponse.articlePayload.article.id}`
      );
    });
  }

  appendArticleInfo(cityResponse, article) {
    const articleStrongParams = [
      "name",
      "description",
      "long_description",
      "body",
      "lat",
      "lng"
    ];
    articleStrongParams.forEach(key => {
      this.articleFormData.append(`article[${key}]`, article[key]);
    });
    if (article.id) {
      this.articleFormData.append("id", article.id);
    }
    this.articleFormData.append(
      "article[city_id]",
      cityResponse.cityPayload.city.id
    );
  }

  appendImageInfo() {
    this.state.images.forEach(image => {
      this.articleFormData.append(
        "article[images_attributes][][image]",
        image.image_url
      );
    });
  }

  appendEditInfo() {
    if (this.props.editorId) {
      this.articleFormData.append(
        "article[edits_attributes][][editor_id]",
        this.props.editorId
      );
    }
  }

  handleChange(field, e) {
    let inProgressArticle = this.state.article;
    inProgressArticle[field] = e.target.value;
    this.setState({ article: inProgressArticle });
  }

  updateFile(e) {
    const inputFiles = e.currentTarget.files;
    const fileReader = new FileReader();

    fileReader.onloadend = function() {
      let currentImages = this.state.images.slice();

      Array.from(inputFiles).forEach(file => {
        currentImages.push({ imageFile: file, image_url: fileReader.result });
        //changed imageUrl to image_url so all images hold this property
      });
      this.setState({ images: currentImages });
    }.bind(this);

    if (inputFiles) {
      Array.from(inputFiles).forEach(file => {
        fileReader.readAsDataURL(file);
      });
    }
  }

  removePreview(idx) {
    return e => {
      e.preventDefault();
      let newImages = this.state.images.slice();
      newImages.splice(idx, 1);
      this.setState({ images: newImages });
    };
  }

  updateArticle(articleInfoObject) {
    let { lat, lng, countryName, cityName } = articleInfoObject;
    let inProgressArticle = this.state.article;
    inProgressArticle["lat"] = lat;
    inProgressArticle["lng"] = lng;
    let inProgressCountry = this.state.country;
    inProgressCountry["name"] = countryName;
    let inProgressCity = this.state.city;
    inProgressCity["name"] = cityName;

    this.setState({
      article: inProgressArticle,
      country: inProgressCountry,
      city: inProgressCity
    });
  }

  populateArticleErrors() {
    let articleErrors;
    if (this.props.errors.length > 0) {
      articleErrors = this.props.errors.map((error, idx) => {
        return (
          <li className="article-errors" key={idx}>
            {error}
          </li>
        );
      });
    }
    return articleErrors;
  }

  populatePreviewImages() {
    let previewImages;
    if (this.state.images.length > 0) {
      previewImages = this.state.images.map((image, idx) => {
        return (
          <PreviewImage
            key={idx}
            idx={idx}
            imageUrl={image.image_url}
            removePreview={this.removePreview}
          />
        );
      });
    }
    return previewImages;
  }

  render() {
    let articleErrors = this.populateArticleErrors();
    let previewImages = this.populatePreviewImages();

    const placeCoords = {
      lat: this.props.article.lat,
      lng: this.props.article.lng
    };
    return (
      <main className="article-main-form">
        <form className="article-form" onSubmit={this.submit}>
          <h1 className="article-form-header">{this.props.formType}</h1>
          {articleErrors}

          <section className="article-basic-info">
            <h3>STEP 1</h3>
            <h2>Basic Information</h2>
            <label className="article-form-label">
              What is the place commonly called?
              <input
                type="text"
                placeholder="E.g. Bean Puzzle Tombstone"
                value={this.state.article.name}
                onChange={e => this.handleChange("name", e)}
              />
            </label>

            <label className="article-form-label">
              What's the gist? Keep this to a couple of words.
              <input
                type="text"
                placeholder="E.g. A tombstone made of beans!"
                value={this.state.article.description}
                onChange={e => this.handleChange("description", e)}
              />
            </label>

            <label className="article-form-label">
              Optionally in a single sentence, what makes this place special?
              <input
                type="text"
                placeholder="E.g. It took over 100 years to decode this enigmatic epitaph for two buried brides."
                value={this.state.article.long_description}
                onChange={e => this.handleChange("long_description", e)}
              />
            </label>

            <label className="article-form-label">
              Where is the place?
              <FormMap
                updateArticle={this.updateArticle}
                placeCoords={placeCoords}
                formType={this.props.formType}
              />
            </label>
          </section>

          <hr className="step-divider" align="left" />

          <section className="article-body-section">
            <h3>STEP 2</h3>
            <h2>Write Your Entry</h2>
            <label id="article-form-label">
              Please use your own words to tell the unique story of the place in
              an engaging, concise way.
              <br />
              <textarea
                id="article-form-body"
                type="text"
                value={this.state.article.body}
                onChange={e => this.handleChange("body", e)}
              />
            </label>
          </section>

          <hr className="step-divider" align="left" />

          <section className="article-photo-add">
            <h3>STEP 3</h3>
            <h2>Add Photos</h2>
            <label className="article-form-label">
              Please add at least one photo of the place. Click the image
              preview to delete it.
              <br />
              <input
                className="article-photo-upload"
                type="file"
                multiple
                onChange={this.updateFile}
              />
              <span className="preview-wrapper">{previewImages}</span>
            </label>
          </section>

          <hr className="step-divider" align="left" />

          <button className="article-form-button">
            {this.props.buttonText}
          </button>
        </form>
      </main>
    );
  }
}

export default ArticleForm;
