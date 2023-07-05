import React from 'react'
import Navbar from '../components/Navbar'
import SemesterBox from '../components/SemesterBox'
import Footer from '../components/Footer'

const semesters = () => {
    return (
        <div>
            <Navbar />
            <div className="py-5 semester-body text-center container">
                <h2 className='mt-5 pt-5 text-green mt-5'>Semesters</h2>
                <h5 className='text-secondary'>Select the Semester for Registration</h5>
                <div className="semester-inner-div d-flex flex-column mt-4">
                    <div className="semester-set my-2 d-flex justify-content-center">
                        <SemesterBox link="sem01" offer="0" text='Semester 01' />
                        <SemesterBox link="soft01" offer="0" text='Soft Skill I' />
                        <SemesterBox link="sem02" offer="0" text='Semester 02' />
                        <SemesterBox link="sem03" offer="1" text='Semester 03' />
                        <SemesterBox link="sem04" offer="1" text='Semester 04' />
                    </div>
                    <div className="semester-set my-2 d-flex justify-content-center">
                        <SemesterBox link="sem05" offer="0" text='Semester 05' />
                        <SemesterBox link="sem05ext" offer="0" text='5th Extended Semester' />
                        <SemesterBox link="sem06" offer="1" text='Semester 06' />
                        <SemesterBox link="sem07" offer="0" text='Semester 07' />
                        <SemesterBox link="sem08" offer="0" text='Semester 08' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default semesters