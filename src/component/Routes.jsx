import React from 'react'
import Home from './Home';
import Cart from './Cart';
import Wishlist from './Wishlist';
import OrderPlaced from './OrderPlaced';
import NotFound from './NotFound';
import Search from './Search';
import { Route, Switch } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import PasswordSet from './PasswordSet';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/wishlist" component={Wishlist}/>
            <Route path="/orderplaced" component={OrderPlaced}/>
            <Route path="/search" component={Search}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/resetpassword" component={ResetPassword}/>
            <Route path="/passwordset/*" component={PasswordSet}/>
            <Route component={NotFound}/>
        </Switch>
    );
}