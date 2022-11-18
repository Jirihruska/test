import React, { InputHTMLAttributes } from "react";
import { TextField } from '@mui/material';
import { Grid, Box } from '@mui/material';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { useState, useEffect } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type: string;
  required: boolean;
  error: boolean;
  setCantSubmit: React.Dispatch<React.SetStateAction<any>>
  register: UseFormRegister<FieldValues>;
}

const Input: React.FC<InputProps> = ({ name, type, register, required, setCantSubmit }) => {

  const [invalid, setInvalid] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>('');

  const registerHandler = register(name, { required });

  const validateHandler = (v: string) => {
    setCantSubmit(true);
    ['name', 'surname', 'password'].forEach((input) => {
      if (input && !v) {
        setErrMsg(`${name} is not filled!`)
        setInvalid(true);
        return setCantSubmit(true);
      }
    })
    if (required) {
      if (['name', 'surname', 'password'].includes(name)) {
        if (!v) {
          setErrMsg(`${name} is not filled!`)
          setInvalid(true);
          return setCantSubmit(true);
        }
        if (v.length < 6) {
          setErrMsg(`${name} must be at least 6 characters!`)
          setInvalid(true);
          return setCantSubmit(true);
        }
        if (name === 'name' && !!v) {
          setInvalid(true);
          return setCantSubmit(true);
        }
        setErrMsg('');
        setInvalid(false);
        return setCantSubmit(false);
      }
      if (!v && name !== 'phone') {
        setErrMsg(`${name} is not filled!`)
        setInvalid(true);
        return setCantSubmit(true);
      }

    }
    if (name === 'email') {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v)) {
        setErrMsg(`Invalid ${name}`)
        return setInvalid(true);
      }
    }
    else {
      setErrMsg('');
      setInvalid(false);
      return setCantSubmit(false);
    };
  }

  return (
    <Grid sx={{ width: '25vw', justifyContent: 'center' }}>
      <Box sx={{ fontSize: '1.5rem' }}>{name}</Box>
      <TextField sx={{ width: '25vw', display: 'flex', justifyContent: 'center' }} error={invalid} onChange={(e: any) => { registerHandler.onChange(e); validateHandler(e.target.value); }} type={type} variant="outlined" />
      {!!errMsg && (
        <Box sx={{ color: 'red' }}>{errMsg}</Box>
      )}
    </Grid>
  )
}

export default Input