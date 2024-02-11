import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { Divider } from "antd";
import * as yup from 'yup';
import { Button, TextField } from "@mui/material";
import Head from 'next/head'
import MainButton from '@/components/elements/button/MainButton';
import HoverButton from '@/components/elements/button/HoverButton';
import MainCheckbox from '@/components/elements/checkbox/MainCheckbox';
import FormImageSection from '../../elements/formElement/FormImageSection'
import FormHeader from '@/components/elements/formElement/FormHeader';
import FormContactUs from '@/components/elements/formElement/FormContactUs';
import SecondButton from '@/components/elements/button/SecondButton';
import SalonMoverButton from '@/components/elements/button/SalonMoverButton';
import SalonModaLogin from './SalonModaLogin';

const SalonLogin = () => {
    const [whoIsHere ,setWhoIsHere]= useState<any>({
        employee : false,
        ceo : true
    })
  
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        console.log(values);
        
    //   alert(JSON.stringify(values, null, 2));
    },
  });
    return (
      <>
        <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet"/>
        </Head>
        <div className='bg-mainbg h-[100vh] flex justify-between pt-10 px-16 w-full'>
      <div className='pt-1 pb-8 w-[25%]'>
        <FormHeader text={'Welcome Back To Salon'} text2={''}/>  
          <h2 className='text-2xl font-semibold pb-1'>Log In</h2>
          <span className='text-sm'>Be Come Fresh</span>

          <div className='bg-[#E4D6BB] mt-5 py-2 px-3 rounded-xl flex justify-between items-center'>
           <div onClick={() => setWhoIsHere({ ceo : true })}>
          <SalonMoverButton text={'CEO'}  type={whoIsHere.ceo} />
          </div>   
           <div  onClick={() => setWhoIsHere({ employee : true})} >
           <SalonMoverButton text={'Employee'} type={whoIsHere.employee} />
           </div>
          </div>

          <form className='pt-3' onSubmit={formik.handleSubmit}>
            <div>    
          <TextField size='small' variant="standard" className='mb-1.5' fullWidth
           id="name" name="name" label={whoIsHere.ceo ? 'CEO name :' : 'Name :'}type="name"
          value={formik.values.password} onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField size='small' variant="standard" fullWidth className='my-1.5' 
          id="email" name="email" label="Email" 
          value={formik.values.email}  onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
         <TextField size='small' variant="standard" className='my-1.5' fullWidth
           id="number" name="number" label={whoIsHere.ceo ? 'Password' : 'Employee Pass :'} type="number"
          value={formik.values.password} onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField size='small' variant="standard" className='mt-1.5 mb-3' fullWidth
           id="password" name="password" label="Salon Liesens Code :" type="password"
          value={formik.values.password} onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />  
          </div>
        <MainButton text={'Log In'} />
      
        <SecondButton text={'Back'} />
      </form>
      </div> 
   <div className='w-[62%]'>
           <FormImageSection image={'../../images/customerlogin.png'} />
        </div>
   </div>
   </>
    );
};

export default SalonLogin;