import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

const Medical = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div className='pt-5 d-flex flex-column'>
                <h2 data-testid='heading' className='mt-5 pt-5 text-green mt-5 mx-auto'>Upload Your Medical Report</h2>
                <div className='d-flex flex-column mt-5'>
                    <label for="formFile" class="drop-container w-50 mx-auto">
                        <span class="drop-title">Drop files here</span>
                        or
                        <input class="form-control" type="file" id="formFile" />
                    </label>
                    <button type="submit" className='mt-5 mx-auto w-25 btn btn-green'> Upload </button>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Medical