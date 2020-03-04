import React, { PureComponent } from 'react';
import Highscore from './Highscore';
import Scorer from './Scorer';
import TopBar from './TopBar';
import { gameStateMachine } from './game';
import { interpret } from 'xstate';

class App extends PureComponent {
  state = {
    current: gameStateMachine.initialState,
  };

  service = interpret(gameStateMachine).onTransition(current =>
    this.setState({ current })
  );

  componentDidMount() {
    this.service.start();
  }

  componentWillUnmount() {
    this.service.stop();
  }

  onScoreChange = payload => this.service.send({ type: 'SCORE', payload });
  onScorerActionClick = () => this.service.send('DONE');
  onHighscoreActionClick = () => this.service.send('RESTART');

  render() {
    const { current } = this.state;

    const {
      activePlayer,
      gameRound,
      player1Score,
      player2Score,
    } = current.context;

    return (
      <React.Fragment>
        <TopBar
          gameRound={gameRound}
          player1Score={player1Score}
          player2Score={player2Score}
          activePlayer={activePlayer}
        />
        {current.matches('highscore') ? (
          <Highscore
            player1Score={player1Score}
            player2Score={player2Score}
            onActionClick={this.onHighscoreActionClick}
          />
        ) : (
          <Scorer
            key={current.value}
            onScoreChange={this.onScoreChange}
            onActionClick={this.onScorerActionClick}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
