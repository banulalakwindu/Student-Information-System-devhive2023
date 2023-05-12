import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div>
            <div className='navbarMy d-flex justify-content-between'>
                <div className='topics d-flex'>
                    <div className='logo-set ms-5 d-flex text-white align-items-center'>
                        <img className='logo me-2' src="/Logo-Color.png" />
                        <div className='d-flex flex-column'>
                            <h5 className='m-0'>Student Management System</h5>
                            <p className='m-0'>Faculty of Engineering - University of Jaffna</p>
                        </div>
                    </div>
                    <div className="topic-set d-flex align-content-center ms-3 text-white">
                        <a className='p-3 px-4' href="#">Home</a>
                        <a className='p-3 px-4' href="">Semesters</a>
                        <a className='p-3 px-4' href="">Course</a>
                        <a className='p-3 px-4' href="">Results</a>
                        <a className='p-3 px-4' href="">Medicals</a>
                    </div>
                </div>
                <div className='nav-user me-5 d-flex text-white align-content-center'>
                    <div className='d-flex flex-column my-auto'>
                        <h5 className='m-0 ms-auto'> Banula Lakwindu</h5>
                        <h6 className='m-0'>2019e023@eng.jfn.ac.lk</h6>
                    </div>
                    <img type="button" data-bs-toggle="dropdown" aria-expanded="false" className='profile-img ms-2 my-auto' src="/profile.png" />
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="#"><FontAwesomeIcon className='me-2' icon={faCircleUser} />Profile</a></li>
                        <li><a class="dropdown-item" href="#"><FontAwesomeIcon className='me-2' icon={faRightFromBracket} />Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar