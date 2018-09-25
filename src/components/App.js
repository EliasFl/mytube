import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar';

import API_KEY from '../api/youtubeAPIKey';

class App extends Component {
  state = {
    videos: [],
  }

  componentDidMount() {
    this.searchVideo('kobe bryant');
  }

  searchVideo = (term) => {
    YTSearch({
      key: API_KEY,
      term: term
    }, (videos) => {
      this.setState({
        videos: videos,
      })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;