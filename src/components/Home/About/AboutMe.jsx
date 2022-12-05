import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content items-start flex-col lg:flex-row">
                <img alt='' src="https://i.ibb.co/vdBnNB1/masud1-removebg-preview.png" className="rounded-lg shadow-2xl" />
                <div className='p-4'>
                    <h1 className="text-2xl font-bold text-green-500">Who am i?</h1>
                    <h1 className="text-5xl font-bold text-white">I'm Masud Rana, a Full Stack Web Developer</h1>
                    <p className="py-6">I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                    <hr className='' />
                    <div className='flex justify-between px-20 mt-7'>
                        <div>
                            <p className='mb-2'><span className='text-white font-semibold'>Name:</span> Masud Rana</p>
                            <p className='mb-2'><span className='text-white font-semibold'>Age:</span> 23</p>
                        </div>
                        <div>
                            <p className='mb-2 text-green-500'><span className='text-white font-semibold'>Email:</span> abdullainfo30@gmail.com</p>
                            <p className='mb-2'><span className='text-white font-semibold'>From:</span> Natore, Dhaka, Bangladesh.</p>
                        </div>
                    </div>
                    <div className='flex items-center'>

                        <a href='https://drive.google.com/file/d/1QMyfxRuNs99C6lZa_fpoMn6jljQFidZ_/view?usp=sharing' target='_blank'><button className="btn bg-green-500 text-white rounded-pill">Download CV</button></a>
                        <div className='h-1 w-28 bg-gray-700 ml-5'></div>
                        <div className='flex gap-2 ml-5'>
                            <a href='https://www.facebook.com/masudwebdeveloper/' target='_blank' className='hover:text-green-500 text-xl'><FaFacebook></FaFacebook></a>
                            <a href='https://twitter.com/masudranawebdev' className='hover:text-green-500 text-xl' target='_blank'><FaTwitter></FaTwitter></a>
                            <a href='https://www.instagram.com/masud_1432/' className='hover:text-green-500 text-xl' target='_blank'><FaInstagram></FaInstagram></a>
                            <a href='https://github.com/masudwebdeveloper' className='hover:text-green-500 text-xl' target='_blank'><FaGithub></FaGithub></a>
                            <a href='https://www.linkedin.com/in/mrmasudrana/' className='hover:text-green-500 text-xl' target='_blank'><FaLinkedin></FaLinkedin></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;