import React from 'react';
import { Divider } from "antd";

const AboutUs = () => {
    return (
        <div className='  px-48 mt-44 z-10'>
        <h2 className='font-normal mb-5 text-3xl'>Why should you choose etok beauty?</h2>
        <div className='   flex pt-5 pb-3 relative h-[530px] justify-between text-left  gap-x-9'>
        <div className='w-1/2  relative'>
        <img src="../../images/aboutus1.png"  className='h-80' alt="" />
        <div className='flex justify-end top-72 absolute w-full'>
        <img src="../../images/aboutus2.png"  className='h-44' alt="" />
        </div>
        </div>
        <div className='w-1/2  flex flex-col justify-end   '>
        <div className='h-fit flex gap-x-2 '>
        <div className='w-1/12  '>
            <Divider type='vertical'
             style={{  borderColor: 'black' , fontSize : 28, height : '100%' , borderWidth : 3}}  />
        </div>
        <div className='flex flex-col justify-end'>
           <div className='flex flex-col  gap-y-10 text-sm font-medium'>
            <div className='flex items-center '>
                <span className='mr-5 px-3 font-bold py-1 text-base rounded-[50%] border border-black'>1</span>
                <span>Lorem ipsum dolor sit amet consectetur. Vel sed egestas venenatis consectetur.</span>
            </div>
            <div  className='flex items-center'>
                <span className='mr-5 px-3 font-bold py-1 text-base rounded-[50%] border border-black'>2</span>
                <span>Lorem ipsum dolor sit amet consectetur. Vel sed egestas venenatis consectetur.</span>
            </div>
            <div  className='flex items-center'>
                <span className='mr-5 px-3 font-bold py-1 text-base rounded-[50%] border border-black'>3</span>
                <span>Lorem ipsum dolor sit amet consectetur. Vel sed egestas venenatis consectetur.</span>
            </div>
            <div  className='flex items-center'>
                <span className='mr-5 px-3 font-bold py-1 text-base rounded-[50%] border border-black'>4</span>
                <span>Lorem ipsum dolor sit amet consectetur. Vel sed egestas venenatis consectetur.</span>
            </div>
           </div>
           </div>
           </div>
        </div>
        <div className='absolute w-1/2 right-36 top-12 font-medium text-lg leading-6 tracking-widest'>
            <h2>
            Lorem ipsum dolor sit amet consectetur. Mauris dolor nulla proin a quis diam. Tristique vitae quam luctus mi donec vestibulum egestas ut aliquam. Arcu et dignissim sodales ipsum feugiat aliquam nibh tincidunt massa. Vitae ut adipiscing id ornare viverra scelerisque proin et ultricies.
            </h2>
        </div>




        </div>
        </div>
    );
};

export default AboutUs;