import React, { Component } from 'react'
import Home from './Home';
import Cart from './Cart';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

class NavBar extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="App">
                    <h1 type="text">BOOK-STORE</h1>
                    <input style={{marginTop:'22px', marginLeft:'25px', width:'400px', height:'35px'}} placeholder="Search..."/>
                    <ul>
                        <li><Link to="/" style={{marginLeft:'6px', color:'white'}}>Home</Link> </li>
                        <li><Link to="/cart" style={{marginLeft:'6px', color:'white'}}>Cart</Link></li>
                    </ul>
                    <hr />
                    <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default NavBar;