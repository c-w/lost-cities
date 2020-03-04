import React, { PureComponent } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons/faCompass';
import { faHandshake } from '@fortawesome/free-solid-svg-icons/faHandshake';
import { CARDS, EXPEDITIONS, calculateScore } from './game'

class Expedition extends PureComponent {
  state = { cards: [] };

  get Checkbox() {
    const { color } = this.props;

    return withStyles({
      root: {
        color,
        '&$checked': {
          color,
        },
      },
      checked: {},
    })(props => <Checkbox color="default" {...props} />);
  }

  onChange = event => {
    const { color, onScoreChange } = this.props;
    const cards = event.target.value;

    this.setState({ cards }, () => onScoreChange(color, calculateScore(cards)));
  };

  renderItem = card => {
    const { color } = this.props;
    const { cards } = this.state;

    return (
      <MenuItem key={card} value={card}>
        <this.Checkbox checked={cards.indexOf(card) !== -1} />
        <div style={{ color }}>
          {card > 0
            ? <ListItemText primary={card} />
            : <FontAwesomeIcon icon={faHandshake} />}
        </div>
      </MenuItem>
    );
  };

  renderValue = (cards) => {
    const { color } = this.props;

    return (
      <div style={{ color }}>
        <FontAwesomeIcon icon={faCompass} />
        {calculateScore(cards) || null}
      </div>
    );
  };

  render() {
    const { cards } = this.state;

    return (
      <Select
        displayEmpty
        multiple
        onChange={this.onChange}
        renderValue={this.renderValue}
        value={cards}
      >
        {CARDS.map(this.renderItem)}
      </Select>
    );
  };
}

function Scorer({ onScoreChange }) {
  return (
    <React.Fragment>
      {EXPEDITIONS.map(color =>
        <Expedition
          key={color}
          color={color}
          onScoreChange={onScoreChange}
        />
      )}
    </React.Fragment>
  );
}

export default Scorer;
