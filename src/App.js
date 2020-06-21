import React, { Component } from 'react'
import './App.css';
import Routes from './component/Routes';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Routes/>
        <footer style={{ marginLeft: '50px', marginRight: '50px', color: 'black', height: '60px', bottom: '0', position: 'fixed', width: '90.83%' }}>
         <br/>
         <text style={{ display: 'flex', justifyContent: 'center',marginBottom:'100px' }}>Copyright &#169; 2020, Bookstore Private Limited. All Rights Reserved</text>
        </footer>
     </div>
    );
  }
}


export default App;
