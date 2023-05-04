import React from 'react'

const Index = () => {
    return (
        <div className='index_page vh-100 has-bg-img overflow-hidden d-flex flex-column pt-5'>
            <img className='bg-img' src="/home.jpg" />
            <img className='logo mt-5 pt-5' src="/Logo-Color.png" />
            <h1 className='mt-4 mx-auto text-white text-center'>Welcome to the Student Management System</h1>
            <h2 className='mx-auto text-white text-center d-flex flex-column flex-md-row mb-5'><div>Faculty of Engineering</div><span className='d-none d-md-flex mx-2'>|</span><div> University of Jaffna</div></h2>
            <h3 className='mx-auto text-white mt-4 text-center'>Click here to Login</h3>
            <a href='/login' className='btn btn-primary'>Login</a>
        </div>
    )
}

export default Index