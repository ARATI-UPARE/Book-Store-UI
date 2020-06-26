import React from 'react'
import Cart from './Cart';
import Wishlist from './Wishlist';
import OrderPlaced from './OrderPlaced';
import NotFound from './NotFound';
import Search from './Search';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import ForgotPassword from './ForgotPassword';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/wishlist" component={Wishlist}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/resetpassword" component={ForgotPassword}/>

            <Route path="/orderplaced" component={OrderPlaced}/>
            <Route path="/search" component={Search}/>
            <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
    );
}