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
                    <a href="/" className="bookstore" >&#xf02d; Bookstore</a>
                    <input className="Input" placeholder="&#8287;Search for Books &#xf002;" onChange={(e) => this.handleSearchText(e)} />
                    <ul className="url">
                        <li><Link to="/cart" className="cartUrl"><Badge color="primary" badgeContent={this.props.cartBookCount === this.props.cartCount ? this.props.cartBookCount : this.props.cartCount} ></Badge> &#xf218; Cart</Link> </li>
                        <li><Link to="/wishlist" className="wishlistUrl"><Badge color="primary" badgeContent={this.props.wishBookCount === this.props.wishListCount ? this.props.wishBookCount : this.props.wishListCount} ></Badge> &#xf004; Wishlist</Link></li>
                        {localStorage.getItem("token") === null || localStorage.getItem("token") === "undefined" ?
                            <li><a href="/signin" className="loginUrl">&#xf2bd; Login</a></li>
                            : <li><a href="/" className="homeUrl" onClick={this.handleLogout}>&#xf011; Logout</a></li>}
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