import React from 'react';

const VideoItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <img className="media-object" src={imageUrl} alt="Video thumbnail"/>
      </div>

      <div className="media-body">
        <div className="media-heading">
          {video.snippet.title}
        </div>
      </div>
    </li>
  );
};

export default VideoItem;