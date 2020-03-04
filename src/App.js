import React from 'react';
import Highscore from './Highscore';
import Scorer from './Scorer';
import TopBar from './TopBar';
import { gameStateMachine } from './game';
import { useMachine } from '@xstate/react';

function App() {
  const [ state, send ] = useMachine(gameStateMachine);
  const { activePlayer, gameRound, scores } = state.context;

  return (
    <React.Fragment>
      <TopBar
        gameRound={gameRound}
        scores={scores}
        activePlayer={activePlayer}
      />
      {state.matches('end')
        ?
          <Highscore
            scores={scores}
            onActionClick={() => send('RESTART')}
          />
        :
          <Scorer
            key={state.value}
            onScoreChange={payload => send({ type: 'SCORE', payload })}
            onActionClick={() => send('DONE')}
          />
      }
    </React.Fragment>
  );
}

export default App;
