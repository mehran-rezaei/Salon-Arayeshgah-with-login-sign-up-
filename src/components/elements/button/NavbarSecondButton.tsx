import React from 'react'
import { Button } from "@mui/material";


const NavbarSecondButton = (props:any) => {
    const {text } = props
    return (
        <Button
        size='small'
        variant='text' className='bg-[#CEB280] font-semibold py-1.5 text-base text-black capitalize hover:opacity-80 hover:bg-[#CEB280] px-8 rounded-sm   ease-in duration-200 transition-all' 
        // fullWidth type="submit"
        >
        {text}
        </Button>
    );
};

export default NavbarSecondButton;