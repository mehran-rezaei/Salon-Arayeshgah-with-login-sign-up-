import React from 'react'
import { Button } from "@mui/material";


const MainButton = (props:any) => {
    const {text } = props
    return (
        <Button
        variant='text' className='bg-[#25323B] hover:opacity-80 hover:bg-[#25323B] text-white mt-3 ease-in duration-200 transition-all'
         fullWidth type="submit"
         >
        {text}
        </Button>
    );
};

export default MainButton;