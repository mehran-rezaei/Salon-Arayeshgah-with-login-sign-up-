import React from 'react';
import { Divider } from "antd";
const FormHeader = (props:any) => {
    const {text , text2} = props
    return (
        <div>
        <h1 className='text-3xl font-semibold'>{text}</h1>
        <div className=' h-fit  mt-[10px] mb-4  flex items-center'> 
        <div className='bg-black w-[30%] h-4'></div>
        <span className='mx-3' >{text2}</span>
        </div>
        </div>
    );
};

export default FormHeader;