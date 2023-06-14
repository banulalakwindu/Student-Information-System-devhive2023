import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'
import RegColumn from '../components/RegColumn';

const Registration = () => {
    const location = useLocation();
    const semester = new URLSearchParams(location.search).get('sem');
    return (
        <div>
            <Navbar />
            <div className="registration-body text-center container">
                <h2 className='text-green mt-5'>Semester 01 - Registration</h2>
                <div className='registration-inner mt-4'>
                    <table class="table table-hover">
                        <thead className='table-success'>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Course</th>
                                <th scope="col">Credits</th>
                                <th scope="col">Coordinator</th>
                                <th scope="col">Attempt</th>
                                <th scope="col">Pre-Request</th>
                                <th scope="col">Select</th>
                                <th scope="col">Approved</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RegColumn code="EC6060" />
                            <RegColumn code="EC6060" />
                            <RegColumn code="EC6060" />
                            <RegColumn code="EC6060" />
                            <RegColumn code="EC6060" />
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Registration