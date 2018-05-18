import React from 'react';
import { connect } from 'react-redux';
import { updateSearchStatus, fetchSearchItems } from '../../../actions/pg_search_actions';
import SearchIndexItem from './search_index_item';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChange(e){
    if (this.timeOut){
      clearTimeout(this.timeOut);
    }
    this.timeOut = setTimeout(() => this.props.fetchSearchItems(this.state.query), 1500);
    this.setState({ query: e.target.value});
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
    return searchItems;
  }

  render(){
    let searchIndexItems = <li>Sorry, but nothing matches your search. <Link to="/articles/new">Try adding it yourself!</Link></li>;

    if ( this.props.itemsObject.articles.length > 0 || this.props.itemsObject.cities.length > 0 || this.props.itemsObject.countries.length > 0 ){
      searchIndexItems = this.createSearchItems(this.props.itemsObject);
    }

    return (
      <div className="search-modal-background" onClick={this.closeModal}>
        <div className="search-modal-child" onClick={(e) => e.stopPropagation()}>
          <input onChange={this.handleChange} value={this.state.query}/>
            <ul>
              { searchIndexItems }
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
