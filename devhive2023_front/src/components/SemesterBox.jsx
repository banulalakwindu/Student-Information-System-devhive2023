import React from 'react'

const SemesterBox = ({ text, offer, link }) => {
    return (
        <a href={(offer == 1) ? `/semesters/registration?sem=${link}` : "#"} style={{ width: "200px", height: "200px" }} className={'text-white d-flex mx-2 rounded ' + ((offer == 1) ? 'bg-green zoom' : 'bg-disabled')} >
            <h5 className='m-auto text-uppercase'>{text}</h5>
        </a>
    )
}

export default SemesterBox