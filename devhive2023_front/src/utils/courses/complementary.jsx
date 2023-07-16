import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CoursesRow from '../../components/CoursesRow';
import ComplementaryData from '../../data/ComplementaryData';

const Complementary = () => {
    const semesters = ComplementaryData;

    return (
        <div>
            <Navbar />
            <div className="mb-5 p-5 registration-body text-center container">
                <h2 className='mt-5 pt-5 text-green'>Complementary Studies</h2>
                <h5 className='text-secondary'>Non - Technical Elective Syllabus</h5>
                <div>
                    {semesters.map((semester, index) => (
                        <div key={index}>
                            <h3 className='mt-5 text-green'>{semester.name}</h3>
                            <div className='registration-inner mt-4 container'>
                                <div className='card'>
                                    <table className="table table-hover m-0">
                                        <thead className='table-success'>
                                            <tr>
                                                <th scope="col">Code</th>
                                                <th scope="col">Course</th>
                                                <th scope="col">Credits</th>
                                                <th scope="col">Pre-Request</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {semester.courses.map((course, index) => (
                                                <CoursesRow key={index} {...course} />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Complementary
