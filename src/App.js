import './style/main.scss';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Socials from './components/Socials';
import NavBar from './components/NavBar';
import Research from './components/Research';
import Projects from './components/Projects';
import About from './components/About';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '3rem',
  },
}));

function Copyright() {
  return (
    <Box pb="2rem">
      <Typography variant="body2" color="textSecondary" align="left" >
        <p>Made with &#10024; and &#127861; by Manda &#169; {new Date().getFullYear()}
        {'.'} </p>
      </Typography>
    </Box>
  );
}

export default function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className="home">

      <Box
        className="home-content"
        display="flex" 
        alignItems="center"
        py={-5}>
        <Box my={4}>
          <Typography variant="h4" component="h1" className={classes.root} gutterBottom>
            Manda is a problem solver, <br></br>
            undergraduate researcher, <br></br>
            and mathematics-computer <br></br>science student.
          </Typography>
          <Socials />
        </Box>
      </Box>

      <Copyright />

    </Container>
  );
}
