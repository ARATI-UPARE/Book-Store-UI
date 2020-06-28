import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from './Routes';
import { Badge } from '@material-ui/core';
import { connect } from 'react-redux';


class NavBar extends Component {

    render() {
    return (

        <Router>
            <div className="App">
                <Link to="/" style={{ marginLeft: '80px', marginTop: '17px', color: 'white', fontSize: '30px', textDecoration: 'none', fontFamily: 'fontawesome' }} >&#xf02d; Bookstore</Link>
                <Link to="/search">
                    <input className="Input" placeholder="&#8287;&#8287;&#xf002;  Search..." />
                </Link>
                <ul style={{ listStyleType: 'none', display: 'flex', marginTop: '20px', flexDirection: 'row' }}>
                    <li><Link to="/cart" style={{ marginLeft: '200px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome' }}><Badge color="primary" badgeContent={this.props.cartBookCount === this.props.cartCount ? this.props.cartBookCount : this.props.cartCount } showZero></Badge> &#xf218; Cart</Link> </li>
                    <li><Link to="/wishlist" style={{ marginLeft: '30px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome' }}><Badge color="primary" badgeContent={this.props.wishBookCount === this.props.wishListCount ? this.props.wishBookCount : this.props.wishListCount } showZero></Badge> &#xf004; Wishlist</Link></li>
                    <li><Link to="/signin" style={{ marginLeft: '30px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome'}}>&#xf2bd; Login/Signup</Link></li>  
                </ul>
            </div>
            <Routes />
        </Router>

    );
    }
}
const mapStateToProps = (state) => ({
    cartCount: state.cartCount,
    wishListCount: state.wishListCount
});

export default connect(mapStateToProps) (NavBar);