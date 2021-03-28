import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '3rem',
  },
}));

export default function Research() {
  const classes = useStyles();
  return (
      <Box pb={8} >
        <Typography variant="h4" component="h1" className={classes.root} gutterBottom>
            Research
        </Typography>
        <Box pb={2}>
            <Typography gutterBottom>
                My research interests include areas of security and cryptography. 
                I am interested in developing security measures to protect IoT devices, 
                particularly autonomous vehicles, analyzing Denial-of-Service attacks 
                (potential motivations, techniques, and implications), 
                and researching the evolution of consumer privacy as well as their impacts on society.
            </Typography>
        </Box>
        <Typography gutterBottom>
            I am currently an undergraduate researcher at the {' '}
            <Link href="https://www.caida.org/home/" target="_blank">
                Center for Applied Internet Data Analysis (CAIDA)
            </Link>
            , located at the San Diego Super Computer Center.
            I am working with Alberto Dainotti to develop a website and document 
            tools and data made available by {' '}
            <Link href="https://www.caida.org/funding/stardust/" target="_blank">
                STARDUST 
            </Link> {' '}
            and conducting 
            Denial-of-Sevice data analysis.
        </Typography>
      </Box>
  );
}
