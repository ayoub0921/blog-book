import React from 'react'
import { TextField } from '@mui/material';
import { useField } from 'formik'

const TextfieldWrapper = ({
  name,
  ...otherProps
}) => {
  const [field,mata] = useField(name) ;

  const configTextField = {
    variant:"outlined",
    ...field,
    ...otherProps
  };

  console.log(configTextField.variant);

  if(mata && mata.touched && mata.error){
    configTextField.error = true
    configTextField.helperText = mata.error

  }
   
  

  return (
    <TextField {...configTextField} style={{width:"100%"}} />
  )
}

export default TextfieldWrapper;