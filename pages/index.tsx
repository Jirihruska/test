import styles from '../styles/Home.module.css';
import Header from '../components/header/Header';
import Input from '../components/general/Input';
import { Grid, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputMock, InputData } from '../types/Mock';

export default function Home() {
  const { register, handleSubmit } = useForm<InputData>();

  const mock = [
    { id: 1, name: 'name' },
    { id: 2, name: 'surname' },
    { id: 3, name: 'email' },
    { id: 4, name: 'phone' },
  ]
  return (
    <div className={styles.container}>
      <Header />
      <Grid sx={{ display: "flex", justifyContent: "center", direction: 'row' }}>
        <Box p={4}>
          <form onSubmit={handleSubmit(data => console.log(data))}>
            {mock.map((i: InputMock) => {
              return (
                <Box p={2} key={i.id}>
                  <Input label={i.name} register={register} />
                </Box>
              )
            })}
            <input type="submit" />
          </form>
        </Box>
      </Grid>
    </div>
  )
}
