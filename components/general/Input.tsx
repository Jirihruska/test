import React from 'react';
import { TextField } from '@mui/material';

const Input = ({ label }: { label: string }, { register }: { register: any }) => {
  return (
    <TextField inputRef={...register(label)} label={label} variant="outlined" />
  )
}

export default Input