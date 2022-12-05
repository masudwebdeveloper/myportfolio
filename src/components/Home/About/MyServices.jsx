import React from 'react';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io'
import { DiResponsive } from 'react-icons/di'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiFirebase } from 'react-icons/si'

const MyServices = () => {
    const servicesData = [
        {
            id: 1,
            img: "https://i.ibb.co/Vq4qnzX/html-5-logotype.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            title: ""

        },
        {
            id: 2,
            img: "image.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            title: "PSD Design"

        },
        {
            id: 3,
            img: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            title: "Customar Support"

        },
        {
            id: 4,
            img: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            title: "Web Development"

        },
        {
            id: 5,
            img: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            title: "Fully Responsive"

        },
        {
            id: 6,
            img: "",
            text: "",
            title: ""

        },
    ]
    return (
        <div className='px-24 mb-32'>
            <div className='mb-10'>
                <h3 className='text-xl'>Services i offer to my clients</h3>
                <h1 className='text-5xl text-white'>My Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card bg-neutral text-neutral-content hover:border-b-2">
                    <div className="card-body items-center text-center">
                        <FaHtml5 className='w-14 h-14'></FaHtml5>
                        <h2 className="card-title">Design Trends</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content hover:border-b-2">
                    <div className="card-body items-center text-center">
                        <FaReact className='w-14 h-14'></FaReact>
                        <h2 className="card-title">Fontend</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content hover:border-b-2">
                    <div className="card-body items-center text-center">
                        <IoLogoNodejs className='w-14 h-14'></IoLogoNodejs>
                        <h2 className="card-title">Backend</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content hover:border-b-2">
                    <div className="card-body items-center text-center">
                        <TbBrandJavascript className='w-14 h-14'></TbBrandJavascript>
                        <h2 className="card-title">Web Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content hover:border-b-2">
                    <div className="card-body items-center text-center">
                        <DiResponsive className='w-14 h-14'></DiResponsive>
                        <h2 className="card-title">Fully Resposive</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content hover:border-b-2">
                    <div className="card-body items-center text-center">
                        <SiFirebase className='w-14 h-14'></SiFirebase>
                        <h2 className="card-title">Authentication</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;