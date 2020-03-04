import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PLAYER_1, PLAYER_2 } from './game';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  gameRound: {
    flexGrow: 1,
  },
}));

function Title({ className }) {
  return (
    <Typography variant="h6" component="h1" className={className}>
      Lost Cities
    </Typography>
  );
}

function GameRound({ className, gameRound }) {
  if (gameRound == null) {
    return null;
  }

  return (
    <Typography variant="subtitle1" component="span" className={className}>
      Round {gameRound}
    </Typography>
  );
}

function PlayerScore({ score, avatar, active }) {
  return (
    <Badge
      badgeContent={score}
      color="secondary"
      aria-label="Player score"
      showZero
      overlap="circle"
    >
      <IconButton color="inherit" disabled={!active}>
        <FontAwesomeIcon icon={avatar} />
      </IconButton>
    </Badge>
  );
}

function TopBar({ gameRound, player1Score, player2Score, activePlayer }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Title className={classes.title} gameRound={gameRound} />
          <GameRound className={classes.gameRound} gameRound={gameRound} />
          <PlayerScore
            score={player1Score}
            avatar={PLAYER_1}
            active={activePlayer === PLAYER_1}
          />
          <PlayerScore
            score={player2Score}
            avatar={PLAYER_2}
            active={activePlayer === PLAYER_2}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
