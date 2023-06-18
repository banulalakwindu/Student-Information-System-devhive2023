import React from 'react'
import Navbar from '../components/Navbar'
import ResultBar from '../components/ResultBar'

const Results = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className="semester-body text-center container">
                    <h2 className='text-green mt-5'>Results</h2>
                    <h5 className='text-secondary'>Select the Semester for view Results</h5>
                    <div className="semester-inner-div d-flex flex-column mt-4">
                        <ResultBar semester="01" completed="1" link="sem01" />
                        <ResultBar semester="02" completed="1" link="sem02" />
                        <ResultBar semester="03" completed="1" link="sem03" />
                        <ResultBar semester="04" completed="1" link="sem04" />
                        <ResultBar semester="05" completed="1" link="sem05" />
                        <ResultBar semester="06" completed="0" link="sem06" />
                        <ResultBar semester="07" completed="0" link="sem07" />
                        <ResultBar semester="08" completed="0" link="sem08" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results