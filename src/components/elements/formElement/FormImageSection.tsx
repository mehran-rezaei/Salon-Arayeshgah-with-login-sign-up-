import React from 'react';

const FormImageSection = (props:any) => {
  const {image} = props
    return (
        <div className=''>
        <div className='flex items-center '>
        <img src="../../images/borderleft.png" alt="" className='h-16' />
        <h2 className= 'w-full text-xl px-12' > Lorem ipsum dolor sit amet  </h2>
        </div>

        <div className='flex items-center  justify-center w-full'>
          <img src={image}  className='w-[750px] h-[500px]' alt="loginpicture" />
        </div>
        <div className='flex items-center justify-end'>
         <img src="../../images/borderright.png" alt=""  className='h-16'/>
        </div>
        <div className='ml-24 font-medium w-1/2'>
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

export default FormImageSection;