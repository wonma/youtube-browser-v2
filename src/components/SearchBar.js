import React from 'react';

import youtube from '../apis/youtube';

class SearchBar extends React.Component {
    state = {
        input: ''
    }

    onInputChange = (input) => {
        this.setState({ input });
    }

    onInputSubmit = (e) => {
        e.preventDefault();
        console.log('submit button clicked');

        youtube.get('/search', {
            params: {
                part: 'snippet',
                key: 'AIzaSyADbN4Rgp8q03yJL2IjEocDzxfJKotYFJI',
                type: 'video',
                maxResults: 5,
                channelId: 'UCzfKXReow3r5n1JR5nVlJZw',
                q: this.state.input
            }
        }).then((response) => {
            this.props.getVideoItems(response.data.items);
        })

        
    }

    render() {
        return (
            <form onSubmit={this.onInputSubmit} className="ui search">
                <div className="ui icon input">
                    <input value={this.state.input} onChange={(e) => this.onInputChange(e.target.value)} placeholder="Type a Subject" />
                    <button className="ui button primary">Submit</button>
                </div>
                <div className="results"></div>
            </form>
        );
    }
}

export default SearchBar;