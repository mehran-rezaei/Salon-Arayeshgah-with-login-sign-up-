import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { Divider } from "antd";
import * as yup from 'yup';
import { Button, TextField,Step, Stepper , Box , StepLabel } from "@mui/material";
import Head from 'next/head'
import MainButton from '@/components/elements/button/MainButton';
import HoverButton from '@/components/elements/button/HoverButton';
import MainCheckbox from '@/components/elements/checkbox/MainCheckbox';
import FormImageSection from '../../elements/formElement/FormImageSection'
import FormHeader from '@/components/elements/formElement/FormHeader';
import FormContactUs from '@/components/elements/formElement/FormContactUs';
import SecondButton from '@/components/elements/button/SecondButton';
import SalonMoverButton from '@/components/elements/button/SalonMoverButton';
import SalonSignInImageSec from '@/components/elements/formElement/SalonSignInImageSec';
import SalonModaLogin from './SalonModaLogin';
import SalonModal2 from './SalonModal2';
import SalonModal3 from './SalonModal3';

const SalonSignIn = () => {
    const [activeStep ,setActiveStep] = useState(0)
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
        setActiveStep(activeStep + 1)
        
    //   alert(JSON.stringify(values, null, 2));
    },
  });
  const steps = [
    'Step 1',
    'Step 2',
    'Step 3',
  ];
  const stepStyle = {
    // boxShadow: 2,
    // backgroundColor: "rgba(0,0,0,0.1)",
    padding: 1,
    
    "& .Mui-active": {
        "& .MuiStepIcon-text" : {
            fill : 'white' 
         },
      "&.MuiStepIcon-root": {
        color: "black",
        // fontSize: "2rem",
      },
      "& .MuiStepConnector-line": {
        borderColor: "black"
      }
    },
    "& .MuiSvgIcon-root" : {
    //    color : 'black',
       color : '#F8f6eb',
       border: "1px solid black",
       borderRadius : "50%"
    },
    "& .MuiStepIcon-text" : {
       fill : 'black' 
    },
    "& .Mui-completed": {
        fill : 'black',
    //   "&.MuiStepIcon-root": {
    //     color: "secondary.main",
    //     fontSize: "2rem",
    //     fill : 'white' ,
    //   },
      "& .MuiStepIcon-text": {
        fill : 'white' 
     },
      "& .MuiStepConnector-line": {
        borderColor: "black"
      }
    },
   
  }
  let text = {text1 : 'CEO Photo' , text2 : 'Birth Certificate Photo'}
  if(activeStep === 0){
     text = {text1 : 'CEO Photo' , text2 : 'Birth Certificate Photo'}
    }else if(activeStep === 1 ){
     text = {text1 : 'Salon Certificate Photo' , text2 : 'Online Business License'}
    }else if(activeStep === 2)
     text = {text1 : 'Salon Photo' , text2 : ''}
    return (
      <>
        <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet"/>
        </Head>
        <div className='bg-mainbg h-[100vh] flex justify-between pt-7 px-16 w-full'>
      <div className='pt-1 pb-8 w-[29%]'>
        <FormHeader text={'Welcome To Etok Community'} text2={`Sign In Salon `}/>  
        <Box className="mt-5" >
        <Stepper
      sx={stepStyle}
        activeStep={activeStep}
        alternativeLabel>
        {steps.map((label,index) => (
          <Step id={`step${index}`} key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
       </Stepper>
        </Box>
          <form className='pt-3' onSubmit={formik.handleSubmit}>
            <div>    
          <TextField size='small' variant="standard" className='mb-1.5' fullWidth
           id="name" name="name" label={whoIsHere.ceo ? 'CEO name :' : 'Name :'}type="name"
          value={formik.values.password} onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
            <TextField size='small' variant="standard" className='my-1.5' fullWidth
           id="password" name="password" label="CEO Liesens Code :" type="password"
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
           id="number" name="number" label='CEO number :' type="number"
          value={formik.values.password} onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField size='small' variant="standard" className='mt-1.5 mb-1' fullWidth
           id="password" name="password" label="Address :" type="password"
          value={formik.values.password} onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />  
          </div>
        <MainButton text={activeStep === 2 ?'Submit' :'Next'} />
        <div 
        className={activeStep === 0 ? 'hidden ': 'block'}>
        <SecondButton text={'Back'} />
        </div>
        <div className='flex justify-center'>
        <div className='mt-3'>
            <span>Already Have An Account ?</span>
            <span className='mx-3 text-[#1F59EE]'>Log In</span>
        </div>
        </div>
     
      </form>
      </div> 
   <div className='w-[62%]'>
           <SalonSignInImageSec 
        image={'../../images/SalonSignIN.png'}  text1={text.text1} text2={text.text2} />
        </div>
        {/* <SalonModaLogin /> */}
        {/* <SalonModal2 /> */}
        {/* <SalonModal3 /> */}

   </div>
   </>
    );
};

export default SalonSignIn;