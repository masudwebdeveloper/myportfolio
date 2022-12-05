import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Typewriter from 'typewriter-effect';
import { FaTwitter, FaFacebookSquare,FaLinkedin } from 'react-icons/fa'

const Home = () => {
    return (
        <div className='relative'>
            <div className="min-h-screen bg-opacity-60 bg-black">
                <Navbar></Navbar>
                <div className="hero">
                    <div className="z-10 grid gap-10 items-center justify-between grid-cols-1 lg:grid-cols-2 p-4">
                        <img alt='profile' src="https://i.ibb.co/qdHXDs7/masud-remove-bg.png" className="lg:h-[540px] rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Masud Rana</h1>
                            <div className='text-2xl'>
                                <Typewriter
                                    style={{ fontSize: '18px' }}
                                    options={{
                                        strings: [`<strong>I am Full Stack Developer</strong>`],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed right-10 bottom-6'>
                <FaTwitter></FaTwitter>
                <FaFacebookSquare></FaFacebookSquare>
                <FaLinkedin></FaLinkedin>
            </div>

        </div>
    );
};

export default Home;