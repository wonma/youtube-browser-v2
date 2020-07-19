import React from 'react';

class VideoPlayer extends React.Component {

    render(){
        const url = `https://www.youtube.com/embed/${this.props.videoId}`
        return (
            <iframe 
            src={url}
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullscreen="true"
            cc_lang_pref="english"
            >
            </iframe>
        );
    }
}

export default VideoPlayer;