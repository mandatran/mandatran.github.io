import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '3rem',
  },
  img: {
      maxWidth: '100%',
  },
  aboutTxt: {
      fontSize: '2rem',
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Box pb={8} >
        
        <Box pb={2}>
            <Typography variant="h4" component="h1" className={classes.root} gutterBottom>
                About
            </Typography>
        </Box>

        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                {/*<img src={profilePic} alt="profile pic" className={classes.img} /> */}
            </Grid>
            <Grid item xs={12} sm={8} className={classes.aboutTxt} >
                <Typography gutterBottom>
                    Hi, I’m Manda, a fourth-year undergraduate student at UCSD studying Mathematics and Computer Science.
                </Typography>
                <Typography variant="h5" component="h5" >
                    Currently 
                </Typography>
                <Typography gutterBottom>
                    An Undergraduate Researcher at CAIDA, Web Developer at CSSA at UCSD, applying to Master’s Programs in Computer Science with a focus in Security/Cryptography.
                </Typography>
                <Typography variant="h5" component="h5" >
                    Previously 
                </Typography>
                <Typography gutterBottom>
                    2x Intern at Hive Media Group, SWE Intern at ThoughtSTEM.
                </Typography>
                <Typography variant="h5" component="h5" >
                    Up Next
                </Typography>
                <Typography gutterBottom>
                    EDG Intern at MathWorks.
                </Typography>
            </Grid>
        </Grid>
    </Box>
  );
}
