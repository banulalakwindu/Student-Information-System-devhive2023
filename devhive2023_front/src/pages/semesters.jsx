import React from 'react'
import Navbar from '../components/Navbar'
import SemesterBox from '../components/SemesterBox'
import Footer from '../components/Footer'
import {register} from '../api/userApi';
import { useState,useEffect } from 'react';


const semesters = () => {
    const [offerSemester, setOfferSemester] = useState([]);
    const [currentSemester, setCurrentSemester] = useState(0);

    useEffect(() => {
        register().then((res) => {
            console.log(res.semesters);
            console.log(res.currentSemester);
            setOfferSemester(res.semesters);
            setCurrentSemester(res.currentSemester);
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="py-5 semester-body text-center container">
                <h2 className='mt-5 pt-5 text-green mt-5'>Semesters</h2>
                <h5 className='text-secondary'>Select the Semester for Registration</h5>
                <div className="semester-inner-div d-flex flex-column mt-4">
                    <div className="semester-set my-2 d-flex justify-content-center">
                        <SemesterBox link="sem01" offer={offerSemester.includes(1)&&currentSemester === 1 ? '1' : '0'} text="Semester 01" />
                        <SemesterBox link="soft01" offer={offerSemester.includes(1)&&currentSemester === 10 ? '1' : '0'}  text="Soft Skill I" />
                        <SemesterBox link="sem02" offer={offerSemester.includes(2)&&currentSemester === 2 ? '1' : '0'} text="Semester 02" />
                        <SemesterBox link="sem03" offer={offerSemester.includes(3)&&currentSemester === 3 ? '1' : '0'} text="Semester 03" />
                        <SemesterBox link="sem04" offer={offerSemester.includes(4)&&currentSemester === 4 ? '1' : '0'} text="Semester 04" />
                    </div>
                    <div className="semester-set my-2 d-flex justify-content-center">
                        <SemesterBox link="sem05" offer={offerSemester.includes(5)&&currentSemester === 5 ? '1' : '0'} text="Semester 05" />
                        <SemesterBox link="sem05ext" offer={offerSemester.includes(9)&&currentSemester === 9 ? '1' : '0'} text="5th Extended Semester" />
                        <SemesterBox link="sem06" offer={offerSemester.includes(6)&&currentSemester === 6 ? '1' : '0'} text="Semester 06" />
                        <SemesterBox link="sem07" offer={offerSemester.includes(7)&&currentSemester === 7 ? '1' : '0'} text="Semester 07" />
                        <SemesterBox link="sem08" offer={offerSemester.includes(8)&&currentSemester === 8 ? '1' : '0'} text="Semester 08" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default semesters