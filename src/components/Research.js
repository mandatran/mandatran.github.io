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
      </Box>
  );
}
