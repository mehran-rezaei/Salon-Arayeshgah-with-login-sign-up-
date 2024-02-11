import React, { useEffect , useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";



const Slider = (props : any) => {




    return (
        <div className='px-5 md:px-20  py-16'>
            {/* <h1>
                <Title title={'پر بازدیدترین مقالات'}/></h1> */}
            {/* <Swiper
             pagination={{clickable: true ,dynamicBullets: true, }}
              modules={[Pagination]}
               className="mySwiper"
             spaceBetween={50}
             slidesPerView={2}
             breakpoints={{
                1280:{
                    // width : 1280,
                    slidesPerView: 1,
                },
             }}
              >
             <SwiperSlide className='rounded-lg shadow-md' >
                <div>
                <img src="../../images/intro1.png" alt="" className='mt-3 h-20 w-24 ' /> 
                </div>
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg shadow-md' >
                <div>
                <img src="../../images/intro1.png" alt="" className='mt-3 h-20 w-24 ' /> 
                </div>
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg shadow-md' >
                <div>
                <img src="../../images/intro1.png" alt="" className='mt-3 h-20 w-24 ' /> 
                </div>
                </SwiperSlide>

           </Swiper> */}
        </div>
    );
};

export default Slider;

