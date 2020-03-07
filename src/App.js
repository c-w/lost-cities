import React, { Fragment, PureComponent } from 'react';
import GameEnd from './GameEnd';
import Scorer from './Scorer';
import TopBar from './TopBar';
import { gameStateMachine } from './game';
import sum from 'lodash.sum';
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

  onGameEndClick = payload => this.service.send({ type: 'RESTART', payload });

  render() {
    const { current } = this.state;

    const {
      activePlayer,
      gameRound,
      player1Scores,
      player2Scores,
    } = current.context;

    return (
      <Fragment>
        <TopBar
          gameRound={gameRound}
          player1Score={sum(player1Scores)}
          player2Score={sum(player2Scores)}
          activePlayer={activePlayer}
        />
        {current.matches('highscore') ? (
          <GameEnd
            player1Scores={player1Scores}
            player2Scores={player2Scores}
            onActionClick={this.onGameEndClick}
          />
        ) : (
          <Scorer key={current.value} onActionClick={this.onScorerClick} />
        )}
      </Fragment>
    );
  }
}

export default App;
