import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PLAYER_1, PLAYER_2 } from './game';
import i8n from './i8n';

const useStyles = makeStyles(theme => ({
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
      {i8n.lostCities}
    </Typography>
  );
}

function GameRound({ className, gameRound }) {
  return (
    <Typography variant="subtitle1" component="span" className={className}>
      {i8n.round.format(gameRound)}
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
      <IconButton
        color="inherit"
        disabled={!active}
        aria-label={active ? i8n.activePlayer : null}
      >
        <FontAwesomeIcon icon={avatar} />
      </IconButton>
    </Badge>
  );
}

function TopBar({ gameRound, player1Score, player2Score, activePlayer }) {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <Title className={classes.title} gameRound={gameRound} />
        {gameRound != null && (
          <Fragment>
            <GameRound className={classes.gameRound} gameRound={gameRound} />
            <PlayerScore
              label={i8n.player1Score}
              score={player1Score}
              avatar={PLAYER_1}
              active={activePlayer === PLAYER_1}
            />
            <PlayerScore
              label={i8n.player2Score}
              score={player2Score}
              avatar={PLAYER_2}
              active={activePlayer === PLAYER_2}
            />
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
