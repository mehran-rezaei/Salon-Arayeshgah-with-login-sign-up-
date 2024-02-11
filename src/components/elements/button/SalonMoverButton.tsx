import React from 'react';
import { Button } from "@mui/material";

const SalonMoverButton = (props:any) => {
    const {text,type} = props
    return (
        <Button size='small'
        className={type ? 'bg-black font-semibold rounded-xl capitalize px-9 text-white hover:bg-black transition-all ease-in duration-300' 
        : 'font-semibold rounded-xl px-9 text-black hover:bg-inherit capitalize transition-all ease-in duration-300'}
        >{text}</Button>
    );
};

export default SalonMoverButton;