import React from 'react'

const ResultBar = ({ semester, completed, link }) => {
    return (
        <a href={(completed == 1) ? `/results/viewresults?sem=${link}` : "#"} className={'resultbar my-1 mx-auto w-50 p-2 rounded-4 ' + ((completed == 1) ? 'btn-light-cus zoom' : 'bg-disabled')} >
            <h5 className='m-1'>Semester {semester}</h5>
        </a >
    )
}

export default ResultBar