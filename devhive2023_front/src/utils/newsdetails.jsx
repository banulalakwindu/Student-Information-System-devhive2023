import React from 'react';
import newsData from '../data/newsData';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Newsdetails = () => {
    const newsId = new URLSearchParams(location.search).get('news');
    const selectedNews = newsData.find((item) => item.id === newsId);

    if (!selectedNews) {
        // Return a message if the news with the given ID is not found
        return <div>News not found</div>;
    }

    return (
        <div className='py-5'>
            <Navbar />
            <div className='d-flex flex-column text-center'>
                <h2 className='mt-5 pt-5 text-green mb-0'>{selectedNews.name}</h2>
                <small className='m-0 text-secondary' >({selectedNews.date})</small>
                <img className='mx-auto my-2' src="https://img.freepik.com/free-photo/solemn-dark-skinned-african-american-student-his-workplace-looking-his-copy-book-writing-notes-preparing-final-exams-university-concentrated-handsome-guy-working-cafe-during-break_273609-7480.jpg?w=1060&t=st=1690392126~exp=1690392726~hmac=b4834a3b0d87864b8a8fa0a1a33d23d673c5dc7d43088cc9dbebbcfc05536ee5" style={{ height: "auto", width: "500px" }} alt="" srcset="" />
                <p className='mt-5 mx-5'>{selectedNews.long}</p>
            </div>

            <Footer />
        </div>
    );
};

export default Newsdetails;
