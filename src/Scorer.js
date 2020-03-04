import React, { PureComponent, useState } from 'react';
import fromPairs from 'lodash.frompairs';
import sum from 'lodash.sum';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActionButton from './ActionButton';
import { CARDS, EXPEDITIONS, calculateScore, isMultiplier } from './game';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: `calc(100% - ${theme.spacing(1) * 2}px)`,
  },
  score: {
    marginLeft: theme.spacing(1),
  },
}));

function Expedition({ color, onScoreChange }) {
  const [cards, setCards] = useState([]);
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
        {isMultiplier(card) ? (
          <FontAwesomeIcon icon="handshake" />
        ) : (
          <ListItemText primary={card} />
        )}
      </div>
    </MenuItem>
  );

  const renderValue = cards => (
    <Typography style={{ color }}>
      <FontAwesomeIcon icon="compass" />
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

class Scorer extends PureComponent {
  state = fromPairs(EXPEDITIONS.map(color => [color, 0]));

  onScoreChange = ({ color, score }) => this.setState({ [color]: score });

  onActionClick = () =>
    this.props.onActionClick(sum(Object.values(this.state)));

  render() {
    return (
      <React.Fragment>
        <Grid container>
          {EXPEDITIONS.map(color => (
            <Grid key={color} item xs={12} sm={4}>
              <Expedition color={color} onScoreChange={this.onScoreChange} />
            </Grid>
          ))}
        </Grid>
        <ActionButton onClick={this.onActionClick} icon="check" label="Done" />
      </React.Fragment>
    );
  }
}

export default Scorer;
