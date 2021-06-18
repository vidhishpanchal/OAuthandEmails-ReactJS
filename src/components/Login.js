import React, {useState} from 'react'
import { GoogleLogin } from 'react-google-login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const loginSuccess = () => toast.success('OAuth Login Successful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        const loginFailed = () => toast.danger('Login Unsuccessful, please try again', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    const responseGoogleSuccess = (response)=>{
        console.log(response);
        setLoggedIn(true);
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        loginSuccess();
    }
    const responseGoogleFailure = (response)=>{
        console.log(response);
        loginFailed()
    }
    
    return (
        <div className="login-div">
       
            <h1 style={{textAlign:'center'}}>Login using Google OAuth</h1>
            <div className="login_button_div">
            <GoogleLogin
            clientId= {process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFailure}
            cookiePolicy={'single_host_origin'}
            /></div>
  <hr />
   <p style={{textAlign:"center"}}>{loggedIn ? `Hello ${name} you are Logged In. Your Email-ID: ${email}`: "Click on button to Login"}
   </p>
   <ToastContainer />
        </div>
        
    )
}

export default Login
