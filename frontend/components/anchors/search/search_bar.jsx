import React from 'react';
import { connect } from 'react-redux';
import { updateSearchStatus, fetchSearchItems } from '../../../actions/pg_search_actions';
import SearchIndexItem from './search_index_item';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: "",
      searchIndexItems: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChange(e){
    this.setState({ query: e.target.value });
    if (this.timeOut){
      clearTimeout(this.timeOut);
    }
    this.timeOut = setTimeout(
      () => {
        if (this.state.query === ""){
          this.setState({ searchIndexItems: ""});
        } else {
            this.props.fetchSearchItems(this.state.query)
            .then((action) => {
              this.setSearchResults(action);
            });
          }
        }, 500);
  }

  setSearchResults(action){
    if ((Object.values(action.searchItemsPayload).every(el => {
      return ((el instanceof Array) && (el.length === 0));
    }))) {
      this.setState({
        searchIndexItems:
        <li className="search-index-item">Sorry, but nothing matches your search. <Link className="default-search-link" onClick={this.closeModal} to="/articles/new">Try adding it yourself!</Link></li>});
    } else {
      this.createSearchItems(action.searchItemsPayload);
    }
  }

  closeModal(e){
    e.stopPropagation();
    this.props.updateSearchStatus(false);

  }

  createSearchItems(itemsObject){
    let searchItems = [];
    Object.keys(itemsObject).forEach(type => {
      itemsObject[type].forEach((item, idx) => {
        let num = Math.floor(Math.random(item.searchable_id));
        searchItems.push(<SearchIndexItem key={num} type={type} content={item.content} id={item.searchable_id} updateSearchStatus={this.props.updateSearchStatus}/>);
      });
    });
    this.setState({searchIndexItems: searchItems});
  }

  render(){

    return (
      <div className="search-modal-background" onClick={this.closeModal}>
        <div className="search-modal-child" onClick={(e) => e.stopPropagation()}>
          <input placeholder="What are you looking for?" className="search-input" onChange={this.handleChange} value={this.state.query}/>
            <ul className="search-index-items-holder">
              { this.state.searchIndexItems }
            </ul>
        </div>
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsObject: state.ui.searchItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchStatus: (boolean) => dispatch(updateSearchStatus(boolean)),
    fetchSearchItems: (queryString) => dispatch(fetchSearchItems(queryString))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
