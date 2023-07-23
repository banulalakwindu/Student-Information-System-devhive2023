import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updatePassword } from '../api/userApi';
import {user} from '../api/userApi';

const Change_password = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const [student, setStudent] = useState("");

    useEffect(() => {
        const getUser = async () => {
            const student = await user();
            console.log(student);
            // setUser(user);
            setStudent(student.user.studentregistration.Name_With_Initial);
        };
        getUser();
    }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (password !== confirmPassword) {
            setErrorMessage('Password and Confirm Password are not matching');
            return;
        }
        const passwordData = {
            oldPassword: oldPassword,
            Password: password,
        };

        try {
            
            const response = await updatePassword(passwordData);
            if (response) {
                // Navigate to the /home URL upon successful login
                // console.log(response);
                navigate('/login');
            }
            
        } catch (error) {
            console.log(error);
            // Handle error (e.g., display an error message to the user)
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

                <h5 className="m-0 mt-2">Hi <span>{student}</span></h5>
                <h2 className='mb-4 mx-2'>It's Time to Change Your Password</h2>
                <form className="mt-2" method='post'onSubmit={handleFormSubmit}>
                    <div className="form-group px-4 pb-4">
                        <input type="password" className="form-control" id="OldPassword" placeholder="Old Password" value={oldPassword} onChange={(e) =>setOldPassword(e.target.value)}/>
                        <input type="password" className="form-control mt-4" id="Password" placeholder="New Password" value={password} onChange={(e) =>setPassword(e.target.value)} />
                        <div className='d-flex flex-column text-start'>
                            <input type="password" className="form-control mt-4" id="ConfirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) =>setConfirmPassword(e.target.value)} />
                            {errorMessage && <small className="text-start text-danger">{errorMessage}</small>}
                        </div>
                        <input type="submit" formAction="/home" className="btn btn-primary mt-4" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Change_password