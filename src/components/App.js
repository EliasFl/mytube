import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import '../styles/index.css';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

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

  handleSearch = (term) => {
    this.searchVideo(term);
  }

  render() {
    return (
      <div className="app">
        <SearchBar
          onSearchTerm={this.handleSearch}
        />
          <VideoDetail
            video={this.state.videos[0]}
          />
          <VideoList
            videos={this.state.videos}
          />
      </div>
    );
  }
}

export default App;