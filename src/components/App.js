import _ from 'lodash';
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
    selectedVideo: null
  };

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
        selectedVideo: videos[0]
      })
    });
  };

  handleSearch = (term) => {
    this.searchVideo(term);
  };

  handleVideoSelect = (video) => {
    this.selectVideo(video);
  };

  selectVideo = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    const handleSearch = _.debounce(this.handleSearch, 500);

    return (
      <div className="app">
        <SearchBar
          onSearchTerm={handleSearch}
        />
          <VideoDetail
            video={this.state.selectedVideo}
          />
          <VideoList
            videos={this.state.videos}
            onSelectVideo={this.handleVideoSelect}
          />
      </div>
    );
  }
}

export default App;