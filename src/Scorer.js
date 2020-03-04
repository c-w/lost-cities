import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faCompass } from '@fortawesome/free-solid-svg-icons/faCompass';
import { faHandshake } from '@fortawesome/free-solid-svg-icons/faHandshake';
import ActionButton from './ActionButton';
import { CARDS, EXPEDITIONS, calculateScore } from './game'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  score: {
    marginLeft: theme.spacing(1),
  },
}));

function Expedition({ color, onScoreChange }) {
  const [ cards, setCards ] = useState([]);
  const classes = useStyles();

  const ColorCheckbox = withStyles({
    root: {
      color,
      '&$checked': {
        color,
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

  const onChange = event => {
    const cards = event.target.value;
    setCards(cards);
    onScoreChange({ color, score: calculateScore(cards) });
  };

  const renderItem = card => (
    <MenuItem key={card} value={card}>
      <ColorCheckbox checked={cards.indexOf(card) !== -1} />
      <div style={{ color }}>
        {card > 0
          ? <ListItemText primary={card} />
          : <FontAwesomeIcon icon={faHandshake} />}
      </div>
    </MenuItem>
  );

  const renderValue = (cards) => (
    <Typography style={{ color }}>
      <FontAwesomeIcon icon={faCompass} />
      <span className={classes.score}>{calculateScore(cards) || null}</span>
    </Typography>
  );

  return (
    <FormControl className={classes.formControl}>
      <Select
        displayEmpty
        multiple
        onChange={onChange}
        renderValue={renderValue}
        value={cards}
      >
        {CARDS.map(renderItem)}
      </Select>
    </FormControl>
  );
}

function Scorer({ onScoreChange, onActionClick }) {
  return (
    <React.Fragment>
      {EXPEDITIONS.map(color =>
        <Expedition
          key={color}
          color={color}
          onScoreChange={onScoreChange}
        />
      )}
      <ActionButton
        onClick={onActionClick}
        icon={faCheck}
        label="Done"
      />
    </React.Fragment>
  );
}

export default Scorer;
