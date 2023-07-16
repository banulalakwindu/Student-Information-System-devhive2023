import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'
import ResultRow from '../components/ResultRow';
import Footer from '../components/Footer';

const Viewresults = () => {
    const location = useLocation();
    const semester = new URLSearchParams(location.search).get('sem');
    return (
        <div>
            <Navbar />
            <div className="pt-5 registration-body text-center container">
                <h2 className='mt-5 pt-5 text-green mt-5'>Semester 01 - Results</h2>
                <div className='registration-inner mt-4 container'>
                    <div className='d-flex'>
                        <div className='d-flex me-5'>
                            <div style={{ width: '20px', height: '20px' }} className='border border-secondary me-2 rounded'></div>
                            <p>Core Subject</p>
                        </div>
                        <div className='d-flex me-5'>
                            <div style={{ width: '20px', height: '20px', background: '#9EEAF9' }} className='border border-secondary me-2 rounded'></div>
                            <p>Elective Subject</p>
                        </div>
                        <div className='d-flex me-5'>
                            <div style={{ width: '20px', height: '20px', background: '#FFF3CD' }} className='border border-secondary me-2 rounded'></div>
                            <p>Re-attempt Subject</p>
                        </div>
                    </div>
                    <div className='card'>
                        <table class="table table-hover m-0">
                            <thead className='table-success'>
                                <tr>
                                    <th scope="col">Code</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Credits</th>
                                    <th scope="col">Attempt</th>
                                    <th scope="col">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ResultRow code="EC6060" />
                                <ResultRow code="EC6060" />
                                <ResultRow code="EC6060" />
                                <ResultRow code="EC6060" />
                                <ResultRow code="EC6060" />
                                <ResultRow code="EC6060" />
                            </tbody>
                        </table>
                    </div>
                    <div className='d-flex justify-content-between mt-4'>
                        <div className='d-flex'>
                            <h6 style={{ width: "370px" }} className='m-0 mt-1'>Total Credits Completed for this semester : </h6>
                            <input style={{ maxWidth: "50px" }} type="text" className="form-control form-control-sm" value="24" readonly />
                        </div>
                        <div className='d-flex'>
                            <h6 style={{ width: "140px" }} className='m-0 mt-1'>GPA(Current) :</h6>
                            <input style={{ maxWidth: "50px" }} type="text" className="form-control form-control-sm" value="2.96" readonly />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Viewresults