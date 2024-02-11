import React from 'react'
import { Button } from "@mui/material";


const HomeMainButton = (props:any) => {
    const {text } = props
    return (
        <Button
        variant='text' className='bg-mainblack hover:bg-[#EEE0C5] 
        border-2  hover:border-[#BEA06A] font-medium shadow-lg rounded-sm py-2   text-white hover:text-black mt-3 ease-in duration-200 transition-all' 
        fullWidth type="submit"
        >
        {text}
        </Button>
    );
};

export default HomeMainButton;