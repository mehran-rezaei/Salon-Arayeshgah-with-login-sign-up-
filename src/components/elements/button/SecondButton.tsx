import React from 'react'
import { Button } from "@mui/material";


const SecondButton = (props:any) => {
    const {text } = props
    return (
        <Button variant='text'
         className='bg-[mainbg] hover:opacity-80  hover:bg-[#25323B33] text-black mt-3
          ease-in duration-200 transition-all shadow-lg ' 
          fullWidth 
          sx={{ border: 1 }}
          type="button">
        {text}
        </Button>
    );
};

export default SecondButton;