import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BookDataLayer from './BookDataLayer'

var data = new BookDataLayer();

class ForgotPassword extends Component {
    constructor() {
        super() 
        this.state = {
            email: ''
        }
    }

    handleChangeEmailId = async(e) => {
       
        
       await  this.setState({
            email: e.target.value
        })
        console.log(this.state.email);
    }

    handleSubmit = () => {
        data.forgotPassword(this.state.email)
    }

    render() {
        return (
            <div className="login-box">
                <h1>Welcome to BookStore</h1>
                <div style={{ padding: "10px", display: "flex", flexDirection: "column" }}>
                    <input style={{ padding: "10px", margin: "5px", width:"200px" }} placeholder="Email" onChange={(e) => this.handleChangeEmailId(e)}></input>
                </div>
                <div>
                    <Link >
                        <button className="button" onClick={this.handleSubmit}>Submit</button>
                    </Link>
                </div>
                <div style={{ padding: "10px", margin:"5px", display: "flex", flexDirection: "column", fontSize:"20px", justifyContent:"center", alignItems:"center" }}>
                     <a style={{color:"black", textDecoration:"none",  padding: "5px"}} href="/signup">Create new account instead!</a>
                     <a style={{color:"black", textDecoration:"none"}} href="/signin">have an acoount? Signin</a> 
                </div>
            </div>
        )
    }
}

export default ForgotPassword;