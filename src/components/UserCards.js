import React from 'react';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import UserCard from './UserCard';

const UserCards = ({ users }) => {

  const theme = createTheme({
    components: {

      MuiGrid: {
        styleOverrides: {
          root: {
            padding: '4rem'
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3}>
        {
          users.map((user, index) => <UserCard user={user} key={index}/>)
        }
      </Grid>
    </ThemeProvider>
  );
};

export default UserCards;