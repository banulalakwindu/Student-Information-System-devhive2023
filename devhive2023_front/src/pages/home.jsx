import React from 'react'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import 'swiper/css/bundle';

const home = () => {
    return (
        <div>
            <Navbar />
            <div className="py-5 home-body text-center container">
                <h2 className='mt-5 pt-5 text-green mt-5'>Welcome to the Student Management System</h2>
                <h5 className='text-secondary'>Faculty of Engineering - University of Jaffna</h5>
                <div className="home-inner-div d-flex mt-5">
                    <div className="img-swiper me-4">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{ delay: 3000 }}
                        >
                            <SwiperSlide>
                                <img src="https://www.eng.jfn.ac.lk/wp-content/uploads/slider/s2.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://www.eng.jfn.ac.lk/wp-content/uploads/slider/s3.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://www.eng.jfn.ac.lk/wp-content/uploads/2017/01/DSC_0873.jpg" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="vision-mission w-100 d-flex flex-column align-items-start">
                        <div className="vision mb-auto shadow">
                            <h3 className='text-white bg-green p-2'>Vision</h3>
                            <p className='mt-2 p-2 mb-0'>The Vision of the Faculty of Engineering is to become a preeminent centre for discernment in Engineering education, research and services nationally and globally.</p>
                        </div>
                        <div className="mission shadow">
                            <h3 className='text-white bg-green p-2'>Mission</h3>
                            <p className='mt-2 p-2 mb-0'>The Mission of the Faculty of Engineering is to foster and promote engineering nationally and globally by producing competent Engineers with social, economic and ethical values, and environmental consciousness, who contribute to sustainable development.</p>
                        </div>
                    </div>
                </div>
                <div className="news-set row g-3 text-start my-5">
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
                <div className='mb-5 d-flex'>
                    <a href='/notification' type="button" class="btn btn-green btn-lg ms-auto">More News
                        <FontAwesomeIcon className='ms-2' icon={faArrowRight} />
                    </a>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default home