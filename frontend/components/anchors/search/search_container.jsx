import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { updateSearchStatus } from '../../../actions/pg_search_actions';

class SearchContainer extends React.Component{
  constructor(props){
    super(props);
    // this.SearchBar = "";
    this.renderSearchBar = this.renderSearchBar.bind(this);
  }

  renderSearchBar(){
    // this.SearchBar = <SearchBar />;
    this.props.updateSearchStatus(true);
  }

  render(){

    let searchBar;
    if (this.props.searchBarOpen){
      searchBar = <SearchBar />;
    }

    return (
      <div className="right-nav-search" onClick={this.renderSearchBar}>
        
        {searchBar}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    searchBarOpen: state.ui.searchBarOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchStatus: (boolean) => dispatch(updateSearchStatus(boolean))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
