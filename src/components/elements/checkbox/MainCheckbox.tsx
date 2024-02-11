import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const MainCheckbox = (props:any) => {
    const {text } = props
    return (
        <FormControlLabel   
         sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px',fontWeight : 600 } }} 
         control={
         <Checkbox size='small' defaultChecked   
         style={{ borderRadius : '30px'}}
          sx={{   color : 'black','&.Mui-checked': {color: "black",},}}  
            />
        } 
        label={text}
         />
    );
};

export default MainCheckbox;