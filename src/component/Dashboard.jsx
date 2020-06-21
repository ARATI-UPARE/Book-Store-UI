import React, { Component } from 'react'
import NavBar from './NavBar';
import Home from './Home';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '85px', marginRight: '85px', outlineStyle: 'groove', outlineColor: '#F5F5F5', outlineWidth: 'thin', height: '100%' }}>
          <NavBar/>
          <Home/>         
        </div>
        <footer style={{ marginLeft: '85px', marginRight: '100px', backgroundColor: '#660000', color: 'white', height: '60px', bottom: '0', position: 'fixed', width: '90.83%' }}>
          <br/>
          <text style={{ display: 'flex', justifyContent: 'center' }}>Copyright &#169; 2020, Bookstore Private Limited. All Rights Reserved</text>
        </footer>
                
            </div>
        )
    }
}

export default Dashboard;
