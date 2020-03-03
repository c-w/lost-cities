import React, { useState } from 'react';
import TopBar from './TopBar';

function App() {
  const [gameRound, setGameRound] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  return (
    <React.Fragment>
      <TopBar
        gameRound={gameRound}
        player1Score={player1Score}
        player2Score={player2Score}
      />
    </React.Fragment>
  );
}

export default App;
