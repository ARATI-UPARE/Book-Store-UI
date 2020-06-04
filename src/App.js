import React, { Component } from 'react'
import './App.css';
import NavBar from './component/NavBar';

class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '85px', marginRight: '85px', outlineStyle: 'groove', outlineColor: '#F5F5F5', outlineWidth: 'thin'}}>
        <NavBar />
      </div>
    );
  }
}

export default App;
