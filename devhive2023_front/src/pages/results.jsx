import React from 'react'
import Navbar from '../components/Navbar'
import ResultBar from '../components/ResultBar'
import Footer from '../components/Footer'
//import {getSemestersWithResults } from '../api/userApi';
import { useState, useEffect } from 'react';
import { getSemestersWithResults } from '../api/userApi';
const Results = () => {

  const [currentSemester, setCurrentSemester] = useState(0);

  useEffect(() => {
    fetchSemestersWithResults();
  }, []);

  const fetchSemestersWithResults = async () => {
    try {
      const response = await getSemestersWithResults();
      console.log(response.currentSemester);
      setCurrentSemester(response.currentSemester);
    } catch (error) {
      console.log(error);
    }
  };

  const isSemesterCompleted = (semester) => {
    if (semester === 'gess') {
      return currentSemester >= 6 ? '1' : '0';
    }
    return semester < currentSemester ? '1' : '0';
  };


  return (
    <div>
      <div>
        <Navbar />
        <div className="py-5 mb-5 semester-body text-center container">
          <h2 className='mt-5 pt-5 text-green mt-5'>Results</h2>
          <h5 className='text-secondary'>Select the Semester for view Results</h5>
          <div className="semester-inner-div d-flex flex-column mt-4">
            {[1, 2, 3, 4, 5, 'gess', 6, 7, 8].map((semester) => (
              <ResultBar
                key={semester}
                semester={semester === 'gess' ? '(Soft_Skill 1)' : semester < 10 ? `0${semester}` : `${semester}`}
                completed={isSemesterCompleted(semester)}
                link={`${semester === 'gess' ? '9' : semester < 10 ? `${semester}` : `${semester}`}`}
              />
            ))}
            {/* <ResultBar semester="01" completed="1" link="sem01" />
                        <ResultBar semester="(Soft_Skill 1)" completed="1" link="Soft_Skill_1" />
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