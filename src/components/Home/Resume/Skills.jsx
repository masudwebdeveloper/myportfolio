import React from 'react';

const Skills = () => {
    return (
        <div className='px-24 mb-32'>
            <div className='mb-10'>
                <h3 className='text-xl'>My level of knowledge in some tools</h3>
                <h1 className='text-4xl text-white font-bold'>My Skills</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10'>
                <div>
                    <div className='mb-5'>
                        <div className='flex mb-1 text-gray-300 justify-between'>
                            <p>HTML5 CSS3</p>
                            <p>95%</p>
                        </div>
                        <progress className="progress progress-success" value="95" max="100">50</progress>
                    </div>
                    <div className='mb-5'>
                        <div className='flex mb-1 text-gray-300 justify-between'>
                            <p>JavaScript</p>
                            <p>70%</p>
                        </div>
                        <progress className="progress progress-success" value="70" max="100">50</progress>
                    </div>
                    <div className='mb-5'>
                        <div className='flex mb-1 text-gray-300 justify-between'>
                            <p>ES6</p>
                            <p>80%</p>
                        </div>
                        <progress className="progress progress-success" value="80" max="100">50</progress>
                    </div>
                    <div className='mb-5'>
                        <div className='flex mb-1 text-gray-300 justify-between'>
                            <p>Tailwind</p>
                            <p>90%</p>
                        </div>
                        <progress className="progress progress-success" value="90" max="100">50</progress>
                    </div>

                </div>
                <div>
                    <div className='mb-5'>
                        <div className='flex mb-1 text-gray-300 justify-between'>
                            <p>React</p>
                            <p>75%</p>
                        </div>
                        <progress className="progress progress-success" value="75" max="100">0</progress>
                    </div>
                    <div className='mb-5'>
                        <div className='flex mb-1 text-gray-300 justify-between'>
                            <p>ExpressJs</p>
                            <p>70%</p>
                        </div>
                        <progress className="progress progress-success" value="70" max="100">0</progress>
                    </div>
                    <div className='mb-5'>
                        <div className='flex mb-1 text-gray-300 justify-between'>
                            <p>MongoDB</p>
                            <p>50%</p>
                        </div>
                        <progress className="progress progress-success" value="50" max="100">0</progress>
                    </div>
                    <div className='mb-5'>
                        <div className='flex mb-1 text-gray-300 justify-between'>
                            <p>NodeJs</p>
                            <p>60%</p>
                        </div>
                        <progress className="progress progress-success" value="60" max="100">0</progress>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Skills;