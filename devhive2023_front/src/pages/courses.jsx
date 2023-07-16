import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const courses = () => {
    return (
        <div>
            <Navbar />
            <div className="py-5 semester-body text-center container mb-5">
                <h2 className='text-green pt-5 mt-5'>Courses</h2>
                <h5 className='text-secondary'>Select to see more details about courses</h5>
                <div className="semester-inner-div d-flex flex-column mt-4">
                    <div className="zoom my-2 d-flex justify-content-center btn-light-cus rounded" style={{ height: "180px" }}><h5 className='m-auto text-uppercase'>General Program of the Degree Program</h5></div>
                    <div className="d-flex my-2 justify-content-between">
                        <div className="zoom me-2 d-flex justify-content-center btn-light-cus rounded" style={{ width: "300px", height: "180px" }} ><h5 className='my-auto mx-2 py-2 text-uppercase'>Specialization in Civil and Environmental Engineering</h5></div>
                        <div className="zoom mx-2 d-flex justify-content-center btn-light-cus rounded" style={{ width: "300px", height: "180px" }} ><h5 className='my-auto mx-2 text-uppercase'>Specialization in Computer Engineering</h5></div>
                        <div className="zoom mx-2 d-flex justify-content-center btn-light-cus rounded" style={{ width: "300px", height: "180px" }} ><h5 className='my-auto mx-2 text-uppercase'>Specialization in Electrical and Electronic Engineering</h5></div>
                        <div className="zoom ms-2 d-flex justify-content-center btn-light-cus rounded" style={{ width: "300px", height: "180px" }} ><h5 className='my-auto mx-2 text-uppercase'>Specialization in Mechanical and Process Engineering</h5></div>
                    </div>
                    <div className="zoom my-2 d-flex justify-content-center btn-light-cus rounded" style={{ height: "180px" }}><h5 className='m-auto text-uppercase'>Complementary Studies</h5></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default courses