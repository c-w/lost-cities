import React, { Fragment } from 'react';
import sum from 'lodash.sum';
import zip from 'lodash.zip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActionButton from './ActionButton';
import { PLAYER_1, PLAYER_2 } from './game';

const useStyles = makeStyles(theme => ({
  winnerIcon: {
    paddingLeft: theme.spacing(1),
    color: '#D4AF37',
  },
}));

function WinnerIcon() {
  const classes = useStyles();

  return (
    <FontAwesomeIcon
      className={classes.winnerIcon}
      icon="trophy"
      aria-label="Winner"
    />
  );
}

function GameEnd({ player1Scores, player2Scores, onActionClick }) {
  const player1Score = sum(player1Scores);
  const player2Score = sum(player2Scores);

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="srOnly">Label</Typography>
              </TableCell>
              <TableCell align="center">
                <FontAwesomeIcon icon={PLAYER_1} aria-label="Player 1" />
                {player1Score > player2Score && <WinnerIcon />}
              </TableCell>
              <TableCell align="center">
                <FontAwesomeIcon icon={PLAYER_2} aria-label="Player 2" />
                {player2Score > player1Score && <WinnerIcon />}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {zip(player1Scores, player2Scores).map(([score1, score2], i) => (
              <TableRow key={i}>
                <TableCell align="center">Round {i + 1}</TableCell>
                <TableCell align="center">{score1}</TableCell>
                <TableCell align="center">{score2}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">{player1Score}</TableCell>
              <TableCell align="center">{player2Score}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <ActionButton onClick={onActionClick} icon="redo" label="Restart" />
    </Fragment>
  );
}

export default GameEnd;
