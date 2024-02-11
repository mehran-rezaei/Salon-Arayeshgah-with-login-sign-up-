import React from 'react'
import { Button } from "@mui/material";


const NavbarButton = (props:any) => {
    const {text, type } = props
    return (
        <Button
        size='small'
        variant='text'
         className={type ?
          'capitalize text-base bg-mainblack font-normal px-4 hover:opacity-80 hover:bg-mainblack text-white  ease-in duration-200 transition-all rounded-tl-xl  rounded-br-xl  rounded-none' 
         : 
         'capitalize text-base  font-normal px-4 hover:opacity-80  text-black  ease-in duration-200 transition-all rounded-tl-xl  rounded-br-xl  rounded-none'}
        //  fullWidth
        //   type="submit"
          >
        {text}
        </Button>
    );
};

export default NavbarButton;