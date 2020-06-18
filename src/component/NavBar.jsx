import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from './Routes';
import { Badge } from '@material-ui/core';


function NavBar() {

    return (

        <Router>
            <div className="App">
                <Link to="/" style={{ marginLeft: '80px', marginTop: '17px', color: 'white', fontSize: '30px', textDecoration: 'none', fontFamily: 'fontawesome' }} > &#xf02d; Bookstore</Link>
                <Link to="/search">
                    <input className="Input" placeholder="&#8287;&#8287;&#xf002;  Search..." />
                </Link>
                <ul style={{ listStyleType: 'none', display: 'flex', marginTop: '20px' }}>
                    <li><Link to="/cart" style={{ margin: '221px', marginLeft: '224px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome' }}><Badge color="primary" badgeContent={4} showZero></Badge> &#xf218; Cart</Link> </li>
                    <li><Link to="/wishlist" style={{ marginLeft: '-163px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome' }}><Badge color="primary" badgeContent={5} showZero></Badge> &#xf004; Wishlist</Link></li>
                </ul>
            </div>
            <Routes />
        </Router>

    );
}

export default NavBar;