import React, { useState } from 'react';
import sum from 'lodash.sum';
import NextButton from './NextButton';
import Scorer from './Scorer';
import TopBar from './TopBar';

function App() {
  const [gameRound, setGameRound] = useState(0);
  const [scores, setScores] = useState({0: {}, 1: {}});

  const onScoreChange = (color, score) => {
    const player = gameRound % 2;
    const playerScores = scores[player];
    setScores({ ...scores, [player]: { ...playerScores, [color]: score }});
  };

  return (
    <React.Fragment>
      <TopBar
        gameRound={gameRound}
        player1Score={sum(Object.values(scores[0]))}
        player2Score={sum(Object.values(scores[1]))}
      />
      <Scorer
        key={gameRound}
        onScoreChange={onScoreChange}
      />
      <NextButton onClick={() => setGameRound(gameRound + 1)} />
    </React.Fragment>
  );
}

export default App;
