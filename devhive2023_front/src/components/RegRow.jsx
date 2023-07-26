import React from 'react'
import {courseDetails,preRequest} from '../api/userApi';
import { useState,useEffect } from 'react';

const RegRow = ({ code }) => {
    const [course, setCourse] = useState([]);
    const [preReq, setPreReq] = useState([]);

    useEffect(() => {
        courseDetails(code).then((res) => {
            console.log(res.course);
            setCourse(res.course);
        });
        preRequest(code).then((res) => {
            console.log(res);
            // setPreReq(res.preReq);
        });

    }, []);

    if(!course){
        return <div>Loading...</div>
    }
    return (
        <tr className='table-test'>
            <td>{code}</td>
            <td>{course[0]?.Course_Name}</td>
            <td>{course[0]?.Credit}</td>
            <td>{course[0]?.academicstaff?.Full_Name}</td>
            <td><input type="text" className="form-control form-control-sm" /></td>
            <td><a data-bs-toggle="modal" data-bs-target="#exampleModal" className='cursor'>
                View
            </a></td>
            <td><input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" /></td>
            <td><div className="bg-green rounded-circle mx-auto mt-2" style={{ width: '10px', height: '10px' }}></div></td>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-green" id="exampleModalLabel">Pre-Requests for EC6060-Software Engineering</h1>
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
                                    <tr>
                                        <th>EC4040</th>
                                        <td>Data Structure and Algorithoms</td>
                                        <td>B+</td>
                                    </tr>
                                    <tr className='table-danger'>
                                        <th>EC4040</th>
                                        <td>Data Structure and Algorithoms</td>
                                        <td>C-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </tr>


    )
}

export default RegRow