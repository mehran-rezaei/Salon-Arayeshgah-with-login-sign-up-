import React from 'react';
import HomeMainButton from '../elements/button/HomeMainButton';

const JoinUs = () => {
    return (
        <div className=' px-48 mt-56 z-10 relative text-left  mb-20'>
            <div className='relative joinus h-[270px]    gap-x-24 flex pt-5 justify-around'>
                <div className='w-2/3 pt-5 '>
                <div className=' flex flex-col items-center relative'>
                    <div className=''>
                    <h1 className='text-3xl font-semibold'>Improve Beauty Community</h1>
                    <h2 className='mt-5 text-xl font-semibold capitalize w-2/3'>if you have beauty salon now join us </h2>
                    </div>
                    </div>
                    <div className=''>
                    <img src="../../images/joinusbbl.png"  className=' h-24 absolute left-1 bottom-[8px]' alt='' />
                    </div>
                    <div className='flex justify-end'>
                        <div 
                        
                         className='w-1/6 absolute bottom-[-10px]'>
                            <HomeMainButton text={'Join Us'} />
                        </div>
                    </div>
                </div>
                <div className='w-1/3'>
                <img src="../../images/joinus2.png"  
                className='joinusShadoow h-64 top-[-50px] absolute' alt='' />
                </div>

            </div>
        </div>
    );
};

export default JoinUs;