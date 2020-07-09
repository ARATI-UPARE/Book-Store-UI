import React from 'react';
import { Button, Box } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import Order from '../Assets/Order.jpg';
import BookDataLayer from './BookDataLayer';

var data = new BookDataLayer();

export default class OrderPlaced extends React.Component {
    constructor() {
        super();
        this.state = {
            orderId: ''
        }
    }

    componentDidMount() {
        data.getOrderId(response => {
            console.log("id: ", response)
            this.setState({
                orderId: response
            })
        })
    }

    render() {
        return (
            localStorage.getItem("token") != null && localStorage.getItem("token") !== "undefined" ?
            <div className="placeOrder">
                <img src={Order} alt="" style={{ marginLeft: '230px' }}></img>
                <p className="order">
                    Hurray!!! your order is confirmed <br />
                the order id is #{this.state.orderId} save the order id for <br />
                further communication..
            </p>
                <Box className="box">
                    <br />
                    <text style={{ marginLeft: '90px' }}>Email us</text>
                    <text style={{ marginLeft: '230px' }}>Contact us</text>
                    <text style={{ marginLeft: '230px' }}>Address</text>
                </Box>
                <div className="adminDetails">
                    <Box className="box2">
                        <br />
                        <text style={{ marginLeft: '50px' }}>admin@bookstore.com</text>
                    </Box>
                    <Box className="box3">
                        <br />
                        <text style={{ marginLeft: '85px' }}>+91 7972299171</text>
                    </Box>
                    <Box className="box4">
                        <br />
                        <div style={{ marginLeft: '13px' }}>
                            <text>42, 14th Main, 15th Cross, Sector 4, opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</text>
                        </div>
                    </Box>
                </div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button className="continue-shopping">CONTINUE SHOPPING</Button>
                </Link>
            </div>
            :  <Redirect to='/signin' />
        );
    }
}