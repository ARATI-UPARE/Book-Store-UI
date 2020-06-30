import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from './Routes';
import { Badge } from '@material-ui/core';
import { connect } from 'react-redux';


class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            searchText: ''
        }
    }

    handleSearchText = async (e) => {
        await this.setState({
            searchText: e.target.value
        })
        await this.props.dispatch({ type: "searchUpdate", payload: this.state.searchText })
    }

    handleLogout = () => {
        localStorage.removeItem("token");
    }

    render() {
        return (

            <Router>
                <div className="App">
                    <a href="/" style={{ marginLeft: '260px', marginTop: '17px', color: 'white', fontSize: '30px', textDecoration: 'none', fontFamily: 'fontawesome' }} >&#xf02d; Bookstore</a>
                    <input className="Input" placeholder="&#8287;Search for Books                                                                                &#xf002;" onChange={(e) => this.handleSearchText(e)}/>
                    <ul style={{ listStyleType: 'none', display: 'flex', marginTop: '20px', flexDirection: 'row' }}>
                        <li><Link to="/cart" style={{ marginLeft: '170px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome' }}><Badge color="primary" badgeContent={this.props.cartBookCount === this.props.cartCount ? this.props.cartBookCount : this.props.cartCount} showZero></Badge> &#xf218; Cart</Link> </li>
                        <li><Link to="/wishlist" style={{ marginLeft: '30px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome' }}><Badge color="primary" badgeContent={this.props.wishBookCount === this.props.wishListCount ? this.props.wishBookCount : this.props.wishListCount} showZero></Badge> &#xf004; Wishlist</Link></li>
                        {localStorage.getItem("token") === null || localStorage.getItem("token") === "undefined" ?
                            <li><a href="/signin" style={{ marginLeft: '70px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome' }}>&#xf2bd; Login</a></li>
                            : <li><a href="/" style={{ marginLeft: '70px', color: 'white', textDecoration: 'none', fontSize: '22px', fontFamily: 'fontawesome' }} onClick={this.handleLogout}>&#xf011; Logout</a></li>}
                    </ul>
                </div>
                <Routes />
            </Router>

        );
    }
}
const mapStateToProps = (state) => ({
    cartCount: state.cartCount,
    wishListCount: state.wishListCount,
    searchText: state.searchText
});

export default connect(mapStateToProps)(NavBar);