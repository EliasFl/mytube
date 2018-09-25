import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  }

  handleChange = (event) => {
    this.changeTerm(event.target.value);
  }

  changeTerm = (newTerm) => {
    this.setState({
      term: newTerm,
    });
    this.props.onSearchTerm(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;