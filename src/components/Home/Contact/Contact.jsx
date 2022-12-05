import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div>
            <h2 className='text-2xl text-center mt-10'>Feel free to contact me anytime</h2>
            <h1 className='text-5xl text-center text-white font-bold'>Get In Touch</h1>
            <div className='border-b-4 mx-auto mt-5 border-green-500 w-28 mb-20'></div>
            <div>
                <ContactForm></ContactForm>
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

export default Contact;