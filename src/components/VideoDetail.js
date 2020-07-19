import React from 'react';
import VideoPlayer from './VideoPlayer';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loeading...</div>;
    }

    const renderVideoDetail = ({ id, snippet }) => {
        console.log(id, snippet.title);
        return (
            <div>
                <div className="ui embed">
                    <VideoPlayer videoId={id.videoId} />
                </div>
                <div className="ui segment">
                    <h3 className="ui header"> {snippet.title} </h3>
                    <p> {snippet.description}} </p>
                </div>
            </div>
        );
    }

    return (
        <div>{renderVideoDetail(video)}</div>
    );


}

export default VideoDetail;