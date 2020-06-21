import React from 'react'
import Cart from './Cart';
import Wishlist from './Wishlist';
import OrderPlaced from './OrderPlaced';
import NotFound from './NotFound';
import Search from './Search';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/wishlist" component={Wishlist}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/orderplaced" component={OrderPlaced}/>
            <Route path="/search" component={Search}/>
            <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
    );
}