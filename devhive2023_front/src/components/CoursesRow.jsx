import React from 'react'


const CoursesRow = ({ code, course, credits, pre }) => {
    const hasPrerequisites = pre && pre.length > 0;
    const modalId = `MyModal${code}`;

    return (
        <tr className='table-test'>
            <td className='text-start'>{code}</td>
            <td className='text-start'>{course}</td>
            <td>{credits}</td>
            <td>
                {hasPrerequisites ? (
                    <a
                        data-bs-toggle='modal'
                        data-bs-target={`#${modalId}`}
                        className={`${modalId} cursor`}
                    >
                        View
                    </a>
                ) : "-"}
            </td>

            {hasPrerequisites && (
                <td
                    className='modal fade'
                    id={modalId}
                    tabIndex='-1'
                    aria-labelledby='exampleModalLabel'
                    aria-hidden='true'
                >
                    <div className='modal-dialog modal-lg modal-dialog-centered'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h1
                                    className='modal-title fs-5 text-green'
                                    id='exampleModalLabel'
                                >
                                    Pre-Requests for {code}-{course}
                                </h1>
                                <button
                                    type='button'
                                    className='btn-close'
                                    data-bs-dismiss='modal'
                                    aria-label='Close'
                                ></button>
                            </div>
                            <div className='modal-body'>
                                <table className='table'>
                                    <thead className='table-success'>
                                        <tr>
                                            <th scope='col'>Code</th>
                                            <th scope='col'>Course</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pre.map((prerequisite, index) => (
                                            <tr key={index}>
                                                <td className='text-start'>{prerequisite.code}</td>
                                                <td className='text-start'>{prerequisite.name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='modal-footer'>
                                <button
                                    type='button'
                                    className='btn btn-success'
                                    data-bs-dismiss='modal'
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </td>
            )}
        </tr>
    )
}

export default CoursesRow
