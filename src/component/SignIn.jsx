import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BookStoreImg from '../Assets/BookStoreImg.jpg';
export class SignIn extends Component {
    render() {
        return (
            // Main div for signin page and image
            <div className="Main-View">
                <div className="App-Aside">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className="Page">
                            <div>
                                <h1 style={{ fontFamily: 'fontawesome', color: 'white', marginTop: '50px' }}>Welcome to Book-Store</h1>
                            </div>
                            <div style={{ marginTop: '50px', fontSize: '30px' }}>
                                <Link to="/signin" style={{ color: 'white', padding: '3px' }}>SignIn </Link> or <Link to="/signup" style={{ color: 'white', padding: '3px' }}>SignUp</Link>
                            </div>
                            <div className="box">
                                <h1> SignIn</h1>
                                <text > Enter User Name</text>
                                <input style={{ width: '400px', height: '50px', fontSize: '20px' }} placeholder="UserName" required></input>
                                <br />
                                <text> Enter Password</text>
                                <input style={{ width: '400px', height: '50px', fontSize: '20px' }} placeholder="Password" required></input>
                                <br />
                                <br />
                                <Link to="/" >
                                    <button className="button">Login</button>
                                </Link>
                                <br />
                                <br />
                                <a href="/signup">Create an account</a>
                                <br />
                                <a href="/resetpassword">forgot password?</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Image-View">
                    <div style={{ display: 'flex', alignContent: 'end' }}>
                        <img src={BookStoreImg} alt="" className="Image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;
