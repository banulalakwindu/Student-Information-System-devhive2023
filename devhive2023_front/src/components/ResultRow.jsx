import React from 'react'
import {getResults} from '../api/userApi'
import { useState, useEffect } from 'react';



const ResultRow = ({ code, color }) => {
    const [results, setResults] = useState([]); // Initialize state as null

    useEffect(() => {
      const fetchResults = async () => {
        try {
          const response = await getResults(code);
          console.log(response);
          setResults(response.results); // Set the entire response as the state
        } catch (error) {
          console.error('Error fetching results:', error);
        }
      };
  
      fetchResults();
    }, [code]);
  
    // if (!results) {
    //   // If results are not available yet, you can show a loading state or return null
    //   return <tr>Loading...</tr>;
    // }
    return (
        <>
        {results.map((result) => (
          <tr key={result.id} className={`table-${color} table-test`}>
            <td>{code}</td>
            <td>{result.Course_Name}</td>
            <td>{result.Credit}</td>
            <td>{result.studentacademic[0].Attempt}</td>
            <td>{result.studentacademic[0].Results}</td>
          </tr>
        ))}
      </>
    );
  };

export default ResultRow