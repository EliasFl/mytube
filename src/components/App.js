import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar';
import VideoList from './VideoList';

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
        <VideoList
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;