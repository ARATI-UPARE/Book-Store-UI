import React from 'react';
import {Link} from 'react-router-dom';

class SignIn extends React.Component{

    render(){
        return(
            <div className="Page">
                <div className="box">
                <h2> SignIn</h2>
                <text > Enter User Name</text>
                <input style={{width:'400px', height:'50px'}} placeholder="UserName"></input>
                <br/>
                <text> Enter Password</text>
                <input style={{width:'400px', height:'50px'}} placeholder="Password"></input>
                <br/>
                <br/>
                <Link to ="/home" >
                <button className="button">Login</button>
                </Link>
                <br/>
                <br/>
                 {/* <a href="/signup">forgot password?</a>  */}
            </div>
            </div>
        )
    }
}

export default SignIn;