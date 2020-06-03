import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from './Routes';


function NavBar() {
    return (

        <Router>
            <div className="App">
                <Link to="/" style={{ marginLeft: '-56px', marginTop: '17px', color: 'white', fontSize: '30px', textDecoration: 'none', fontFamily: 'fontawesome' }} > &#xf02d; Bookstore</Link>
                <input style={{ marginTop: '15px', marginLeft: '-68px', width: '642px', height: '35px', fontSize: '21px' }} placeholder="Search..." />
                <ul style={{ listStyleType: 'none', display: 'flex', marginTop: '20px' }}>
                    <li><Link to="/cart" style={{ margin: '294px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome' }}> &#xf218; Cart</Link> </li>
                    <li><Link to="/wishlist" style={{ marginLeft: '-243px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome' }}> &#xf1a5; Wishlist</Link></li>
                </ul>
            </div>
            <Routes />
        </Router>

    );
}

export default NavBar;