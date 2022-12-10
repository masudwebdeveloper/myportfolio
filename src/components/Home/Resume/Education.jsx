import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai'

const Education = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-3 lg:px-24 gap-x-10 gap-y-10 mt-20 mb-14 lg:mb-32'>
            <div>
                <h1 className='text-2xl lg:text-4xl text-white mb-5'>Education</h1>
                <div>
                    <div className='flex gap-5 border-l-2 border-green-500 bg-gray-800 py-10'>
                        <AiFillCaretRight className='font-bold text-5xl p-0 text-green-500'></AiFillCaretRight>
                        <div>
                            <h3 className='text-xl lg:text-3xl font-semibold text-gray-300'>Environmental Engineer</h3>
                            <p>Barguna Polytechnic institute, Barguna</p>
                            <p>2015 - 2019</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex gap-5 border-l-2 border-green-500 bg-gray-800 py-10'>
                        <AiFillCaretRight className='font-bold text-5xl p-0 text-green-500'></AiFillCaretRight>
                        <div>
                            <h3 className='text-xl lg:text-3xl font-semibold text-gray-300'>Secondary School Certificate</h3>
                            <p>Majgoan Uttar High School</p>
                            <p>2010 - 2015</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-2xl lg:text-4xl text-white mb-5'>Experience</h1>
                <div>
                    <div className='flex gap-5 border-l-2 border-green-500 bg-gray-800 p-1 py-10'>
                        <AiFillCaretRight className='font-bold text-5xl p-0 text-green-500'></AiFillCaretRight>
                        <div>
                            <h3 className='text-xl lg:text-3xl font-semibold text-gray-300'>Font-End Developer</h3>
                            <p>Programming-hero</p>
                            <p>2022 - Present</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex gap-5 border-l-2 border-green-500 bg-gray-800 py-10'>
                        <AiFillCaretRight className='font-bold text-5xl p-0 text-green-500'></AiFillCaretRight>
                        <div>
                            <h3 className='text-xl lg:text-3xl font-semibold text-gray-300'>Back-End Developer</h3>
                            <p>Programing-hero</p>
                            <p>2022 - Present</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;