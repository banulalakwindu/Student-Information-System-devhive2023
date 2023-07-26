
//New part
import React, { useState } from 'react';
//Old part
//import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Medical = () => {

//New Part begin
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleUpload = () => {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('image', selectedFile);
  
        // Make a POST request to your Express backend to upload the image
        fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response from the server, if needed
            console.log('Image uploaded successfully:', data);
          })
          .catch(error => {
            // Handle any errors that occurred during the upload
            console.error('Error uploading image:', error);
          });
      }
    };
//New part end

    return (
        <div>
            <Navbar />
            <div className='pt-5 d-flex flex-column'>
                <h2 className='mt-5 pt-5 text-green mt-5 mx-auto'>Upload Your Medical Report</h2>
                <div className='d-flex flex-column mt-5'>
                    <label for="formFile" class="drop-container w-50 mx-auto">
                        <span class="drop-title">Drop files here</span>
                        or
                        {/* <input class="form-control" type="file" id="formFile" /> */}
                        <input class="form-control" type="file" id="formFile" onChange={handleFileChange} />
                        {/* Change */}
                    </label>
                    {/* <button type="submit" className='mt-5 mx-auto w-25 btn btn-green'> Upload </button> */}
                    {/* New part */}
                    <button type="submit" className='mt-5 mx-auto w-25 btn btn-green' onClick={handleUpload}> Upload </button>
                    

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Medical