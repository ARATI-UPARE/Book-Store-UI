import React from 'react';
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Order from '../Assets/Order.jpg';

export default function OrderPlaced() {
    return (
        <div style={{ marginBottom: '44.3px', marginLeft: '420px', marginTop: '50px' }}>
            <img src={Order} alt="" style={{ marginLeft: '230px'}}></img>
            <p style={{ justifyContent: 'center', textAlign: 'center', fontSize: '25px' }}>
                Hurray!!! your order is confirmed <br />
                the order id is #123456 save the order id for <br />
                further communication..
            </p>
            <Box style={{ outline: 'groove', width: '870px', height: '50px', outlineWidth: '0.5px', marginTop: '60px' }}>
                <br />
                <text style={{ marginLeft: '90px' }}>Email us</text>
                <text style={{ marginLeft: '230px' }}>Contact us</text>
                <text style={{ marginLeft: '230px' }}>Address</text>
            </Box>
            <div style={{ display: 'flex', flexDirection: 'row', fontSize: '14px' }}>
                <Box style={{ outline: 'groove', width: '280px', height: '85px', outlineWidth: '0.5px' }}>
                    <br />
                    <text style={{ marginLeft: '50px' }}>admin@bookstore.com</text>
                </Box>
                <Box style={{ outline: 'groove', width: '280px', height: '85px', outlineWidth: '0.5px' }}>
                    <br />
                    <text style={{ marginLeft: '85px' }}>+91 7972299171</text>
                </Box>
                <Box style={{ outline: 'groove', width: '310px', height: '85px', outlineWidth: '0.5px' }}>
                    <br />
                    <div style={{ marginLeft: '13px' }}>
                        <text>42, 14th Main, 15th Cross, Sector 4, opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</text>
                    </div>
                </Box>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button style={{ backgroundColor: '#0073cf', color: 'white', marginLeft: '335px', marginTop: '50px' }}>CONTINUE SHOPPING</Button>
            </Link>
        </div>
    );
}