import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookDataLayer from './BookDataLayer';

var data = new BookDataLayer();

export class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            username: '',
            phoneNo: '',
            role: [], 
            admin: false,
            user: false
        }
    }

    handleSetEmail = async(e) => {
        console.log(e.target.value)
        console.log(this.state.email)
        await this.setState({
            email: e.target.value     
        })
        console.log("aftersetstate", this.state.email);
        
    }

    handleSetPassword = async(e) => {
       await this.setState({
            password: e.target.value     
        })
    }

    handleSetUsername = async(e) => {
       await this.setState({
            username: e.target.value     
        })
    }

    handleSetPhoneNumber = async(e) => {
       await this.setState({
            phoneNo: e.target.value     
        })
    }

    handleSelectAdmin = () => {
        this.setState({
            admin: !this.state.admin
        })
    }

    handleSelectUser = async() => {
        this.setState({
            user: !this.state.user
        })
    }

    handleSubmitSignUpData = () => {
        if (this.state.admin)
        this.setState({
            role: this.state.role.push("admin")
        })
        console.log(this.state.role);
        
        if (this.state.user)
        this.setState({
            role: this.state.role.push("user")
        })
        console.log(this.state.role);
        console.log("beforeAPI", this.state.email)
        
        data.signUpData(this.state.username,  this.state.password, this.state.email, this.state.phoneNo, this.state.role)
    }

    render() {
        return (
            <div className="login-box">
                <h1>Welcome to BookStore</h1>
                <div>
                    <h3>
                        Create an account
                    </h3>
                </div>
                <div className="signUp">
                    <input className="input-box" placeholder="Email" onChange={(e) => this.handleSetEmail(e)}></input>
                    <input className="input-box" placeholder="Username" onChange={(e) => this.handleSetUsername(e)}></input>
                    <input className="input-box" placeholder="Password" onChange={(e) => this.handleSetPassword(e)}></input>
                    <input className="input-box" placeholder="Mobile" onChange={(e) => this.handleSetPhoneNumber(e)}></input>
                    <span>
                        <input type="checkbox" id="type" value="Admin" onChange={this.handleSelectAdmin}/>
                        <label for="type"> Admin</label>
                        <input type="checkbox" id="type" value="User" onChange={this.handleSelectUser}/>
                        <label for="type"> User</label>
                    </span>
                </div>
                <div>
                    <Link to="/signin" >
                        <button className="button" onClick={this.handleSubmitSignUpData}>Signup</button>
                    </Link>
                </div>
                <div className="low-signup">
                    <a className="signin-link" href="/signin">Already have an account? signin!</a>
                </div>
            </div>
        )
    }
}

export default SignUp;