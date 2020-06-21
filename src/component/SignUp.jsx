import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookStoreImg from '../Assets/BookStoreImg.jpg';


export class SignUp extends Component {
    render() {
        return (
            <div className="Main-View">
                <div className="App-Aside">
                <div style={{display:'flex',flexDirection:'row'}}>
                <div className="Page">
                <div>
                    <h1 style={{ fontFamily:'fontawesome',marginTop:'50px',color:'white'}}>Welcome to Book-Store</h1>
                </div>
                <div style={{ marginTop:'50px',fontSize:'30px'}}>
                    <Link to="/signin">SignIn </Link>or <Link to="/signup">SignUp</Link>
                </div>
                <div className="box">
                    <h1> SignUp</h1>
                    <text> Enter Mail-Id  </text>
                    <input style={{width:'400px', height:'40px',fontSize:'20px'}} placeholder="gmail"></input>
                <br/>
                    <text> Enter  your Mobile Number  </text>
                    <input style={{width:'400px', height:'40px',fontSize:'20px'}} placeholder="Mobile Number"></input>
                <br/>
                    <text> Enter User Name  </text>
                    <input style={{width:'400px', height:'40px',fontSize:'20px'}}placeholder="UserName"></input>
                <br/>
                    <text> Enter Password  </text>
                    <input style={{width:'400px', height:'40px',fontSize:'20px'}}placeholder="Password"></input>
                <br/>
                <br/>
                    <Link to ="/home" >
                        <button className="button">Submit</button>
                    </Link>
                </div>
                </div>
                </div>
                </div>
                <div style={{display:'flex',width:'50%',alignContent:'end'}}>
                    <img  src={BookStoreImg} alt="" className="Image"/>
                </div>
            </div>
        )
    }
}

export default SignUp
