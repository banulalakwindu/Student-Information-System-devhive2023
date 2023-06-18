import React from 'react'
import Navbar from '../components/Navbar'

const Medical = () => {
    return (
        <div>
            <Navbar />
            <div className='d-flex flex-column'>
                <h2 className='text-green mt-5 mx-auto'>Upload Your Medical Report</h2>
                <div className='d-flex flex-column mt-5'>
                    <label for="formFile" class="drop-container w-50 mx-auto">
                        <span class="drop-title">Drop files here</span>
                        or
                        <input class="form-control" type="file" id="formFile" />
                    </label>
                    <button type="submit" className='mt-5 mx-auto w-25 btn btn-green'> Upload </button>
                </div>
            </div>
        </div>
    )
}

export default Medical