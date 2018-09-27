import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = ({video, onSelectVideo}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onSelectVideo(video)} className="list-group-item">
      <div className="video-image">
        <img src={imageUrl} alt="Video thumbnail"/>
      </div>

      <div className="video-title">
        <div>
          {video.snippet.title}
        </div>
      </div>
    </li>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object,
  onSelectVideo: PropTypes.func,
};

export default VideoItem;