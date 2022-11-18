import React from 'react';
import { Grid, Box } from '@mui/material';
import { amber } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <Grid sx={{ alignItems: 'center', justifyContent: 'center', direction: 'row' }} p={2} bgcolor={amber[500]} container>
      <Grid item xs={11}>
        <Box fontSize={24}>Some title</Box>
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center" }} alignItems='center' item xs={1}>
        <MenuIcon fontSize='large' />
      </Grid>
    </Grid >
  )
}

export default Header;