import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className='min-h-screen flex items-center justify-center'>
                <h1 className='text-5xl text-white'>Coming Soon...</h1>
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

export default Blog;