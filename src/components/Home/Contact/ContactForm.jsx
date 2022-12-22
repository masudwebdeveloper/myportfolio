import React from 'react';
import { FaHome, FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'

const ContactForm = () => {
    return (
        <div className='px-4 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10 mb-10'>
            <div className='col-span-1'>
                <h1 className='text-3xl font-semibold mb-5 text-gray-100'>Message</h1>
                <form action="https://formsubmit.co/abdullainfo30@gmail.com" method="POST" className='py-5'>
                    <div className='flex gap-x-5'>
                        <input type="text" name='name' placeholder="Your Name" className="input input-border w-full bg-gray-800" required />
                        <input type="email" name='email' placeholder="Your Email" className="input input-border w-full bg-gray-800" required />
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="hidden" name="_next" value="https://mrmasud.netlify.app/thankspage"></input>
                    </div>
                    <input type="text" name='_subject' placeholder="Subject" className="input input-border w-full bg-gray-800 mt-5" required />
                    <textarea name='message' rows='5' className="textarea textarea-bordered mt-5 bg-gray-800 w-full" placeholder="Message"></textarea>
                    <input className='btn btn-success rounded-full text-white mt-5' type="submit" value="Send Message" />
                </form>
            </div>
            <div className='col-span-1'>
                <h1 className='text-3xl font-semibold mb-5 text-gray-100'>Contact Info</h1>
                <p className='text-md font-mono'>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                <div className="flex mt-10">
                    <div className="grid card rounded-box place-items-stretch">
                        <FaHome className='font-semibold text-2xl mb-5'></FaHome>
                        <MdLocationOn className='font-semibold text-2xl mb-5'></MdLocationOn>
                        <FaPhone className='font-semibold text-2xl mb-5'></FaPhone>
                        <AiOutlineMail className='font-semibold text-2xl'></AiOutlineMail>

                    </div>
                    <div className='divider divider-horizontal'></div>
                    <div className="grid flex-grow card rounded-box place-items-start">
                        <div className='text-white mb-3'>
                            <strong>Name</strong>
                            <p><small>Masud Rana</small></p>
                        </div>
                        <div className='text-white mb-3'>
                            <strong>Location</strong>
                            <p><small>Natore, Bangladesh</small></p>
                        </div>
                        <div className='text-white mb-3'>
                            <strong>Phone</strong>
                            <p><small>+880 1796682951</small></p>
                        </div>
                        <div className='text-white mb-3'>
                            <strong>Email</strong>
                            <p><small>abdullainfo30@gmail.com</small></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactForm;