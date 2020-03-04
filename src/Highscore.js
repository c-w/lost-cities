import React from 'react';
import Typography from '@material-ui/core/Typography';
import ActionButton from './ActionButton';
import { PLAYER_1, PLAYER_2 } from './game';
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo';

function Highscore({ scores, onActionClick }) {
  return (
    <React.Fragment>
      <Typography align="center" display="block">
        {scores[PLAYER_1] > scores[PLAYER_2]
          ? `${PLAYER_1} wins`
          : `${PLAYER_2} wins`
        }
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
