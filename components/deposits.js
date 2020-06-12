import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4" color="secondary">
      &#163;6,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 june, 2020
      </Typography>
      <div>
        <Link color="secondary" href="#" onClick={preventDefault}>
          View average
        </Link>
      </div>
    </React.Fragment>
  );
}