import React from 'react';
import Grid from '@mui/material/Grid';

import UserCard from './UserCard';

const UserCards = ({ users }) => {
  return (
    <Grid container spacing={3}>
      {
        users.map((user, index) => <UserCard user={user} key={index}/>)
      }
    </Grid>
  );
};

export default UserCards;