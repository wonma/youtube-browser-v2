import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({onVideoSelect, videos}) => {
    const renderList = videos.map(video => {
        return <VideoItem
                    key={video.id.videoId}
                    onVideoSelect={onVideoSelect}
                    video={video}
                />;
    })

    return (
        <div className="ui divided items">
            {renderList}
        </div>
    );
}

export default VideoList;