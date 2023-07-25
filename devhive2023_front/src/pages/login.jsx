//import React from 'react'
import React, { useState } from 'react';

const Login = () => {
    const [state, setState] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Redirect to the /home URL
        history.push('/home');
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

                <form className="mt-2" method='post' data-testid="loginForm">
                    <div className="form-group px-4 py-4">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <input type="password" className="form-control mt-4" id="exampleInputPassword1" placeholder="Password" />
                        
                        <p>{state ? "Clicked!" : "Please Click"}</p>

                        <input type="submit" formAction="/home" className="btn btn-primary mt-4" value="Login" onClick={() => setState(true)} />
                        
                        <a className='btn btn-warning' href="/home">Dev Login</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login