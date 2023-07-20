import React from 'react'

const ResultRow = ({ code, color }) => {
    return (
        <tr className={`table-${color} table-test`}>
            <td>{code}</td>
            <td>Software Engineering</td>
            <td>3</td>
            <td>1</td>
            <td>B+</td>
        </tr>
    )
}

export default ResultRow