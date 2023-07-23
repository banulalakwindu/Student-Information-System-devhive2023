import React from 'react'
import { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {login} from '../api/userApi';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
      
        try {
          const response = await login(email, password);
          // Assuming login function successfully logs in and stores the token in localStorage
      
          // Check if the login was successful based on the response (you may need to update this condition based on your API response)
          if (response && response.token) {
            // Navigate to the /home URL upon successful login
            navigate('/home');
            window.location.reload(); // Reloading the page might not be necessary here
          } else {
            // Handle login failure if needed
            console.log('Login failed:', response);
            // Display an error message or take other appropriate actions
          }
        } catch (error) {
          console.log(error);
          // Handle login error if needed
          // Display an error message or take other appropriate actions
        }
      };
      

    return (
        <div className='index_page vh-100 has-bg-img overflow-hidden d-flex'>
            <img className='bg-img' src="/home.jpg" />

            <div className="login-inner m-auto rounded d-flex flex-column text-white text-center">
                <div>
                    <img src="/SMS_Logo.png" />
                    <h4 className='mt-3 mb-1'>Student Management System</h4>
                    <p>Faculty of Engineering - University of Jaffna</p>
                </div>

                <h1 className="mt-2">Login</h1>
                <form className="mt-2" method='post' onSubmit={handleFormSubmit} >
                    <div className="form-group px-4 py-4">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="form-control mt-4" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="submit"  className="btn btn-primary mt-4" value="Login" />
                        <a className='btn btn-warning' href="/home">Dev Login</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login