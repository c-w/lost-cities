import React from 'react';
import Typography from '@material-ui/core/Typography';
import ActionButton from './ActionButton';
import { PLAYER_1, PLAYER_2 } from './game';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Highscore({ player1Score, player2Score, onActionClick }) {
  const [ winner, label ] = player1Score > player2Score
    ? [ PLAYER_1, 'Player 1' ]
    : [ PLAYER_2, 'Player 2' ];

  return (
    <React.Fragment>
      <Typography align="center" display="block">
        <FontAwesomeIcon icon={winner} aria-label={label} />&nbsp;wins
      </Typography>

      <ActionButton
        onClick={onActionClick}
        icon="redo"
        label="Restart"
      />
    </React.Fragment>
  );
}

export default Highscore;
