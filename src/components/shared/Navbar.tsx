import React, { useState } from 'react';
import NavbarButton from '../elements/button/NavbarButton';
import NavbarSecondButton from '../elements/button/NavbarSecondButton';
import Link from 'next/link';

const Navbar = () => {
    const [type ,setType] = useState<any>(0)
    return (
        <div  className='px-20 pt-9'>
            <div className='border-b-[3px] pb-0.5 border-[#BEA06A] flex justify-between items-center'>
            <div>
                <img src="../../images/logo.png" className='h-9' alt="" />
            </div>
            <div className='w-[40%] flex justify-between'> 
            <div onClick={()=>setType(0)}>
            <NavbarButton type={type === 0 && true}  text={'home'}/>
            </div>   
            <div onClick={ ()=> setType(1)}>
            <NavbarButton type={type === 1 && true} text={'services'}/>
            </div>
            <div onClick={ ()=> setType(2)}>
            <NavbarButton type={type === 2 && true} text={'salon’s'}/>
            </div>
            <div onClick={ ()=> setType(3)}>
            <NavbarButton type={type === 3 && true} text={'about us'}/>
            </div>
            </div>
            <Link href={'./customerSignUpIn'}>
            <NavbarSecondButton text={'Sign Up'}/>
            </Link>
     
        </div>
        </div>
     
    );
};

export default Navbar;