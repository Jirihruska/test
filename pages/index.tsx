import styles from '../styles/Home.module.css';
import Header from '../components/header/Header';
import { Grid, Box, Button, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { RegistrationInputFields } from '../types/Registration';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Home() {

  const schema = yup.object().shape({
    name: yup.string().required().min(6).max(18),
    surname: yup.string().required().min(6).max(18),
    password: yup.string().required().min(6).max(18),
    passwordAgain: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
    email: yup.string().email().required(),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegistrationInputFields>({
    resolver: yupResolver(schema),
  });

  return (
    <Box className={styles.container}>
      <Header />
      <Grid>
        <Box p={2}>
          <form onSubmit={handleSubmit(data => console.log('Data to send: ', data))}>
            <Grid lg={8}>
              <Grid className={styles.inputs} p={2} sx={{ display: "flex", flexDirection: 'column' }}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="text"
                      label="Name"
                      color="warning"
                      variant='outlined'
                      error={!!errors.name}
                      helperText={errors.name ? errors.name?.message : ''} />
                  )}
                />
              </Grid>

              <Grid p={2} sx={{ display: "flex", flexDirection: 'column' }}>
                <Controller
                  name="surname"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="text"
                      label="Surname"
                      color="warning"
                      variant='outlined'
                      error={!!errors.surname}
                      helperText={errors.surname ? errors.surname?.message : ''} />
                  )}
                />
              </Grid>

              <Grid p={2} sx={{ display: "flex", flexDirection: 'column' }}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="email"
                      label="Email"
                      color="warning"
                      variant='outlined'
                      error={!!errors.email}
                      helperText={errors.email ? errors.email?.message : ''} />
                  )}
                />
              </Grid>

              <Grid p={2} sx={{ display: "flex", flexDirection: 'column' }}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="password"
                      label="Password"
                      color="warning"
                      variant='outlined'
                      error={!!errors.password}
                      helperText={errors.password ? errors.password?.message : ''} />
                  )}
                />
              </Grid>

              <Grid p={2} sx={{ display: "flex", flexDirection: 'column' }}>
                <Controller
                  name="passwordAgain"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="password"
                      label="Password again"
                      color="warning"
                      variant='outlined'
                      error={!!errors.passwordAgain}
                      helperText={errors.passwordAgain ? errors.passwordAgain?.message : ''} />
                  )}
                />
              </Grid>

            </Grid>
            <Box p={2} textAlign='center'>
              <Button color='warning' type="submit" variant="contained">Register</Button>
            </Box>
          </form>
        </Box>
      </Grid >
    </Box >
  )
}
