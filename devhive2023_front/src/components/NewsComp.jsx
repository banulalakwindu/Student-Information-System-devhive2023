import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'

const NewsComp = ({ id, name, short }) => {
    return (

        <div className="news col-4">
            <div className='border shadow rounded p-4'>
                <div className='d-flex justify-content-between' >
                    <FontAwesomeIcon icon={faNewspaper} size="xl" style={{ color: "#009687", }} />
                    <a href={`/news?news=${id}`} className='btn btn-outline-secondary'>See more</a>
                </div>
                <h4 className='text-green mt-1'>{name}</h4>
                <p className='mt-3 m-0'>{short}</p>
            </div>
        </div>

    )
}

export default NewsComp