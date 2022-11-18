import styles from '../styles/Home.module.css';
import Header from '../components/header/Header';
import Input from '../components/general/Input';
import { Grid, Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { RegistrationInputData, RegistrationInputFields } from '../types/Registration';
import { mock } from '../mock/Registration';
import { useState } from 'react';

export default function Home() {
  const { register, handleSubmit } = useForm<RegistrationInputFields>();
  const [cantSubmit, setCantSubmit] = useState<boolean>(true);

  const inputsHandler = (data: RegistrationInputFields) => {
    console.log(data);
  }

  return (
    <div className={styles.container}>
      <Header />
      <Grid sx={{ display: "flex", justifyContent: "center", direction: 'row' }}>
        <Box sx={{ display: "flex", justifyContent: "center", direction: 'column' }} p={2}>
          <form onSubmit={handleSubmit(data => inputsHandler(data))}>
            {mock.map((i: RegistrationInputData) => {
              return (
                <Box p={2} key={i.id}>
                  <Input name={i.name}
                    register={register}
                    type={i.type}
                    required={i.required}
                    setCantSubmit={setCantSubmit}
                  />
                </Box>
              )
            })}
            <Box p={2} textAlign='center'>
              <Button disabled={cantSubmit} color='success' type="submit" variant="contained">Register</Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </div>
  )
}
