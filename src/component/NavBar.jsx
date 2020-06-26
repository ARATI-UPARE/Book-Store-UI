import React from 'react';
import {  Link } from "react-router-dom";
import { Badge } from '@material-ui/core';

function NavBar() {
        return (
            <div className="navbar">
                <Link to="/" style={{ marginLeft: '80px', marginTop: '17px', color: 'white', fontSize: '30px', textDecoration: 'none', fontFamily: 'fontawesome' }} > &#xf02d; Bookstore</Link>
                <Link to="/search">
                    <input className="Input" placeholder="&#8287;&#8287;&#xf002;  Search..." />
                </Link>
                <ul style={{ listStyleType: 'none', display: 'flex', marginTop: '20px' }}>
                    <li><Link to="/cart" style={{ margin: '300px', marginLeft: '224px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome' }}><Badge color="primary" badgeContent={4} showZero></Badge> &#xf218; Cart</Link> </li>
                    <li><Link to="/wishlist" style={{ marginLeft: '-250px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome' }}><Badge color="primary" badgeContent={5} showZero></Badge> &#xf004; Wishlist</Link></li>
                    <li><Link to="/signin"style={{ marginLeft: '-110px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome'}}> &#xf2be; SignIn/SignUp</Link></li>
                </ul>
        </div>
    );
}

export default NavBar;