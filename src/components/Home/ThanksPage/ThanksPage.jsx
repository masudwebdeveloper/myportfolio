import React from 'react';
import { Link } from 'react-router-dom';

const ThanksPage = () => {
    return (
        <div>
            <h1 className='text-4xl text-white min-h-screen flex justify-center items-center'>Thanks for messaging me</h1>
            <div className="fixed right-14 top-10">
                <Link to='/'>
                    <button className="btn btn-square btn-sm text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ThanksPage;