import React from 'react';

class ArticleForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      long_description: "",
      body: "",
      lat: 0,
      lng: 0,
      author_id: 0,
      city_id: 0,

    };
  }
}
