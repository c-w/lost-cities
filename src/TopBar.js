import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons/faUserAstronaut';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons/faUserNinja';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function Title({ className }) {
  return (
    <Typography variant="h6" className={className}>
      Lost Cities
    </Typography>
  );
}

function GameRound({ gameRound }) {
  return (
    <Badge badgeContent={gameRound + 1} color="secondary" aria-label="Game round">
      <IconButton color="inherit">
        <FontAwesomeIcon icon={faGamepad} />
      </IconButton>
    </Badge>
  );
}

function PlayerScore({ score, avatar }) {
  return (
    <Badge badgeContent={score} color="secondary" aria-label="Player score">
      <IconButton color="inherit">
        <FontAwesomeIcon icon={avatar} />
      </IconButton>
    </Badge>
  );
}

function TopBar({ gameRound, player1Score, player2Score }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Title className={classes.title} />
          <GameRound gameRound={gameRound} />
          <PlayerScore score={player1Score} avatar={faUserAstronaut} />
          <PlayerScore score={player2Score} avatar={faUserNinja} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
