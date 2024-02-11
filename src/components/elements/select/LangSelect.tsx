import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const LangSelect = () => {
    const [age, setAge] = React.useState('English');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value)
    }
    return (
    //     <div>
    //         <select name="" id="" className='bg-mainblack text-white py-2 px-6'>
    //             <option value="" key="">English</option>
    //             <option value="" key="">Persian</option>
    //         </select>
    //     </div>
    // );

    // <Select
    // inputProps={{ 'aria-label': 'Without label' }}
    //     sx={{
    //         "& .MuiSvgIcon-root": {
    //             color: "white"
    //         }
    //     }}
    // size='small'
    //   value={'age'}
    //   defaultValue='English'
    //   placeholder='English'
    //   className='bg-mainblack text-white  '
    //   onChange={handleChange}
    //   >
    //   <MenuItem  value={10}>English</MenuItem>
    //   <MenuItem                value={20}>Persian</MenuItem>
    // </Select>
    <FormControl sx={{ m: 1, minWidth: 130 }}>
    <Select
           sx={{
          "& .MuiSvgIcon-root": {
                color: "white"}}}
        size='small'
      className='bg-mainblack text-white  '
      value={age}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem value={'English'}>English</MenuItem>
      <MenuItem value={'Persian'}>Persian</MenuItem>
    </Select>

  </FormControl>


    )}

export default LangSelect;