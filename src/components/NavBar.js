import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      color: 'black',
      fontSize: '1rem',
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
      <Box width={1} py={3} className={classes.root} textAlign="right" >
        <Link to='/About' className='nav-link'>About</Link>
      </Box>
  );
}
