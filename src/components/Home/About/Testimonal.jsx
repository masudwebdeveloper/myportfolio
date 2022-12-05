import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';

const Testimonal = () => {
    const testimonalData = [
        {
            id: 1,
            img: '',
            text: ''
        },
        {
            id: 2,
            img: '',
            text: ''
        },
        {
            id: 3,
            img: '',
            text: ''
        },
        {
            id: 4,
            img: '',
            text: ''
        },
        {
            id: 5,
            img: '',
            text: ''
        },
        {
            id: 6,
            img: '',
            text: ''
        },
    ]
    return (
        <div className='mt-10 mx-auto'>
            <div className='pl-24 mb-10'>
                <h3 className='text-xl'>What my clients think about me</h3>
                <h1 className='text-5xl text-white'>Testimonals</h1>
            </div>
            <div className='px-20'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >

                    {
                        testimonalData.map(testimonal => <SwiperSlide
                            key={testimonal.id}                    >
                            <section className="pb-10 p-5">
                                <div className="">
                                    <div className="flex flex-col items-center space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                                        <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
                                        <blockquote className="max-w-lg text-lg italic font-medium text-center">"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"</blockquote>
                                        <div className="text-center dark:text-gray-400">
                                            <p>Leroy Jenkins</p>
                                            <p>CEO of Company Co.</p>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonal;