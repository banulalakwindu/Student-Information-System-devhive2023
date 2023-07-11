import React from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'


const Profile = () => {

    return (
        <div>
            <Navbar />
            <div className='profile-inner container px-5 py-5 my-5'>
                <div className='d-flex flex-column bg-lightgreen card my-5'>
                    <div className='d-flex flex-column p-3'>
                        <h3 className='text-center rounded py-2 bg-green text-white'>Banula Lakwindu's Profile</h3>
                        <div className='d-flex w-100 p-3'>
                            <div className='prof-img me-5'>
                                <img className='rounded-5' src='/public/profile.jpg' width={250} height={250} alt='profile' />
                            </div>
                            <div className='d-flex flex-column w-100'>
                                <div className='d-flex justify-content-between'>
                                    <p className='bg-white rounded p-2 fw-semibold' style={{ width: "400px" }}>Registration Number :- <span className='fw-normal fst-italic'>2019/E/023</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold' style={{ width: "400px" }}>NIC :- <span className='fw-normal fst-italic'>200000504670</span></p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='bg-white rounded p-2 fw-semibold' style={{ width: "400px" }}>Email (University) :- <span className='fw-normal fst-italic'>2019e023@eng.jfn.ac.lk</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold' style={{ width: "400px" }}>Degree :- <span className='fw-normal fst-italic'>Bsc. Engineering</span></p>
                                </div>
                                <p className='bg-white rounded p-2 fw-semibold w-100'>Name with Initials :- <span className='fw-normal fst-italic'>CHANDRASIRIR H.V.B.L.</span></p>
                                <p className='bg-white rounded p-2 fw-semibold w-100'>Full Name :- <span className='fw-normal fst-italic'>HIRILIYEDDA VIDANALAGE BANULA LAKWINDU CHANDRASIRI</span></p>
                                <div className='d-flex justify-content-between'>
                                    <p className='bg-white rounded p-2 fw-semibold' style={{ width: "200px" }}>Gender :- <span className='fw-normal fst-italic'>Male</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold' style={{ width: "200px" }}>Status :- <span className='fw-normal fst-italic'>Mr</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold' style={{ width: "400px" }}>Department :- <span className='fw-normal fst-italic'>Computer Engineering</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div style={{ width: "570px" }}>
                                <h3 className='text-center rounded py-2 bg-green text-white'>Emergency Contact Deatils</h3>
                                <div className='p-3'>
                                    <p className='bg-white rounded p-2 fw-semibold'>Emergency Contact Name :-<span className='ms-2 fw-normal fst-italic'>H.V.Chandrasiri</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Relationship to the Student :-<span className='ms-2 fw-normal fst-italic'>Father</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Emergency Phone Number :-<span className='ms-2 fw-normal fst-italic'>0716101341</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Emergency Address :-<span className='ms-2 fw-normal fst-italic'>104/2/B, Pitakumbura Rd, Gonakumbura, Ratnapura</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>*Emergency Email :-<span className='ms-2 fw-normal fst-italic'>chandrasirihv@gmail.com</span></p>
                                </div>
                            </div>
                            <div style={{ width: "570px" }}>
                                <h3 className='text-center rounded py-2 bg-green text-white'>Private Details</h3>
                                <div className='p-3'>
                                    <p className='bg-white rounded p-2 fw-semibold'>Email Address (Personal) :-<span className='ms-2 fw-normal fst-italic'>banulalakwindu10@gmail.com</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Mobile Number :-<span className='ms-2 fw-normal fst-italic'>0702686990</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Home Number :-<span className='ms-2 fw-normal fst-italic'>0452222966</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Permanent Address :-<span className='ms-2 fw-normal fst-italic'>104/2/B, Pitakumbura Rd, Gonakumbura, Ratnapura</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Temporary Address :-<span className='ms-2 fw-normal fst-italic'>104/2/B, Pitakumbura Rd, Gonakumbura, Ratnapura</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div style={{ width: "570px" }}>
                                <h3 className='text-center rounded py-2 bg-green text-white'>University Selection Details</h3>
                                <div className='p-3'>
                                    <p className='bg-white rounded p-2 fw-semibold'>Registration Date :-<span className='ms-2 fw-normal fst-italic'>H.V.Chandrasiri</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>A/L Index Number :-<span className='ms-2 fw-normal fst-italic'>Father</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Applied Year :-<span className='ms-2 fw-normal fst-italic'>0716101341</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Medium :-<span className='ms-2 fw-normal fst-italic'>104/2/B, Pitakumbura Rd, Gonakumbura, Ratnapura</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Z-score :-<span className='ms-2 fw-normal fst-italic'>chandrasirihv@gmail.com</span></p>
                                </div>
                            </div>
                            <div style={{ width: "570px" }}>
                                <h3 className='text-center rounded py-2 bg-green text-white'>Statistical Details</h3>
                                <div className='p-3'>
                                    <p className='bg-white rounded p-2 fw-semibold'>Race :-<span className='ms-2 fw-normal fst-italic'>Sinhala</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Religion :-<span className='ms-2 fw-normal fst-italic'>Buddhism</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Foreign :-<span className='ms-2 fw-normal fst-italic'>Sri Lanka</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Nationality :-<span className='ms-2 fw-normal fst-italic'>Sri Lanka</span></p>
                                    <p className='bg-white rounded p-2 fw-semibold'>Citizenship :-<span className='ms-2 fw-normal fst-italic'>Yes</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex my-3'>
                    <a data-bs-toggle="modal" data-bs-target="#dName" style={{ width: "250px" }} className='btn btn-green d-flex me-5'>
                        <p className='m-0 me-2'>CLICK HERE TO EDIT YOUR DISPLAY NAME</p>
                        <FontAwesomeIcon className='my-auto' size="xl" icon={faPenToSquare} />
                    </a>
                    <a data-bs-toggle="modal" data-bs-target="#pswd" style={{ width: "250px" }} className='btn btn-green d-flex me-5'>
                        <p className='m-0 me-2'>CLICK HERE TO EDIT YOUR PASSWORD</p>
                        <FontAwesomeIcon className='my-auto' size="xl" icon={faPenToSquare} />
                    </a>
                </div>
            </div>
            <div class="modal fade" id="dName" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header d-flex">
                            <h1 class="modal-title fs-5 text-green" id="exampleModalLabel">Change Display Name</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3 d-flex flex-column">
                                <label for="name" class="form-label text-center">Enter Your New Name</label>
                                <input type="text" class="form-control" id="name" />
                            </div>
                            <div class="mb-3 d-flex flex-column">
                                <label for="password1" class="form-label text-center">Enter Your Password</label>
                                <input type="text" class="form-control" id="password1" />
                            </div>
                            <div class="mb-3 d-flex flex-column">
                                <label for="password2" class="form-label text-center">Confirm Your Password</label>
                                <input type="text" class="form-control" id="password2" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-green mx-auto" data-bs-dismiss="modal">Change Display Name</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="pswd" tabindex="-1" aria-labelledby="pswdlabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header d-flex">
                            <h1 class="modal-title fs-5 text-green" id="pswdlabel">Change Your Password</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3 d-flex flex-column">
                                <label for="name" class="form-label text-center">Enter Old Password</label>
                                <input type="text" class="form-control" id="name" />
                            </div>
                            <div class="mb-3 d-flex flex-column">
                                <label for="password1" class="form-label text-center">Enter New Password</label>
                                <input type="text" class="form-control" id="password1" />
                            </div>
                            <div class="mb-3 d-flex flex-column">
                                <label for="password2" class="form-label text-center">Confirm New Password</label>
                                <input type="text" class="form-control" id="password2" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-green mx-auto" data-bs-dismiss="modal">Change Password</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile