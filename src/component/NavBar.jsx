import React from 'react';
import BookStore from './BookStore';
import Cart from './Cart';
import WishList from './WishList'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import BookIcon from '@material-ui/icons/Book';

export default function () {
    return(    
        <BrowserRouter>
        <div className="nav">
            <ul>
            <Link to="/" className="l1">&#xf02d; BOOK-STORE</Link>
            </ul>
            <input className="input" placeholder="Search..."/>
            <ul>
            <Link to="/cart" className="l2"> Cart </Link>
            <Link to="/wishlist" className="l3" > WishList </Link>
            </ul>
        </div> 
        <Switch>   
          <Route exact path="/" component={BookStore}></Route>
          <Route  path="/cart" component={Cart} />   
          <Route path="/wishlist" component={WishList} />
        </Switch>  
    </BrowserRouter>  
    )
}