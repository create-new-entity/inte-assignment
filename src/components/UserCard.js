import React from 'react';

import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const UserCard = ({ user }) => {

  const navigate = useNavigate();

  const linkColor = '#29ACA7';

  const theme = createTheme({
    components: {

      MuiCardHeader: {
        styleOverrides: {
          root: {
            flexDirection: 'column'
          },
          title: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            marginTop: '1rem',
            fontWeight: 'bold',
          },
          subheader: {
            fontStyle: 'italic',
            textAlign: 'center'
          },
          avatar: {
            margin: 0
          }
        },
      },

      MuiAvatar: {
        styleOverrides: {
          root: {
            height: 80,
            width: 80
          }
        }
      },

      MuiLink: {
        styleOverrides: {
          root: {
            color: linkColor,
            textDecorationColor: linkColor
          }
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            marginTop: '1rem',
            marginBottom: '0.3rem'
          }
        }
      }
    },
  });

  const clickHandler = () => {
    navigate(`/${user.id}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Card elevation={5}>
          <Stack direaction="column" alignItems="center">
            <CardHeader
              avatar={<Avatar alt={user.name} src={user.name}/>}
              title={user.name}

              subheader={`@${user.username}`}
              subheaderTypographyProps={{
                classes: theme
              }}
            />
            <Link href="#" variant="body2">
              { `http://${user.website}` }
            </Link>
            <CardActions>
              <Button variant="contained" size="small" onClick={clickHandler}>More Details</Button>
            </CardActions>
          </Stack>
        </Card>
      </Grid>
    </ThemeProvider>
  );
};

export default UserCard;