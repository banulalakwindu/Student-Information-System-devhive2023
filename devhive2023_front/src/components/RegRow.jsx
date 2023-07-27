import React from 'react'
import {courseDetails,preRequest} from '../api/userApi';
import { useState,useEffect } from 'react';
import {courseSem} from '../api/userApi';

const RegRow = ({ code,sem,onChange }) => {
    const [course, setCourse] = useState([]);
    const [preReq, setPreReq] = useState([]);
    const [preReqCourseCodes, setPreReqCourseCodes] = useState([]);
    const [courses, setCourses] = useState([]);
    const hasPrerequisites = preReq && preReq.length > 0;
    const modalId = `MyModal${code}`;
    const [flag, setFlag] = useState(1);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedCourses, setSelectedCourses] = useState([]);

    useEffect(() => {
        courseDetails(code).then((res) => {
            // console.log(res);
            setCourse(res.course);
        });
        preRequest(code).then((res) => {
            console.log(res);
            setPreReq(res.Preresult);
            
        });
       
   

    }, []);

    useEffect(() => {
        // Check if any prerequisite has flag === 1
        const hasFlag = preReq.some((cours) => cours.flag === 0);
        setFlag(hasFlag ? 0 : 1);
      }, [preReq]);   

    const colorClass = () => {
        const semValue = parseInt(sem);
        const core = course[0]?.Core_Technical;
        if(flag === 0){
            return "table-danger";
        }
        if (semValue === course[0]?.Offered_Semester && core === "core") {
          return "table-test";
        } else if (semValue === course[0]?.Offered_Semester && core !== "core") {
          return "table-info";
        } else {
          return "table-warning";
        }
      };

      const handleCheckboxChange = (event) => {
        const newCheckedValue = event.target.checked;
        setIsChecked(newCheckedValue);
        onChange(newCheckedValue);
    
        // If the checkbox is checked, add the course data to selectedCourses state
        if (newCheckedValue) {
          setSelectedCourses((prevSelectedCourses) => [
            ...prevSelectedCourses,
            {
              Course_Code: code,
              Course_Name: course[0]?.Course_Name,
              Credit: course[0]?.Credit,
              academicstaff: course[0]?.academicstaff?.Full_Name,
              // Add other properties as needed from the 'course' state
            },
          ]);
        } else {
          // If the checkbox is unchecked, remove the course data from selectedCourses state
          setSelectedCourses((prevSelectedCourses) =>
            prevSelectedCourses.filter((courseData) => courseData.Course_Code !== code)
          );
        }
      };
    

    console.log("Selected Courses ", selectedCourses);

    
    // console.log("Check ", isChecked);        
 


    if(!course&& !preReq){
        return <div>Loading...</div>
    }
    return (
        <tr className={`table-test ${colorClass()}`}>
            <td>{code}</td>
            <td>{course[0]?.Course_Name}</td>
            <td>{course[0]?.Credit}</td>
            <td>{course[0]?.academicstaff?.Full_Name}</td>
            <td><input type="text" className="form-control form-control-sm" /></td>
            <td >{hasPrerequisites ? (
                    <a
                        data-bs-toggle='modal'
                        data-bs-target={`#${modalId}`}
                        className={`${modalId} cursor`}
                    >
                        View
                    </a>
                ) : "-"}</td>
            <td > <input class="form-check-input mt-2" type="checkbox" disabled={flag === 0}  id="flexCheckDefault" checked={isChecked} onChange={handleCheckboxChange}/></td>
            <td><div className="bg-disabled rounded-circle mx-auto mt-2" style={{ width: '10px', height: '10px' }}></div></td>
             {hasPrerequisites && (
                <td
                    className='modal fade'
                    id={modalId}
                    tabIndex='-1'
                    aria-labelledby='exampleModalLabel'
                    aria-hidden='true'
                >   
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-green" id="exampleModalLabel">Pre-Requests for {code}-{course[0]?.Course_Name}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table">
                                <thead className='table-success'>
                                    <tr>
                                        <th scope="col">Code</th>
                                        <th scope="col">Course</th>
                                        <th scope="col">Latest Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {preReq?.map((cours) => (
                                    <tr className={cours.flag === 1?'table-test':'table-danger'}>                                       
                                        <th>{cours.Course_Code}</th>
                                        <td>{cours.Course_Name}</td>
                                        <td>{cours.Results}</td>
                                        
                                        
                                        {/* <th>EC4040</th>
                                        <td>Data Structure and Algorithoms</td>
                                        <td>B+</td> */}
                                    </tr>
                                ))}
                                    {/* <tr className='table-danger'>

                                        <th>EC4040</th>
                                        <td>Data Structure and Algorithoms</td>
                                        <td>C-</td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">OK</button>
                        </div>
                         </div>
                        </div>
                </td>

            )}
        </tr>


    )
}

export default RegRow