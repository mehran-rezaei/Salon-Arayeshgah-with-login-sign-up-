import React from 'react';
import Slider from './Slider';
import { Avatar, Rating } from '@mui/material';
import HomeMainButton from '../elements/button/HomeMainButton';

const BestServices = () => {
    return (
        <div className=' px-32 mt-56 z-10 relative text-center  mb-20'>
            <h2 className='text-left text-3xl mb-5 pl-3' >Services</h2>

                    <div className=' relative bestSevices h-[320px]  px-8  gap-x-24 flex pt-5 pb-3 justify-around'>
                        <img src="../../images/borderRb.png"
                         className='  absolute right-2 bottom-2' alt="" />
                        
                       {/* <Slider /> */}
                       <div className='w-[45%] text-left'>
                        <h2 className='font-semibold text-lg mb-2'>Hair Keratin</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur. Sit suspendisse id massa porttitor id amet mattis. Cras morbi elit condimentum risus vel.</h3>
                        <div className='flex items-center mt-10'>
                        <Avatar
                          alt="Remy Sharp"
                          src="../../images/sara.png"
                          sx={{ width: 80, height: 80 }}
                        />
                        <div className='flex flex-col ml-3 mt-5'>
                            <span className='font-semibold'>Sara Smith</span>
                            <span className='text-sm'>Hair Specialist</span>
                        </div>
                        </div>
                        <div className=' flex justify-end'>
                            <div className='w-1/3 mt-4'>
                            <HomeMainButton text={'Book Now'} />
                            </div>
                        </div>
                       </div>
                       <div className='w-1/2 flex relative '>
                        <img src="../../images/sliderpic1.png" className='relative top-[-80px] h-80' alt="" />
                       <div className='text-left ml-7  mt-10'>
                        <h2 className='font-semibold mb-1 text-lg'>Rate :</h2>
                        <div className='flex items-center gap-x-3'>
                        <span>1.k rate </span>
                             <Rating 
                             size='small'
                               sx={{
                                "& .MuiRating-iconFilled": {color: "black"}}}
                              name="read-only" value={4} readOnly />
                        </div>

                        </div>
                        </div>                       

                    </div>
        </div>
    );
};

export default BestServices;