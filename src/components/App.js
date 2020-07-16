import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';

import youtube from '../apis/youtube';

class App extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        console.log('mounted');
    }

    getVideoItems = (items) => {
        console.log('From App:', items);
        this.setState({items}); 
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar getVideoItems={this.getVideoItems} />
                <VideoList items={this.state.items} />
            </div>
        );
    }
}

export default App;