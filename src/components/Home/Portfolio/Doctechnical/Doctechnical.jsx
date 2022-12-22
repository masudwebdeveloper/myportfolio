import React from 'react';
import { Link } from 'react-router-dom';

const Doctechnical = () => {
    const projectImg = [
        {
            id: 1,
            img: 'https://i.ibb.co/d0Cd70c/doctechnical-home-page.png'
        },
        {
            id: 2,
            img: 'https://i.ibb.co/pJ88SfW/doctechnical-course-page.png'
        },
        {
            id: 3,
            img: 'https://i.ibb.co/Tvx8k46/doctechnical-enroll-page.png'
        },
    ]
    return (
        <div className='px-4 lg:px-24'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20'>
                {
                    projectImg.map(image => <div
                        key={image.id}
                        className='max-h-[230px] overflow-auto'
                    >
                        <div className='h-auto w-full snap-start' >
                            <img src={image.img} />
                        </div>
                    </div>
                    )
                }
            </div>
            <div className='mt-20'>
                <ul className='lg:w-3/5 text-white'>
                    <li>
                        <span className='text-2xl font-bold text-yellow-500'>Technologies:-</span> React, React-router-dom, Tailwind,
                        Daisy Ui, firebase, jsonwebtoken (JWT) for backed Nodejs, Express,
                        MongoDB.
                    </li>
                    <li className='list-disc'>
                        Designed processes for cleanup and performance improvement this site
                        and user friendly.
                    </li>
                    <li className='list-disc'>
                        oldbazaar site usage technologies React, React-router-dom, Tailwind,
                        Daisy Ui, firebase, jsonwebtoken (JWT) for backed Nodejs, Express,
                        MongoDB.
                    </li>
                    <li className='list-disc'>
                        This site deploy in firebase and server site hoisting in vercel.
                        Fixed bugs from existing websites and implemented enhancements that
                        significantly improved web functionality and speed
                    </li>
                </ul>
                <div>
                    <ul className='flex gap-x-5 my-8 '>
                        <li className='btn btn-warning btn-sm text-black hover:btn-success hover:text-white'>
                            <a href='https://doc-technical-client.web.app/' target='_blank'>Live Link</a>
                        </li>
                        <li className='btn btn-warning btn-sm text-black hover:btn-success'>
                            <a href='https://github.com/masudwebdeveloper' target='_blank'>GitHub Link</a>
                        </li>
                        <li className='btn btn-warning btn-sm text-black hover:btn-success'>
                            <a href='https://github.com/masudwebdeveloper/doc-technical-client' target='_blank'>GitHub Client</a>
                        </li>
                    </ul>
                </div>
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

export default Doctechnical;