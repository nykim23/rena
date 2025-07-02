import React, { useEffect, useState } from 'react'

import { developerText } from '../../data/developer';
import { Link } from 'react-router-dom';



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


const Developer = () => {
    return (
        <section id='developer'>
            <h2>😪 추천 개발자를 소개합니다.</h2>
            <div className="developer__inner overflow">


                <Swiper 
                    slidesPerView={4}
                    spaceBetween={15}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction:false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView:5,
                            spaceBetween:15,
                        },
                        768: {
                            slidePerView:6,
                            spaceBetween:15,
                        },
                        1024: {
                            slidePerView:7,
                            spaceBetween:20,
                        },
                        1240: {
                            slidePerView:8,
                            spaceBetween:20,
                        },
                        1640: {
                            slidePerView:9,
                            spaceBetween:20,
                        },
                        2000: {
                            slidePerView:10,
                            spaceBetween:20,
                        },
                        
                    }}  
                    
                    modules={[Navigation,Autoplay]}
                    className='mySwiper'
                >
                    {developerText.map((developer, key) => (
                        <SwiperSlide key={key}>
                            <div className="developer" key={key}>
                                <div className="developer__img play__icon">
                                    <Link to={`/channel/${developer.channelId}`}>
                                        <img src={developer.img} alt={developer.name} />
                                    </Link>
                                </div>
                                <div className="developer__info">
                                    <Link to={`/channel/${developer.channelId}`}>
                                        {developer.name}
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </section>
    )
}

export default Developer