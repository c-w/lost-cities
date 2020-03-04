import cloneDeep from 'lodash.clonedeep';
import fromPairs from 'lodash.frompairs';
import partition from 'lodash.partition';
import sum from 'lodash.sum';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import { Machine, assign } from 'xstate';

export const PLAYER_1 = 'user-astronaut';
export const PLAYER_2 = 'user-ninja';

export const MULTIPLIERS = [-1, -2, -3];

export const CARDS = [...MULTIPLIERS, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const EXPEDITIONS = [yellow[800], blue[500], grey[500], green[500], red[500]];

export function calculateScore(cards) {
  if (cards.length === 0) {
    return 0;
  }

  const [numbers, multipliers] = partition(cards, card => MULTIPLIERS.indexOf(card) === -1);

  const score = sum(numbers) - 20;
  const multiplier = multipliers.length + 1;
  const lengthBonus = cards.length >= 8 ? 20 : 0;

  return score * multiplier + lengthBonus;
}

const newTempScore = () => fromPairs(EXPEDITIONS.map(color => [color, 0]));

export const gameStateMachine = Machine(
  {
    id: 'game',
    initial: 'round1Player1',
    context: {
      gameRound: 1,
      activePlayer: PLAYER_1,
      player1Score: 0,
      player2Score: 0,
      tempScore: newTempScore(),
    },
    states: {
      round1Player1: {
        entry: ['setRound1', 'setPlayer1'],
        exit: ['setPlayerScore'],
        on: {
          SCORE: { actions: ['score'] },
          DONE: { target: 'round1Player2' },
        },
      },
      round1Player2: {
        entry: ['setRound1', 'setPlayer2'],
        exit: ['setPlayerScore'],
        on: {
          SCORE: { actions: ['score'] },
          DONE: { target: 'round2Player1' },
        },
      },
      round2Player1: {
        entry: ['setRound2', 'setPlayer1'],
        exit: ['setPlayerScore'],
        on: {
          SCORE: { actions: ['score'] },
          DONE: { target: 'round2Player2' },
        },
      },
      round2Player2: {
        entry: ['setRound2', 'setPlayer2'],
        exit: ['setPlayerScore'],
        on: {
          SCORE: { actions: ['score'] },
          DONE: { target: 'round3Player1' },
        },
      },
      round3Player1: {
        entry: ['setRound3', 'setPlayer1'],
        exit: ['setPlayerScore'],
        on: {
          SCORE: { actions: ['score'] },
          DONE: { target: 'round3Player2' },
        },
      },
      round3Player2: {
        entry: ['setRound3', 'setPlayer2'],
        exit: ['setPlayerScore'],
        on: {
          SCORE: { actions: ['score'] },
          DONE: { target: 'end' },
        },
      },
      end: {
        entry: assign({ gameRound: null, activePlayer: null }),
        exit: assign({ tempScore: newTempScore(), player1Score: 0, player2Score: 0 }),
        on: {
          RESTART: { target: 'round1Player1' },
        },
      },
    },
  },
  {
    actions: {
      setRound1: assign({ gameRound: 1 }),
      setRound2: assign({ gameRound: 2 }),
      setRound3: assign({ gameRound: 3 }),
      setPlayer1: assign({ activePlayer: PLAYER_1 }),
      setPlayer2: assign({ activePlayer: PLAYER_2 }),
      setPlayerScore: assign({
        player1Score: (context, _event) => {
          const { activePlayer, player1Score, tempScore } = context;
          return activePlayer === PLAYER_1
            ? player1Score + sum(Object.values(tempScore))
            : player1Score;
        },
        player2Score: (context, _event) => {
          const { activePlayer, player2Score, tempScore } = context;
          return activePlayer === PLAYER_2
            ? player2Score + sum(Object.values(tempScore))
            : player2Score;
        },
        tempScore: newTempScore(),
      }),
      score: assign({
        tempScore: (context, event) => {
          const { tempScore } = context;
          const { color, score } = event.payload;
          const newTempScore = cloneDeep(tempScore);
          newTempScore[color] = score;
          return newTempScore;
        },
      }),
    },
  },
);
