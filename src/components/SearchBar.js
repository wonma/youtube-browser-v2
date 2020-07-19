import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = {
        input: ''
    }

    onInputChange = (input) => {
        this.setState({ input });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.input);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <input
                            value={this.state.input}
                            onChange={(e) => this.onInputChange(e.target.value)}
                            placeholder="Type a Subject"
                            className="search-bar__input"
                        />
                        <button className="ui button primary">Submit</button>
                    </div>
                    <div className="results"></div>
                </form>
            </div>
        );
    }
}

export default SearchBar;