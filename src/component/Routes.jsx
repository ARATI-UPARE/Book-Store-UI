import React from 'react'
import Home from './Home';
import Cart from './Cart';
import Wishlist from './Wishlist';
import OrderPlaced from './OrderPlaced';
import NotFound from './NotFound';
import Search from './Search';
import { Route, Switch } from "react-router-dom";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/wishlist" component={Wishlist}/>
            <Route path="/orderplaced" component={OrderPlaced}/>
            <Route path="/search" component={Search}/>
            <Route component={NotFound}/>
        </Switch>
    );
}