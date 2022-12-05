import React from 'react';
import { Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import MyServices from './MyServices';
import Testimonal from './Testimonal';

const About = () => {
    return (
        <div className=''>
            <h2 className='text-2xl text-center mt-10'>Get to know me</h2>
            <h1 className='text-5xl text-center text-white'>About Me</h1>
            <div>
                <AboutMe></AboutMe>
                <MyServices></MyServices>
                <Testimonal></Testimonal>
            </div>
            <div className="fixed right-5 top-5">
                <Link to='/'>
                    <button className="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;