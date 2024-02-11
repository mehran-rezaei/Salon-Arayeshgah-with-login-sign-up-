import React from 'react';
import {  TextField } from "@mui/material";

const FormInput = () => {
    return (
        <>
         <TextField
          size='small'
          variant="standard" 
          className='my-4'
          fullWidth
        //   id="password"
        //   name="password"
        //   label="Password"
        //   type="password"
        //   value={formik.values.password}
        //   onChange={formik.handleChange}
        //   error={formik.touched.password && Boolean(formik.errors.password)}
        //   helperText={formik.touched.password && formik.errors.password}
        />
        </>
    );
};

export default FormInput;