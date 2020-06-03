import React from 'react'
import Home from './Home';
import Cart from './Cart';
import Wishlist from './Wishlist';
import { Route, Switch } from "react-router-dom";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/wishlist" component={Wishlist}/>
        </Switch>
    );
}