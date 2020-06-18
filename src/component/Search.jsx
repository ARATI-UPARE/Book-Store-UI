import React from 'react';
import { Component } from 'react';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            books: []
        }
    }

    render() {
        return(
            <div style={{ display: 'flex', flexDirection: 'row', height: '100%'}}>
            <input type='text' placeholder='Search here...' ></input>
            </div>
        );
    }
}

export default Search