import React from 'react'
import { BsFillCheckCircleFill, BsPencilFill, BsClockFill } from "react-icons/bs";


const SemesterBox = ({ text, offer, link, completed }) => {
    return (
        <a href={(offer == 1) ? `/semesters/registration?sem=${link}` : "#"} style={{ width: "200px", height: "200px" }} className={'d-flex flex-column mx-2 rounded zoom ' + ((offer == 1) ? 'btn-light-cus' : ((completed == 1) ? 'btn-light-cus completed-sem' : 'bg-disabled'))} >
            <h5 className='m-auto text-uppercase'>{text}</h5>
            {(completed == 1) ? (
                <div className='d-flex flex-column'>
                    <BsFillCheckCircleFill className='mx-auto mb-auto' />
                    <small className='m-auto mb-2'>Click to View</small>
                </div>
            ) : (
                (offer == 1) ? (
                    <div className='d-flex flex-column'>
                        <BsPencilFill className='mx-auto mb-auto' />
                        <small className='m-auto mb-2'>Click to Register</small>
                    </div>
                ) : (
                    <div className='d-flex flex-column'>
                        <BsClockFill className='mx-auto mb-auto' />
                        <small className='m-auto mb-2'>Wait until Semester Open</small>
                    </div>
                ))
            }
        </a >
    )
}

export default SemesterBox