import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { Divider } from "antd";
import * as yup from 'yup';
import {  TextField } from "@mui/material";
import Head from 'next/head'
import MainButton from '@/components/elements/button/MainButton';
import HoverButton from '@/components/elements/button/HoverButton';
import MainCheckbox from '@/components/elements/checkbox/MainCheckbox';
import FormImageSection from '../../elements/formElement/FormImageSection'
import FormHeader from '@/components/elements/formElement/FormHeader';
import FormContactUs from '@/components/elements/formElement/FormContactUs';
import SecondButton from '@/components/elements/button/SecondButton';

const CustomerSignIn = () => {
  
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
        <div className='bg-mainbg h-[100vh] flex justify-between pt-8 px-16 w-full'>
      <div className='pt-1 pb-8 w-[25%]'>
        <FormHeader text={'Welcome To Etok Beauty'} text2={''}/>  
          <h2 className='text-2xl font-semibold pb-1'>Create An Account </h2>
          <span className='text-sm'>Be Come Fresh</span>
          <form className='pt-3' onSubmit={formik.handleSubmit}>
            <div>    
          <TextField size='small' variant="standard" className='mb-1.5' fullWidth
           id="name" name="name" label="Name" type="name"
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
           id="number" name="number" label="Number" type="number"
          value={formik.values.password} onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField size='small' variant="standard" className='my-1.5' fullWidth
           id="password" name="password" label="Password" type="password"
          value={formik.values.password} onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <div className='flex flex-col mt-2'>
        <MainCheckbox  text={'I Agree To All Term ,Privacy Policy And Fees'}/>
        </div>  
          </div>
        
        <MainButton text={'Create Account'} />
        <SecondButton text={'Back'} />

        <Divider >
       <span className='text-sm '> Or Log In With </span>
      </Divider>
       <FormContactUs />
      </form>
      </div> 
   <div className='w-[62%]'>
           <FormImageSection image={'../../images/customersignup.png'} />
        </div>
   </div>
   </>
    );
};

export default CustomerSignIn;