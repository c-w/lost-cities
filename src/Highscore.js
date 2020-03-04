import React from 'react';
import Typography from '@material-ui/core/Typography';
import ActionButton from './ActionButton';
import { PLAYER_1, PLAYER_2 } from './game';
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Highscore({ scores, onActionClick }) {
  const [ winner, label ] = scores[PLAYER_1] > scores[PLAYER_2]
    ? [ PLAYER_1, 'Player 1' ]
    : [ PLAYER_2, 'Player 2' ];

  return (
    <React.Fragment>
      <Typography align="center" display="block">
        <FontAwesomeIcon icon={winner} aria-label={label} />&nbsp;wins
      </Typography>

      <ActionButton
        onClick={onActionClick}
        icon={faRedo}
        label="Restart"
      />
    </React.Fragment>
  );
}

export default Highscore;
