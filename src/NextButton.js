import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function NextButton({ onClick }) {
  const classes = useStyles();

  return (
    <Fab
      color="primary"
      aria-label="Next round"
      className={classes.fab}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faCheck} />
    </Fab>
  );
}

export default NextButton;
