import React from 'react';
import {Link} from 'react-router-dom';
class SignUp extends React.Component{

    render(){
        return(
            <div className="Page">
            <div className="box">
                <h2> SignUp</h2>
                <h3> Enter Mail-Id  </h3>
                <input style={{width:'400px', height:'40px'}} placeholder="gmail"></input>
                <br/>
                <h3> Enter User Name  </h3>
                <input style={{width:'400px', height:'40px'}}placeholder="UserName"></input>
                <br/>
                <h3> Enter Password  </h3>
                <input style={{width:'400px', height:'40px'}}placeholder="Password"></input>
                <br/>
                <br/>
                <Link to ="/home" >
                <button className="button"><h3>signup</h3></button>
                </Link>
            </div>
        </div>
        )
    }
}

export default SignUp;