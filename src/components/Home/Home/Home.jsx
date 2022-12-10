import React, { useState } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Typewriter from 'typewriter-effect';
import { FaTwitter, FaFacebookSquare, FaLinkedin, FaGithub, FaInstagram, FaBriefcase, FaHeartbeat} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import { TiContacts } from 'react-icons/ti';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex'>
            <div className={`${open ? 'w-72' : 'w-20'} h-screen bg-slate-100 relative p-5 pt-8 duration-300 hidden lg:block`}>
                <div onClick={() => setOpen(!open)} className='bg-gray-500 -right-4 rounded-full top-9 z-50 w-7 h-7 flex items-center justify-center absolute cursor-pointer'>
                    <MdOutlineKeyboardArrowLeft
                        className={`text-xl text-white ${!open && 'rotate-180'}`}
                    ></MdOutlineKeyboardArrowLeft>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <div className='flex rounded-full'>
                        <AiFillHome className={`text-xl text-black cursor-pointer duration-500`}></AiFillHome>
                    </div>
                    <h1 className={`text-2xl duration-300 font-semibold origin-left text-black ${!open && 'scale-0'}`}>Portfolio</h1>
                </div>
                <ul className='flex flex-col gap-x-4 items-center mt-5'>

                    <li className='w-full hover:bg-gray-200 py-1 mt-3 hover:border-b-4 hover:translate-x-1 border-green-500 duration-300'>
                        <NavLink to='/about' className='flex items-center gap-x-4'>
                            <div>
                                <AiOutlineUser className='text-xl text-black cursor-pointer duration-500'></AiOutlineUser>
                            </div>
                            <h1 className={`text-xl duration-300 font-semibold origin-left text-black ${!open && 'scale-0'}`}>About</h1>
                        </NavLink>
                    </li>
                    <li className='w-full hover:bg-gray-200 py-1 mt-3 hover:border-b-4 hover:translate-x-1 border-green-500 duration-300'>
                        <NavLink to='/resume' className='flex items-center gap-x-4'>
                            <div>
                                <FaHeartbeat className='text-xl text-black cursor-pointer duration-500'></FaHeartbeat>
                            </div>
                            <h1 className={`text-xl duration-300 font-semibold origin-left text-black ${!open && 'scale-0'}`}>Resume</h1>
                        </NavLink>
                    </li>
                    <li className='w-full hover:bg-gray-200 py-1 mt-3 hover:border-b-4 hover:translate-x-1 border-green-500 duration-300'>
                        <NavLink to='/portfolio' className='flex items-center gap-x-4'>
                            <div>
                                <FaBriefcase className='text-xl text-black cursor-pointer duration-500'></FaBriefcase>
                            </div>
                            <h1 className={`text-xl duration-300 font-semibold origin-left text-black ${!open && 'scale-0'}`}>Protfolio</h1>
                        </NavLink>
                    </li>
                    <li className='w-full hover:bg-gray-300 py-1 mt-3 hover:border-b-4 hover:translate-x-1 border-green-500 duration-300'>
                        <NavLink to='/contact' className='flex items-center gap-x-4'>
                            <div>
                                <TiContacts className='text-xl text-black cursor-pointer duration-500 rounded-full'></TiContacts>
                            </div>
                            <h1 className={`text-xl duration-300 font-semibold origin-left text-black ${!open && 'scale-0'}`}>Contact</h1>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='relative'>
                <div className="min-h-screen bg-opacity-60 bg-black">
                    <div className='block lg:hidden'>
                        <Navbar></Navbar>
                    </div>
                    <div className="hero">
                        <div className="z-10 grid gap-10 items-center justify-between grid-cols-1 lg:grid-cols-2 p-4">
                            <img alt='profile' src="https://i.ibb.co/qdHXDs7/masud-remove-bg.png" className="lg:h-[540px] rounded-lg shadow-2xl"/>
                            <div className='lg:pr-40'>
                                <h1 className="text-5xl font-bold text-green-500 mb-5">Masud Rana</h1>
                                <div className='text-2xl text-white mb-3'>
                                    <Typewriter
                                        style={{ fontSize: '18px' }}
                                        options={{
                                            strings: [`<strong>I am Front-End Developer</strong>`],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </div>
                                <p className='text-justify'>I am a Passionate front-end web developer. My name is Masud Rana. I have acquired complete web development knowledge from Programming Hero with Jhanker Mahbub.</p>
                                <a href='https://drive.google.com/file/d/1NZtlO0XnwFsIkr1loJcsjt-FloaKXme0/view?usp=sharing' target='_blank'>
                                    <button type="button" className="text-white mt-10 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center">
                                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                        <span>Dowonload CV</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='fixed bottom-10 right-10 z-50'>
                        <a className='text-2xl hover:text-green-600' href="https://twitter.com/MasudRana2143" target='_blank'><FaTwitter className='mb-3'></FaTwitter></a>
                        <a className='text-2xl hover:text-green-600' href="https://www.facebook.com/masudwebdeveloper/" target='_blank'><FaFacebookSquare className='mb-3'></FaFacebookSquare></a>
                        <a className='text-2xl hover:text-green-600' href="https://www.linkedin.com/in/mrmasudrana/" target='_blank'><FaLinkedin className='mb-3'></FaLinkedin></a>
                        <a className='text-2xl hover:text-green-600' href="https://github.com/masudwebdeveloper" target='_blank'><FaGithub className='mb-3'></FaGithub></a>
                        <a className='text-2xl hover:text-green-600' href="https://www.instagram.com/masud_1432/" target='_blank'><FaInstagram className='mb-3'></FaInstagram></a>
                    </div>
                    <div className='fixed top-5 right-5 z-50'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;