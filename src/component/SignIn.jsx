import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BookDataLayer from './BookDataLayer';

var data = new BookDataLayer();

export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleChangeLogin = async () => {
        await data.signInData(this.state.username, this.state.password)
        console.log("token:", sessionStorage.getItem("token"));

        if (sessionStorage.getItem("isFrom") === "cart") {
            await sessionStorage.removeItem("isFrom")
            this.props.history.push('/cart');
            window.location.reload(true);
        }
        else if (sessionStorage.getItem("isFrom") === "wishList") {
            await sessionStorage.removeItem("isFrom")
            this.props.history.push('/wishlist');
            window.location.reload(true);
        }
        else {
            this.props.history.push('/');
            window.location.reload(true);
        }
    }

    render() {
        return (
            <div className="login-box">
                <h1>Welcome to BookStore</h1>
                <div className="signIn">
                    <input style={{ padding: "10px", margin: "5px" }} placeholder="Username" onChange={(e) => this.handleChangeUsername(e)}></input>
                    <input style={{ padding: "10px", margin: "5px" }} placeholder="Password" type="password" onChange={(e) => this.handleChangePassword(e)}></input>
                </div>
                <div>
                    <Link to="/" >
                        <button className="button" onClick={this.handleChangeLogin}>Login</button>
                    </Link>
                </div>
                <div className="low-signin">
                    <a className="a1" href="/signup">Create account instead!</a>
                    <a className="a2" href="/forgotpassword">Forgot password?</a>
                </div>
            </div>
        )
    }
}

export default SignIn;