import React from 'react';

class ArticleForm extends React.Component {
  constructor(){
    super(props);
    this.state = {
      name: "",
      description: "",
      long_description: "",
      body: "",
      lat: 0,
      lng: 0,
    };
  }
}
