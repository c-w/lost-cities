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
import i8n from './i8n';

const useStyles = makeStyles(theme => ({
  winnerIcon: {
    paddingLeft: theme.spacing(1),
    color: '#D4AF37',
  },
  totalRow: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

function GameEnd({ player1Scores, player2Scores, onActionClick }) {
  const classes = useStyles();

  const player1Score = sum(player1Scores);
  const player2Score = sum(player2Scores);

  const winnerIcon = (
    <FontAwesomeIcon
      className={classes.winnerIcon}
      icon="trophy"
      aria-label={i8n.winner}
    />
  );

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="srOnly">{i8n.label}</Typography>
              </TableCell>
              <TableCell align="center">
                <FontAwesomeIcon icon={PLAYER_1} aria-label={i8n.player1} />
                {player1Score > player2Score && winnerIcon}
              </TableCell>
              <TableCell align="center">
                <FontAwesomeIcon icon={PLAYER_2} aria-label={i8n.player2} />
                {player2Score > player1Score && winnerIcon}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {zip(player1Scores, player2Scores).map(([score1, score2], i) => (
              <TableRow key={i}>
                <TableCell align="center">{i8n.round.format(i + 1)}</TableCell>
                <TableCell align="center">{score1}</TableCell>
                <TableCell align="center">{score2}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className={classes.totalRow} align="center">
                {i8n.total}
              </TableCell>
              <TableCell className={classes.totalRow} align="center">
                {player1Score}
              </TableCell>
              <TableCell className={classes.totalRow} align="center">
                {player2Score}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <ActionButton onClick={onActionClick} icon="redo" label={i8n.restart} />
    </Fragment>
  );
}

export default GameEnd;
