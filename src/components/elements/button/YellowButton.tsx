import React from 'react'
import { Button } from "@mui/material";


const YellowButton = (props:any) => {
    const {text } = props
    return (
        <Button
        variant='text'  
        className='bg-[#CEB281] hover:opacity-80 hover:bg-[#CEB281] capitalize 
        text-lg text-black py-1.5 px-7 font-normal shadow-lg
         ease-in duration-200 transition-all  rounded-sm' 
        //  size='small'
         size='small'


        >
        {text}
        </Button>
    );
};

export default YellowButton;



   
