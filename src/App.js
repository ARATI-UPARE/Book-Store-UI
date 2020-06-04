import React, { Component } from 'react'
import './App.css';
import NavBar from './component/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '85px', marginRight: '85px', outlineStyle: 'groove', outlineColor: '#F5F5F5', outlineWidth: 'thin' }}>
          <NavBar />
        </div>
        <footer style={{ marginLeft: '85px', marginRight: '85px', backgroundColor: '#660000', color: 'white', height: '60px' }}>
          <br></br>
          <text style={{ marginLeft: '211px' }}>Copyright &#169; 2020, Bookstore Private Limited. All Rights Reserved</text>
        </footer>
      </div>
    );
  }
}

export default App;
