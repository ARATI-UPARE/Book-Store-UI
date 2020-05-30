import React, { Component } from 'react'
import './App.css';
import NavBar from './component/NavBar';

class App extends Component {
  render(){
    return(
      <div className="App">
        <BrowserRouter>
        <NavBar/>       
        </BrowserRouter> 
      </div>
    )
  }
}

export default App;
