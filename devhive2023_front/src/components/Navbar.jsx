import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBell } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import {user} from '../api/userApi';

const Navbar = () => {
    // const [student, setUser] = useState({});
    const [student, setStudent] = useState("");
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        const getUser = async () => {
            const student = await user();
            console.log(student);
            // setUser(user);
            setStudent(student.user.studentregistration.Name_With_Initial);
            setPhoto(student.user.studentregistration.Photo);
        };
        getUser();
    }, []);
        

    const path = console.log(window.location.pathname);
    // const [selectedItem, setSelectedItem] = useState('Home');

    // const handleItemClick = (item) => {
    //     setSelectedItem(item);
    // };

    return (
        <div>
            <nav className="navbarMy fixed-top bg-green pt-4 pb-2 px-4 shadow rounded-bottom border-bottom">
                <div className='bg-white d-flex justify-content-between p-2'>
                    <div className="nav-left d-flex">
                        <div className="nav-left-logo">
                            <img src="/SMS_Logo.png" width={50} height={50} alt="logo" />
                        </div>
                        <div className="nav-left-text ms-2 d-flex flex-column my-auto">
                            <h5 className='text-green mb-0'>Student Management System</h5>
                            <small>Faculty of Engineering - University of Jaffna</small>
                        </div>
                    </div>
                    <div className="nav-center d-flex my-auto text-green">
                        <CustomLink exact to="/home" label="Home" />
                        <CustomLink exact to="/semesters" label="Semesters" />
                        <CustomLink exact to="/courses" label="Courses" />
                        <CustomLink exact to="/results" label="Results" />
                        <CustomLink exact to="/medical" label="Medical" />
                        {/* <NavLink
                            exact
                            to="/home"
                            className={`nav-center-div p-2 rounded ${selectedItem === 'Home' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('Home')}
                        >
                            <h6 className="my-0 mx-3">Home</h6>
                        </NavLink>
                        <NavLink
                            to="/semesters"
                            className={`nav-center-div p-2 rounded ${selectedItem === 'Semesters' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('Semesters')}
                        >
                            <h6 className="my-0 mx-3">Semesters</h6>
                        </NavLink>
                        <NavLink
                            to="/courses"
                            className={`nav-center-div p-2 rounded ${selectedItem === 'Courses' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('Courses')}
                        >
                            <h6 className="my-0 mx-3">Courses</h6>
                        </NavLink>
                        <NavLink
                            to="/results"
                            className={`nav-center-div p-2 rounded ${selectedItem === 'Results' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('Results')}
                        >
                            <h6 className="my-0 mx-3">Results</h6>
                        </NavLink>
                        <NavLink
                            to="/medical"
                            className={`nav-center-div p-2 rounded ${selectedItem === 'Medical' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('Medical')}
                        >
                            <h6 className="my-0 mx-3">Medical</h6>
                        </NavLink> */}
                    </div>
                    <div className="nav-right d-flex">
                        <a className='my-auto me-4' href="/notification"><FontAwesomeIcon size="xl" icon={faBell} style={{ color: "#009687", }} /></a>
                        <div className='d-flex' type="button" data-bs-toggle="dropdown">
                            <div className="dp-div my-auto">
                                <img src={`https://avatars.githubusercontent.com/u/${photo}`} className='rounded' width={35} height={35} alt="" />
                            </div>
                            <div className="user-name text-green my-auto mx-2">
                                <h6 className='mb-0'>{student}</h6>
                            </div>
                            <FontAwesomeIcon className='my-auto me-2' icon={faChevronDown} style={{ color: "#009687", }} />
                        </div>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="/profile">My Profile</a></li>
                            <li><a class="dropdown-item" href="/login">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

function CustomLink({ label, to, exact }) {
    return (
        <NavLink

            to={to}

            className="nav-center-div p-2 rounded"
        >
            <h6 className="my-0 mx-3">{label}</h6>
        </NavLink>
    );
}

export default Navbar