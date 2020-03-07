import React, { Fragment } from 'react';
import sum from 'lodash.sum';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ActionButton from './ActionButton';
import { PLAYER_1, PLAYER_2 } from './game';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function GameEnd({ player1Scores, player2Scores, onActionClick }) {
  const player1Score = sum(player1Scores);
  const player2Score = sum(player2Scores);

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Player</TableCell>
              <TableCell align="center">Round 1</TableCell>
              <TableCell align="center">Round 2</TableCell>
              <TableCell align="center">Round 3</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Winner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <FontAwesomeIcon icon={PLAYER_1} aria-label="Player 1" />
              </TableCell>
              <TableCell align="center">{player1Scores[0]}</TableCell>
              <TableCell align="center">{player1Scores[1]}</TableCell>
              <TableCell align="center">{player1Scores[2]}</TableCell>
              <TableCell align="center">{player1Score}</TableCell>
              <TableCell align="center">
                {player1Score > player2Score && (
                  <FontAwesomeIcon icon="trophy" aria-label="Yes" />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <FontAwesomeIcon icon={PLAYER_2} aria-label="Player 2" />
              </TableCell>
              <TableCell align="center">{player2Scores[0]}</TableCell>
              <TableCell align="center">{player2Scores[1]}</TableCell>
              <TableCell align="center">{player2Scores[2]}</TableCell>
              <TableCell align="center">{player2Score}</TableCell>
              <TableCell align="center">
                {player2Score > player1Score && (
                  <FontAwesomeIcon icon="trophy" aria-label="Yes" />
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <ActionButton onClick={onActionClick} icon="redo" label="Restart" />
    </Fragment>
  );
}

export default GameEnd;
