import React from 'react';
import MainButton from '../button/MainButton';

const SalonSignInImageSec = (props:any) => {
  const {image, text1 , text2} = props
    return (
        <div className='px-16'>
        <h2 className= 'w-full text-center text-xl' > Lorem ipsum dolor sit amet  </h2>
        <div className='flex items-center '>
        <img src="../../images/borderleft.png" alt="" className='h-14 w-96' />
        </div>

        <div className='flex items-center  justify-center w-full'>
          <img src={image}  className='' alt="loginpicture" />
        </div>
        <div className='flex items-center justify-end'>
         <img src="../../images/borderright.png" alt=""  className='h-14 w-96'/>
        </div>
        <div className='flex justify-around mt-5 '>
                 <div className='borderbg h-52 w-52 flex justify-center items-center  '>
                   <div className='' >
                      <MainButton text={text1}/>
                    </div>
                </div>
                <div className={text2.length > 0 ? 'borderbg h-52 w-52 flex justify-center items-center ' 
                 : "hidden"}>
                   <div className='' >
                      <MainButton text={text2}/>
                    </div>
                </div>
            
        </div>
        <div className='ml-20 mt-16 font-medium w-4/5'>
          <ul className='flex justify-between'>
            <li>About Us </li>
            <li>Contact Us</li>
            <li>Support</li>
            <li>FAQ</li>
          </ul>
        </div>
       </div>  
     
    );
};

export default SalonSignInImageSec;