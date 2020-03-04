import React, { Fragment, PureComponent } from 'react';
import GameEnd from './GameEnd';
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

  onScorerClick = payload => this.service.send({ type: 'DONE', payload });

  onHighscoreClick = payload => this.service.send({ type: 'RESTART', payload });

  render() {
    const { current } = this.state;

    const {
      activePlayer,
      gameRound,
      player1Score,
      player2Score,
    } = current.context;

    return (
      <Fragment>
        <TopBar
          gameRound={gameRound}
          player1Score={player1Score}
          player2Score={player2Score}
          activePlayer={activePlayer}
        />
        {current.matches('highscore') ? (
          <GameEnd
            player1Score={player1Score}
            player2Score={player2Score}
            onActionClick={this.onHighscoreClick}
          />
        ) : (
          <Scorer key={current.value} onActionClick={this.onScorerClick} />
        )}
      </Fragment>
    );
  }
}

export default App;
