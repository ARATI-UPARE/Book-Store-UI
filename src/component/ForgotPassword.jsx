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

    handleChangeEmailId = async (e) => {
        await this.setState({
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
                <div className="signIn">
                    <input className="mailInput" placeholder="Email" onChange={(e) => this.handleChangeEmailId(e)}></input>
                </div>
                <div>
                    <Link >
                        <button className="button" onClick={this.handleSubmit}>Submit</button>
                    </Link>
                </div>
                <div className="forgotPassword">
                    <a className="a1" href="/signup">Create new account instead!</a>
                    <a className="a2" href="/signin">have an acoount? Signin</a>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;