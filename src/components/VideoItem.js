import React from 'react';

import he from 'he';


const VideoItem = ({video, onVideoSelect}) => {
    let title = video.snippet.title;
    return (
        <div onClick={() => { onVideoSelect(video) }} className="item">
            <div className="content">
                <h3 className="header">{he.decode(title)}</h3>
            </div>
        </div>
    );
}

export default VideoItem;