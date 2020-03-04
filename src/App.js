import React from 'react';
import Highscore from './Highscore';
import Scorer from './Scorer';
import TopBar from './TopBar';
import { gameStateMachine } from './game';
import { useMachine } from '@xstate/react';

function App() {
  const [state, send] = useMachine(gameStateMachine);
  const { activePlayer, gameRound, player1Score, player2Score } = state.context;

  return (
    <React.Fragment>
      <TopBar
        gameRound={gameRound}
        player1Score={player1Score}
        player2Score={player2Score}
        activePlayer={activePlayer}
      />
      {state.matches('highscore') ? (
        <Highscore
          player1Score={player1Score}
          player2Score={player2Score}
          onActionClick={() => send('RESTART')}
        />
      ) : (
        <Scorer
          key={state.value}
          onScoreChange={payload => send({ type: 'SCORE', payload })}
          onActionClick={() => send('DONE')}
        />
      )}
    </React.Fragment>
  );
}

export default App;
