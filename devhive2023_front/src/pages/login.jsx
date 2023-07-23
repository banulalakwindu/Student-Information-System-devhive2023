import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/userApi';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await login(email, password);
            // Assuming login function successfully logs in and stores the token in localStorage

            // Check if the login was successful based on the response (you may need to update this condition based on your API response)
            if (response && response.token) {
                console.log(response);
                // Navigate to the /home URL upon successful login
                if(response.passwordStatus===0){
                    navigate('/change_password');
                }
                else{
                    navigate('/home');
                }
                
            } else {
                // Handle login failure if needed
                setErrorMessage('Invalid email or password');
                // Display an error message or take other appropriate actions
            }
        } catch (error) {
            setErrorMessage('Login failed. Please try again later.');
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
                        <div className='d-flex flex-column'><input type="password" className="form-control mt-4" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {errorMessage && <small className="text-start text-danger">{errorMessage}</small>}
                        </div>
                        <input type="submit" className="btn btn-primary mt-4" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login