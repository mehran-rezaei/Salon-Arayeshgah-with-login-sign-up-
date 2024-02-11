import React, { useState } from 'react';
import { Divider, Typography } from "antd";
import MainButton from '../elements/button/MainButton';
import HomeMainButton from '../elements/button/HomeMainButton';
import { Rating } from '@mui/material';

// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";
// import required modules
// import { EffectCards } from "swiper";



const HomeIntroduction = () => {
    // const [selectedIndex, setSelectedIndex] = React.useState(0);
    // const checkNext = () => {
    //   const labels = document.querySelectorAll('#slider label');
    //   const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1; 
    //   setSelectedIndex(nextIndex);
    // }
    // const check = (index: React.SetStateAction<number>) => setSelectedIndex(index);
    const [zHandler , setSethandler] = useState<any>({
      i1 : 1,
      i2 : 2,
      i3 : 3
    })
  setTimeout(function() {
    if(zHandler.i1 === 1){
      setSethandler({...zHandler , i1 : 2,i2 : 3, i3 : 1})
    } else if(zHandler.i1 === 2) {
      setSethandler({...zHandler , i1 : 3,i2 : 1, i3 : 2})
    }  else if(zHandler.i1 === 3) {
      setSethandler({...zHandler , i1 : 1,i2 : 2, i3 : 3})
    }
         }, 5000)
    return (

        <div className='  px-32 mt-32 z-10 relative text-center '>
      
            <div className='bg-secondbg px-8 h-[480px] flex pt-5 pb-3 justify-around shadow-lg'>
                <div className='w-1/3'>
                      <div className='relative w-full'>
                       <div className='animate-slide-bl relative z-10  '>                                      
                          <img src={`../../images/intro${zHandler.i1}.png`} alt="" 
                          className=' z-30 absolute  h-[370px] w-[410px] left-16 top-4 transition-all ease-in duration-500' /> 
                       </div> 
                       <div className='animate-slide-tr relative z-30'>             
                        <img src={`../../images/intro${zHandler.i2}.png`} alt="" 
                         className='z-20 absolute   h-[370px] w-[410px] left-11 top-8 transition-all ease-in duration-500' /> 
                        </div>
                        <div className='animate-slide-tr z-20 relative'>
                           <img src={`../../images/intro${zHandler.i3}.png`} alt="" 
                             className=' z-10 absolute   h-[370px] w-[410px] left-6 top-12 transition-all ease-in duration-500'/>
                        </div>      
                       </div>
                       
                </div>
                <div className='w-2/3 flex flex-col items-center'>
                       <h1 className='font-bold text-3xl'>ETOK BEAUTY </h1> 
                       <div className='w-2/3'>
                         <Divider style={{  borderColor: 'black' , fontSize : 28, }}  >   
                           <img src="../../images/star.png" alt="" className='h-6 w-12' />  
                        </Divider>
                       </div>
                       <div className='flex justify-between w-1/3 text-lg  font-semibold'>
                        <span >Fresh</span>
                        <span>Healthy </span>
                        <span>Beauty</span>
                       </div>
                       <div className='flex flex-col items-center w-2/3 mt-5 text-lg font-medium'>
                       <h2>
                        Lorem ipsum dolor sit amet consectetur. Scelerisque ac urna nisl ut. Aenean lorem porttitor nibh tristique sed. Et mi ornare pellentesque euismod fames id neque. Eleifend laoreet a phasellus augue condimentum viverra elementum placerat.
                        </h2>
                       </div>
                       <div className='flex justify-between w-2/3 mt-5 items-center'>
                        <div>
                          <h2 className='font-semibold mb-1 text-lg'>Work Time : </h2>
                          <span className='text-base font-medium '>08 : 00 am - 9 : 00 pm</span>
                        </div>
                        <div>
                        <h2 className='font-semibold mb-1 text-lg'>Rate :</h2>
                             <Rating 
                               sx={{
                                "& .MuiRating-iconFilled": {color: "black"}}}
                              name="read-only" value={4} readOnly />
                        </div>

                       </div>
                       <div className='w-1/4 mt-24'>
                        <HomeMainButton text={'Get  Appointment'} />
                       </div>

                       <div className='mt-20'>
                       {/* <img src="../../images/SalonSignIN.png" alt="" className='h-20 w-12' />  
                       <img src="../../images/SalonSignIN.png" alt="" className='h-6 w-12 ml-20' />  
                        */}
              {/* <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        dir='ltr'
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="../../images/SalonSignIN.png" alt="" className='h-full ml-10' />  
        </SwiperSlide>
        <SwiperSlide>
        <img src="../../images/SalonSignIN.png" alt="" className='h-full w-full ml-10' />  
        </SwiperSlide>
        <SwiperSlide>
        <img src="../../images/SalonSignIN.png" alt="" className=' h-full w-full ml-10' />  
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
   
               </Swiper> */}
                       </div>
                     {/* <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <button onClick={checkNext}>{'<'}</button>
            </div>
          </div>
          <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
            <section
              id="slider"
              className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
            >
              <input
                type="radio"
                name="slider"
                id="s1"
                checked={selectedIndex === 0}
                onClick={() => check(0)}
              />
              <input 
                type="radio" 
                name="slider" 
                id="s2" 
                checked={selectedIndex === 1}
                onClick={() => check(1)}
              />
              <input
                type="radio"
                name="slider"
                id="s3"
                checked={selectedIndex === 2}
                onClick={() => check(2)}
              />
              <label htmlFor="s1" id="slide1">
                <img className="fea" src="https://picsum.photos/200/200" height="100%" width="100%"/>
              </label>
              <label htmlFor="s2" id="slide2">
                <img className="fea" src="https://picsum.photos/200/300" height="100%" width="100%"/>
              </label>
              <label htmlFor="s3" id="slide3">
                <img className="fea" src="https://picsum.photos/300/300" height="100%" width="100%"/>
              </label>
            </section>
          </div>
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <button onClick={checkNext}>{'>'}</button>
            </div>
          </div>
                      </div> */}
                   </div>
          
                </div>

            </div>
     
    );
};

export default HomeIntroduction;