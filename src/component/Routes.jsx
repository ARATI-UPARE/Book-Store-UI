import React from 'react'
import Home from './Home';
import Cart from './Cart';
import Wishlist from './Wishlist';
import OrderPlaced from './OrderPlaced';
import NotFound from './NotFound';
import { Route, Switch } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import PasswordSet from './PasswordSet';
import ForgotPassword from './ForgotPassword';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/wishlist" component={Wishlist}/>
            <Route path="/orderplaced" component={OrderPlaced}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/forgotpassword" component={ForgotPassword}/>
            <Route path="/passwordset/*" component={PasswordSet}/>
            <Route component={NotFound}/>
        </Switch>
    );
}