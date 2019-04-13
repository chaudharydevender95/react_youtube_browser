import React, { Component } from 'react';


class searchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={event=>this.onInputChange(event.target.value)} />
                
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    }
}

export default searchBar;