import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import youtube from '../apis/youtube';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        searchExamples: ['happiness', 'anxiety', 'self-esteem', 'dream']
    }

    componentDidMount() {
        const randomExample = this.state.searchExamples[Math.floor(Math.random() * this.state.searchExamples.length)];
        console.log(randomExample);
        this.onTermSubmit(randomExample);
    }

    onVideoSelect = (selectedVideo) => {
        this.setState({ selectedVideo })
    }

    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                part: 'snippet',
                key: 'AIzaSyDy7p__vv_-LggwKKdxKVhPMvdqQk9_mzc',
                type: 'video',
                maxResults: 5,
                channelId: 'UCzfKXReow3r5n1JR5nVlJZw',
                q: term,
            }
        }).then((response) => {
            if (response.data.items.length !== 0) {
                this.setState({
                    selectedVideo: response.data.items[0],
                    videos: response.data.items
                });
            } else {
                console.log(response);
            }
    })}

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList className="four wide column" onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;