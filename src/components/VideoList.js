import React from 'react';
import VideoItem from './VideoItem';
import PropTypes from 'prop-types'; 

const VideoList = ({videos, onSelectVideo}) => {
  const VideoItems = videos.map(video => {
    return (
      <VideoItem
        video={video}
        key={video.etag}
        onSelectVideo={onSelectVideo}
      />
    ); 
  });

  return (
    <ul className="col-md-4 list-group">
      {VideoItems}
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default VideoList;