import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import services from '../services';

const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    (async () => {
      const newUserDetails = await services.getUserDetails(id);
      setUserDetails(newUserDetails);
    })();
  }, [id]);
  
  const theme = createTheme({
    components: {

      MuiListItem: {
        styleOverrides: {
          root: {
            fontSize: '0.875rem',
            paddingBottom: 0,
            paddingTop: 0
          }
        }
      },

      MuiLink: {
        styleOverrides: {
          root: {
            fontWeight: 'bold'
          }
        }
      }
    },
  });

  if(!userDetails) return null;

  return (
    <ThemeProvider theme={theme}>
      <Link href='/'>Home</Link>
      <Container fixed>
        <Card elevation={7}>
          <CardHeader title={`Name: ${userDetails.name}`}/>
          <Divider/>
          <CardContent>
            <Typography variant='body2' component="p">
              { `Username: ${userDetails.username}` }
            </Typography>
            <Typography variant='body2' component="p">
              { `Email: ${userDetails.email}` }
            </Typography>
            <Typography variant='body2' component="p">
              { `Phone: ${userDetails.phone}` }
            </Typography>
            <Typography variant='body2' component="p">
              { `Company: ${userDetails.company.name}` }
            </Typography>
            <Typography variant='body2' component="p">
              { `Website: ${userDetails.website}` }
            </Typography>
            <Divider/>
            <List>
              <Typography variant='body2' component="p">
                Address:
              </Typography>
              <ListItem>
                <ArrowRightIcon/>
                { `Street: ${userDetails.address.street}` }
              </ListItem>
              <ListItem>
                <ArrowRightIcon/>
                  { `Suite: ${userDetails.address.suite}` }
              </ListItem>
              <ListItem>
                <ArrowRightIcon/>
                  { `City: ${userDetails.address.city}` }
              </ListItem>
              <ListItem>
                <ArrowRightIcon/>
                  { `Zipcode: ${userDetails.address.zipcode}` }
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default UserDetails;