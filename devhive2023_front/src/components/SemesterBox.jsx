import React from 'react'

const SemesterBox = ({ text, offer, link }) => {
    const handleClick = () => {
        // window.location.href = `${window.location.origin}/semesters/${link}`;
        window.location.href = `${window.location.origin}/semesters/registration?sem=${link}`;
    };
    return (
        <a onClick={(offer == 1) ? handleClick : 0} className={'SemesterBox text-white d-flex mx-2 rounded ' + ((offer == 1) ? 'bg-green' : 'bg-secondary')} >
            <h5 className='m-auto text-uppercase'>{text}</h5>
        </a>
    )
}

export default SemesterBox