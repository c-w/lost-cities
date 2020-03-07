import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ActionButton({ onClick, label, icon }) {
  const classes = useStyles();

  return (
    <Fab
      color="primary"
      aria-label={label}
      className={classes.fab}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </Fab>
  );
}

export default ActionButton;
