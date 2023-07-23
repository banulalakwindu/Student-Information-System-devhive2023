import React from 'react'
import Navbar from '../components/Navbar'
import ResultBar from '../components/ResultBar'
import Footer from '../components/Footer'
//import {getSemestersWithResults } from '../api/userApi';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Results = () => {
    const [semestersWithResults, setSemestersWithResults] = useState([]);

  useEffect(() => {
    fetchSemestersWithResults();
  }, []);

  const fetchSemestersWithResults = async () => {
    try {
      const response = await axios.get('/user/results');
       setSemestersWithResults(response.data.semestersWithResults); 
    } catch (error) {
        console.log(error);
    }

      //setSemestersWithResults(response.semesters);
      //console.log(response.message);
  };

    return (
        <div>
            <div>
                <Navbar />
                <div className="py-5 semester-body text-center container">
                    <h2 className='mt-5 pt-5 text-green mt-5'>Results</h2>
                    <h5 className='text-secondary'>Select the Semester for view Results</h5>
                    <div className="semester-inner-div d-flex flex-column mt-4">
                        {semestersWithResults.map((semester) => (
                            <ResultBar key={semestersWithResults} semester={semestersWithResults.Offered_Semester} completed="1" link={`sem${semestersWithResults.Offered_Semester}`} />
                        ))}
                        {/* <ResultBar semester="01" completed="1" link="sem01" />
                        <ResultBar semester="02" completed="1" link="sem02" />
                        <ResultBar semester="03" completed="1" link="sem03" />
                        <ResultBar semester="04" completed="1" link="sem04" />
                        <ResultBar semester="05" completed="1" link="sem05" />
                        <ResultBar semester="06" completed="0" link="sem06" />
                        <ResultBar semester="07" completed="0" link="sem07" />
                        <ResultBar semester="08" completed="0" link="sem08" /> */}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Results