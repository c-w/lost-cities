import partition from 'lodash.partition';
import sum from 'lodash.sum';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

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
