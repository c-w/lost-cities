import React, { Fragment } from 'react';
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
  return (
    <Typography variant="subtitle1" component="span" className={className}>
      Round {gameRound}
    </Typography>
  );
}

function PlayerScore({ score, avatar, active, label }) {
  return (
    <Badge
      badgeContent={score}
      color="secondary"
      aria-label={label}
      showZero
      max={999}
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
          {gameRound != null && (
            <Fragment>
              <GameRound className={classes.gameRound} gameRound={gameRound} />
              <PlayerScore
                label={
                  activePlayer === PLAYER_1
                    ? 'Player 1 score, active player'
                    : 'Player 1 score'
                }
                score={player1Score}
                avatar={PLAYER_1}
                active={activePlayer === PLAYER_1}
              />
              <PlayerScore
                label={
                  activePlayer === PLAYER_2
                    ? 'Player 2 score, active player'
                    : 'Player 2 score'
                }
                score={player2Score}
                avatar={PLAYER_2}
                active={activePlayer === PLAYER_2}
              />
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
