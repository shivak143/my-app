import {FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import zIndex from '@mui/material/styles/zIndex';
import { useState } from 'react';
import './Concepts/textField.css';

function Home(){
    const theme = createTheme({
        palette: {
          ochre: {
            light: '#E9DB5D',
            dark: '#A29415',
          },
        },
      });
      const [status,setStatus]=useState([]);
  const  handleChange = (event)=>{
      const value = event.target.value;
      event.target.value="";


      setStatus(value);
      console.log("tiggered on change",status)
    }
    return (
        <>
       <ThemeProvider theme={theme}>
        <h1>This is Home Component.</h1>
        <TextField className='customTextField'  style={{margin:15}} color='ochre'  label='Name' variant='standard'/>
        <TextField className='customTextField' style={{margin:15}} label='Name' />

        <FormControl  color='ochre' >
            <InputLabel >Select</InputLabel>
            <Select variant='standard' style={{width:150}} MenuProps={zIndex} onClick={handleChange}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={1}>Active</MenuItem>
                <MenuItem value={2}>Inactive</MenuItem>
            </Select>
        </FormControl>
        <p>you Clicked {status}</p>
        </ThemeProvider>
        </>
    )
}
export default Home