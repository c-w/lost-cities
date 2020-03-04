import React, { Fragment } from 'react';
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

function Highscore({ player1Score, player2Score, onActionClick }) {
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Player</TableCell>
              <TableCell align="center">Score</TableCell>
              <TableCell align="center">Winner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <FontAwesomeIcon icon={PLAYER_1} aria-label="Player 1" />
              </TableCell>
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

export default Highscore;
