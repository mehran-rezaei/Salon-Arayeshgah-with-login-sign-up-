import React from 'react'
import { Button } from "@mui/material";


const HoverButton = (props:any) => {
    const {text } = props
    return (
        <Button 
         className='bg-[#25323B] opacity-80 hover:opacity-70 hover:bg-[#25323B] text-white mt-3 ease-in duration-200 transition-all' fullWidth type="submit">
         {text} 
        </Button>
    );
};

export default HoverButton;