import React, { Component } from 'react'
import './App.css';
import NavBar from './component/NavBar';

class App extends Component {
  render() {
    return (
      <div>
      <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '85px', marginRight: '85px', outlineStyle: 'groove', outlineColor: '#F5F5F5', outlineWidth: 'thin'}}>
        <NavBar />
      </div>
      <footer style={{marginLeft: '85px', marginRight: '85px', backgroundColor: 'brown', color: 'white', height: '60px'}}>Copyright &#169; 2020, Bookstore Private Limited. All Rights Reserved</footer>
      </div>
    );
  }
}

export default App;
