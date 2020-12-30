import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0),
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    '& > *': {
      color: 'black',
    },
  },
}));

export default function Socials() {
  const classes = useStyles();
  return (
    <Typography className={classes.root}>
      <Link href="https://drive.google.com/file/d/1xqXFb9SkYOkVHRwDbVKhlSnWAfpS0Tqy/view?usp=sharing" target="_blank">Resume</Link>
      <Link href="mailto:mandatran3@gmail.com" target="_blank">Email</Link>
      <Link href="https://www.linkedin.com/in/manda-tran/" target="_blank">LinkedIn</Link>
      <Link href="https://github.com/mandatran" target="_blank">GitHub</Link>
    </Typography>
  );
}
