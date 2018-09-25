import React from 'react';
import VideoItem from './VideoItem'; 

const VideoList = (props) => {
  const VideoItems = props.videos.map(video => {
    return (
      <VideoItem
        video={video}
        key={video.etag}
      />
    ); 
  });

  return (
    <ul className="col-md-4 list-group">
      {VideoItems}
    </ul>
  );
};

export default VideoList;