import React, { useState } from 'react';  // Component no loner used

// SearchForm as functional component with hooks:

function SearchForm(props) {

  // Replaces state:
  const [searchText, setSearchText] = useState('');

  // New onSearchChange in functional component:
  const onSearchChange = (e) => { 
    setSearchText(e.target.value)
  };

  // New handleSubmit in functional component:
  const handleSubmit = (e) => {
    e.preventDefault();
     props.onSearch(searchText);
    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">Search</label>
      <input type="search"
        onChange={onSearchChange}
        name="search"
        placeholder="Search..."
      />
      <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
    </form>
  );
}

export default SearchForm;

// ... replacing the SearchForm class component:
/*
export default class SearchForm extends Component {
  
  state = {
    searchText: ''  // local state
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);  // instead of this.state.searchText when including a ref to the input
    e.currentTarget.reset();
  }
  
  render() {  
    // Note the red in input: when used in an HTML element, the ref parameter requires a callback functions that receives the underlying DOM element as argument and will be called immediately after the component is mounted --> it will put a reference on the input of the SeachForm class that can be accessed with this.query
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               placeholder="Search..."
               ref={(input) => this.query = input   
        />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
  }
};
*/