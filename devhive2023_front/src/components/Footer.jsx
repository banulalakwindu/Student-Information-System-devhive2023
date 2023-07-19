import React from 'react';
import { FaFacebook, FaEnvelope } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";

const Footer = () => {
    return (
        <div>
            <footer className='fixed-bottom bg-green d-flex shadow border-top text-white rounded-top justify-content-between px-5' style={{ height: "75px" }}>
                <a href='https://www.eng.jfn.ac.lk' data-testid='web-link' className='btn btn-green border my-auto d-flex'><BsGlobe className='me-2 my-auto' />eng.jfn.ac.lk</a>
                <div className='btn btn-green border my-auto d-flex'><FaEnvelope className='me-2 my-auto' />admin@eng.jfn.ac.lk</div>
                <div className='btn btn-green border my-auto d-flex'><GiRotaryPhone className='me-2 my-auto' />+94-021-2062161</div>
                <div className='btn btn-green border my-auto d-flex'><FaFacebook className='me-2 my-auto' />FOE | UOJ</div>
            </footer>
        </div>
    )
}

export default Footer