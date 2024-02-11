import { Divider } from 'antd';
import React from 'react';
import LangSelect from '../elements/select/LangSelect';

const Footer = () => {
    return (
        <div className='bg-secondbg h-[430px] pt-10 mt-44 relative'>
            <div className='topfooter pl-48 pr-16 uppercase text-sm font-medium flex gap-x-24 justify-between'>
                <div className='w-3/5  flex justify-between text-sm text-left font-normal'>
                    <ul>
                    <li className='text-base font-semibold mb-2'>content</li>
                    <li>new services </li>
                    <li>blog</li>
                    </ul>
                    <ul>
                    <li className='text-base font-semibold mb-2'>links </li>
                    <li>about us </li>
                    <li>join us</li>
                    <li>business</li>
                    <li>jobs</li>
                    </ul>
                    <ul>
                    <li className='text-base font-semibold mb-2'>legal</li>
                    <li>terms and conditions</li>
                    <li>license agreement</li>
                    <li>privecy policy</li>
                    <li>cookies setting </li>

                    </ul>
                    <ul>
                    <li className='text-base font-semibold mb-2'>support</li>
                    <li>FAQ</li>
                    <li>contact</li>
                    </ul>
                </div>
                <div className='w-1/3 flex flex-col items-center uppercase '>
                    <h2 className='text-base font-semibold'>social media </h2>
                    <div className='mt-10 flex justify-center gap-x-8'>
                        <img src="../../images/lenkdein.png" className='h-7' alt='' />
                        <img src="../../images/facebook.png" className='h-7' alt='' />
                        <img src="../../images/insta.png" className='h-7' alt='' />
                        <img src="../../images/tiktok.png" className='h-7' alt='' />
                        <img src="../../images/whtasapp.png" className='h-7' alt='' />
                    </div>
                    

                </div>
            </div>
            <div className='flex justify-center flex-col items-center my-7 '>
                <div className='w-3/4'>
                <Divider style={{borderWidth : '1px' , borderColor : '#25323B', opacity : '0.7'}} />
                <div className='flex justify-between items-center px-5 mt-10'>
                <div className='flex items-end gap-x-4  '>
                <img src="../../images/logo.png" className='h-9' alt='' /> 
                <span className='capitalize text-base font-semibold'>© Copyrights Etok Company 2023. All rights reserved.</span>
                </div>
                <div className='pt-2 w-1/4'>
                    <LangSelect />
                </div>
                </div>
                </div>
            </div>


            <div className='absolute capitalize font-medium  flex justify-evenly items-center bottom-0 text-secondbg w-full bg-mainblack h-16'>
                <div className='flex items-center'>
                <img src="../../images/footerlogo.png" className='h-8 mr-4' alt='' />
                   <span className='pt-2'> etok company projects</span>
                </div>
                <div>Reminder</div>

            </div>
        </div>
    );
};

export default Footer;