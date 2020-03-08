import React, { Fragment, PureComponent } from 'react';
import sum from 'lodash.sum';
import { State, interpret } from 'xstate';
import GameEnd from './GameEnd';
import Scorer from './Scorer';
import TopBar from './TopBar';
import { gameStateMachine } from './game';

const STATE_KEY = 'game-state-machine';

class App extends PureComponent {
  state = {
    current: gameStateMachine.initialState,
  };

  service = interpret(gameStateMachine).onTransition(current => {
    this.setState({ current });

    try {
      localStorage.setItem(STATE_KEY, JSON.stringify(current));
    } catch (e) {
      console.error('LocalStorage not available', e);
    }
  });

  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem(STATE_KEY));
    const lastState = State.create(savedState || gameStateMachine.initialState);
    const currentState = gameStateMachine.resolveState(lastState);

    this.service.start(currentState);
  }

  componentWillUnmount() {
    this.service.stop();
  }

  onScorerClick = payload => this.service.send({ type: 'DONE', payload });

  onGameEndClick = () => this.service.send({ type: 'RESTART' });

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
