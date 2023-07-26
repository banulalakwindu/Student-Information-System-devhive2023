import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'
import ResultRow from '../components/ResultRow';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { regCourseInSemester } from '../api/userApi';

const Viewresults = () => {
    const location = useLocation();
    const semester = new URLSearchParams(location.search).get('sem');

    const [Course,setCourse] = useState([]);
    const results = [];

    useEffect(() => {
        fetchCourses();
        setResults();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await regCourseInSemester(semester);
            console.log(response);
            setCourse(response.courseCodes);
        } catch (error) {
            console.log(error);
        }
    };

    



    const setResults = () => {
        Course.map((cours) => (
            results.push(cours.studentacademic[0].Results)
        ))
    };
    console.log(results);

   
 






    return (
        <div>
            <Navbar />
            <div className="pt-5 registration-body text-center container">
                <h2 className='mt-5 pt-5 text-green mt-5'>{`Semester ${semester}`}</h2>
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
                            {Array.isArray(Course) ? (
                                Course.map((cours) => (
                                    <ResultRow key={cours.Course_Code} code={cours.Course_Code} color={cours.Core_Technical === 'Core' ? 'light' : 'info'} />
                                ))
                                ) : (
                                // Handle the case when Co is not an array or is empty
                                <p>No courses to display</p>
                                )}                          
                            {/* <ResultRow code={courses.Course_Code} color = "light"/>
                                <ResultRow code="EC6060" color = "light"/>
                                <ResultRow code="EC6060" color = "warning"/>
                                <ResultRow code="EC6060" color = "light"/>
                                <ResultRow code="EC6060" color = "light"/>
                                <ResultRow code="EC6060" color = "info"/> */}
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