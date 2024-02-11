import { Avatar, AvatarGroup, Rating } from '@mui/material';
import React from 'react';
import HomeMainButton from '../elements/button/HomeMainButton';

const Salons = () => {
    return (
        <div >
        <div className='px-32 mt-32 z-10 relative  '>
            <div className='flex justify-between'>
            <h2 className='pl-8 pt-3  text-3xl'>Salon’s</h2>
             <h2 className='pr-14 pt-4  text-2xl'>More</h2>
            </div>
        <div className='h-[fit] flex  pt-10 pb-3 justify-start'>
            <section className='w-[30%]'>
            <img src="../../images/salons1.png"  className=' h-[425px] w-full  ' alt="" />
            </section>
            <section className='w-[70%] '>
                <div className='text-left w-1/2 pl-14'>
                    <h1 className='text-4xl mb-5 mt-2 font-semibold'>Beauty Salon </h1>
                    <h3 className=''>
                    Lorem ipsum dolor sit amet consectetur. Vel sed egestas venenatis consectetur. Lorem ipsum dolor sit amet consectetur. 
                    </h3>
                </div>
                <div className='flex justify-between pl-14  text-left w-[92%] mt-7'>
                <div>
                          <h2 className='font-semibold mb-1 text-lg'>Work Time : </h2>
                          <span className='text-base font-medium '>08 : 00 am - 9 : 00 pm</span>
                        </div>
                        <div>
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
                    <div>
                        <h2 className='mb-3 font-semibold text-lg'>Number of Employees :</h2>
                        <div className='flex items-end'>           
                             <AvatarGroup spacing={'small'} max={3}>
                               <Avatar   sx={{ width: 55, height: 55 }}  alt="Remy Sharp"   src="../../images/Ellipse 2.png" />
                               <Avatar   sx={{ width: 55, height: 55 }} alt="Travis Howard" src="../../images/Ellipse 3.png" />
                               <Avatar   sx={{ width: 55, height: 55 }} alt="Cindy Baker"   src="../../images/Ellipse 4.png" />
                             </AvatarGroup>
                             <span className='ml-2 font-semibold' >10 Expert</span>
                             </div>
                    </div>
                </div>
                <div className='h-16 w-full mt-8 shadow-md bg-secondbg 
                flex items-center justify-start pl-14 gap-x-10'>
                    <span className='font-medium text-lg'>Address :</span> 
                    <span className='text-lg'>
                    Lorem ipsum dolor sit amet consectetur. Vel sed egestas venenatis consectetur.
                    </span>
                </div>
                <div className='flex justify-center'>
                    <div className='w-1/4 mt-10'>
                    <HomeMainButton text={'Get Appointment'} />
                    </div>
                     
                </div>

            </section>
        </div>
        </div>
        </div>
    );

};

export default Salons;