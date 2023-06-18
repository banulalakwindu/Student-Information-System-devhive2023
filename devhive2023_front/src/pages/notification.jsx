import React from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

const Notification = () => {
    return (
        <div>
            <Navbar />
            <div className='container d-flex flex-column'>
                <h2 className='text-green mt-5 mx-auto'>News</h2>
                <div className="news-set row g-3 text-start my-3">
                    <div className="news col-4">
                        <div className='border shadow rounded p-4'>
                            <div className='d-flex justify-content-between' >
                                <FontAwesomeIcon icon={faNewspaper} size="xl" style={{ color: "#009687", }} />
                                <button className='btn btn-outline-secondary'>See more</button>
                            </div>
                            <h4 className='text-green mt-1'>Exam Results</h4>
                            <p className='mt-3 m-0'>Semester 3 results has been released. Check result sheets.</p>
                        </div>
                    </div>
                    <div className="news col-4">
                        <div className='border shadow rounded p-4'>
                            <div className='d-flex justify-content-between' >
                                <FontAwesomeIcon icon={faNewspaper} size="xl" style={{ color: "#009687", }} />
                                <button className='btn btn-outline-secondary'>See more</button>
                            </div>
                            <h4 className='text-green mt-1'>Exam Results</h4>
                            <p className='mt-3 m-0'>Semester 3 results has been released. Check result sheets.</p>
                        </div>
                    </div>
                    <div className="news col-4">
                        <div className='border shadow rounded p-4'>
                            <div className='d-flex justify-content-between' >
                                <FontAwesomeIcon icon={faNewspaper} size="xl" style={{ color: "#009687", }} />
                                <button className='btn btn-outline-secondary'>See more</button>
                            </div>
                            <h4 className='text-green mt-1'>Exam Results</h4>
                            <p className='mt-3 m-0'>Semester 3 results has been released. Check result sheets.</p>
                        </div>
                    </div>
                </div>
                <div className="news-set row g-3 text-start my-3">
                    <div className="news col-4">
                        <div className='border shadow rounded p-4'>
                            <div className='d-flex justify-content-between' >
                                <FontAwesomeIcon icon={faNewspaper} size="xl" style={{ color: "#009687", }} />
                                <button className='btn btn-outline-secondary'>See more</button>
                            </div>
                            <h4 className='text-green mt-1'>Exam Results</h4>
                            <p className='mt-3 m-0'>Semester 3 results has been released. Check result sheets.</p>
                        </div>
                    </div>
                    <div className="news col-4">
                        <div className='border shadow rounded p-4'>
                            <div className='d-flex justify-content-between' >
                                <FontAwesomeIcon icon={faNewspaper} size="xl" style={{ color: "#009687", }} />
                                <button className='btn btn-outline-secondary'>See more</button>
                            </div>
                            <h4 className='text-green mt-1'>Exam Results</h4>
                            <p className='mt-3 m-0'>Semester 3 results has been released. Check result sheets.</p>
                        </div>
                    </div>
                    <div className="news col-4">
                        <div className='border shadow rounded p-4'>
                            <div className='d-flex justify-content-between' >
                                <FontAwesomeIcon icon={faNewspaper} size="xl" style={{ color: "#009687", }} />
                                <button className='btn btn-outline-secondary'>See more</button>
                            </div>
                            <h4 className='text-green mt-1'>Exam Results</h4>
                            <p className='mt-3 m-0'>Semester 3 results has been released. Check result sheets.</p>
                        </div>
                    </div>
                </div>
                <div className="news-set row g-3 text-start my-3">
                    <div className="news col-4">
                        <div className='border shadow rounded p-4'>
                            <div className='d-flex justify-content-between' >
                                <FontAwesomeIcon icon={faNewspaper} size="xl" style={{ color: "#009687", }} />
                                <button className='btn btn-outline-secondary'>See more</button>
                            </div>
                            <h4 className='text-green mt-1'>Exam Results</h4>
                            <p className='mt-3 m-0'>Semester 3 results has been released. Check result sheets.</p>
                        </div>
                    </div>
                    <div className="news col-4">
                        <div className='border shadow rounded p-4'>
                            <div className='d-flex justify-content-between' >
                                <FontAwesomeIcon icon={faNewspaper} size="xl" style={{ color: "#009687", }} />
                                <button className='btn btn-outline-secondary'>See more</button>
                            </div>
                            <h4 className='text-green mt-1'>Exam Results</h4>
                            <p className='mt-3 m-0'>Semester 3 results has been released. Check result sheets.</p>
                        </div>
                    </div>
                    <div className="news col-4">
                        <div className='border shadow rounded p-4'>
                            <div className='d-flex justify-content-between' >
                                <FontAwesomeIcon icon={faNewspaper} size="xl" style={{ color: "#009687", }} />
                                <button className='btn btn-outline-secondary'>See more</button>
                            </div>
                            <h4 className='text-green mt-1'>Exam Results</h4>
                            <p className='mt-3 m-0'>Semester 3 results has been released. Check result sheets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification