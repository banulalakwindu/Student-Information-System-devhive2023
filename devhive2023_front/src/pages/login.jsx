import React from 'react'

const Login = () => {
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
                <form className="mt-2">
                    <div className="form-group px-4 py-4">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <input type="password" className="form-control mt-4" id="exampleInputPassword1" placeholder="Password" />
                        <input type="submit" formAction='/home' className="btn btn-primary mt-4" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login