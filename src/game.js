import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import { Machine, assign } from 'xstate';
import { partition, sum } from './utils';

export const PLAYER_1 = 'user-astronaut';
export const PLAYER_2 = 'user-ninja';

const MULTIPLIERS = [-1, -2, -3];

export function isMultiplier(card) {
  return MULTIPLIERS.indexOf(card) !== -1;
}

export const CARDS = [...MULTIPLIERS, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const EXPEDITIONS = [
  yellow[800],
  blue[500],
  grey[500],
  green[500],
  red[500],
];

export function calculateScore(cards) {
  if (cards.length === 0) {
    return 0;
  }

  const [multipliers, numbers] = partition(cards, isMultiplier);

  const score = sum(numbers) - 20;
  const multiplier = multipliers.length + 1;
  const lengthBonus = cards.length >= 8 ? 20 : 0;

  return score * multiplier + lengthBonus;
}

export const gameStateMachine = Machine(
  {
    id: 'game',
    initial: 'round1Player1',
    context: {
      gameRound: 1,
      activePlayer: PLAYER_1,
      player1Scores: [],
      player2Scores: [],
    },
    states: {
      round1Player1: {
        entry: ['setRound1', 'setPlayer1'],
        on: {
          DONE: { target: 'round1Player2', actions: ['setPlayer1Score'] },
        },
      },
      round1Player2: {
        entry: ['setRound1', 'setPlayer2'],
        on: {
          DONE: { target: 'round2Player1', actions: ['setPlayer2Score'] },
        },
      },
      round2Player1: {
        entry: ['setRound2', 'setPlayer1'],
        on: {
          DONE: { target: 'round2Player2', actions: ['setPlayer1Score'] },
        },
      },
      round2Player2: {
        entry: ['setRound2', 'setPlayer2'],
        on: {
          DONE: { target: 'round3Player1', actions: ['setPlayer2Score'] },
        },
      },
      round3Player1: {
        entry: ['setRound3', 'setPlayer1'],
        on: {
          DONE: { target: 'round3Player2', actions: ['setPlayer1Score'] },
        },
      },
      round3Player2: {
        entry: ['setRound3', 'setPlayer2'],
        on: {
          DONE: { target: 'highscore', actions: ['setPlayer2Score'] },
        },
      },
      highscore: {
        entry: assign({ gameRound: null, activePlayer: null }),
        exit: assign({
          player1Scores: [],
          player2Scores: [],
        }),
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
      setPlayer1Score: assign({
        player1Scores: (context, event) => [
          ...context.player1Scores,
          event.payload,
        ],
      }),
      setPlayer2Score: assign({
        player2Scores: (context, event) => [
          ...context.player2Scores,
          event.payload,
        ],
      }),
    },
  }
);
