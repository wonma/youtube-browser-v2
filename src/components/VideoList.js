import React from 'react';
import he from 'he';

class VideoList extends React.Component {

    renderItems = (items) => {
        return items.map(item => {
            return (
                <li className="item">
                    <img className="image" src={item.snippet.thumbnails.default.url} />
                    <div className="content">
                        <h3 className="header">{he.decode(item.snippet.title)}</h3>
                    </div>
                </li>
            );
            
        })
    }
    
    render() {
        return (
            <ul className="ui divided items">
                <h2>Search Results</h2>
                {this.renderItems(this.props.items)}
            </ul>
        );
    }
}

export default VideoList;