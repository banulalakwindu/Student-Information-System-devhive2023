import React from 'react'

const Change_password = () => {

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

                <h5 className="m-0 mt-2">Hi <span>Banula</span></h5>
                <h2 className='mb-4 mx-2'>It's Time to Change Your Password</h2>
                <form className="mt-2" method='post'>
                    <div className="form-group px-4 pb-4">
                        <input type="password" className="form-control" id="OldPassword" placeholder="Old Password" />
                        <input type="password" className="form-control mt-4" id="Password" placeholder="New Password" />
                        <input type="password" className="form-control mt-4" id="ConfirmPassword" placeholder="Confirm Password" />
                        <input type="submit" formAction="/home" className="btn btn-primary mt-4" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Change_password