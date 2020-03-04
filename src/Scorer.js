import React, { PureComponent } from 'react';
import fromPairs from 'lodash.frompairs';
import sum from 'lodash.sum';
import withStyles from '@material-ui/core/styles/withStyles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActionButton from './ActionButton';
import ControlledCheckbox from './ControlledCheckbox';
import { CARDS, EXPEDITIONS, calculateScore, isMultiplier } from './game';

class ExpeditionCards extends PureComponent {
  constructor(props) {
    super(props);

    this.state = fromPairs(CARDS.map(card => [card, false]));

    this.ColorCheckbox = withStyles({
      root: {
        color: props.color,
        '&$checked': {
          color: props.color,
        },
      },
      checked: {},
    })(props => <ControlledCheckbox color="default" {...props} />);
  }

  onChange = ({ data, checked }) => {
    const { onChange } = this.props;

    const newState = { ...this.state };
    newState[data] = checked;

    const cards = Object.entries(newState)
      .filter(([_card, checked]) => checked)
      .map(([card, _checked]) => parseInt(card, 10));

    this.setState(newState, () => onChange(calculateScore(cards)));
  };

  render() {
    const { color } = this.props;

    return (
      <FormControl component="fieldset">
        <FormGroup>
          {CARDS.map(card => (
            <FormControlLabel
              key={card}
              control={
                <this.ColorCheckbox data={card} onChange={this.onChange} />
              }
              label={
                <div style={{ color }}>
                  {isMultiplier(card) ? (
                    <FontAwesomeIcon icon="handshake" aria-label="Investment" />
                  ) : (
                    <Typography>{card}</Typography>
                  )}
                </div>
              }
            />
          ))}
        </FormGroup>
      </FormControl>
    );
  }
}

class ExpeditionPanel extends PureComponent {
  state = {
    score: null,
  };

  onChange = score => {
    const { color, onChange } = this.props;

    this.setState({ score }, () => onChange({ color, score }));
  };

  render() {
    const { color } = this.props;
    const { score } = this.state;

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography style={{ color }}>
            <FontAwesomeIcon icon="compass" />
            &nbsp;
            <Typography variant="body1" component="span">
              {score == null ? 'Click to start expedition' : `Score: ${score}`}
            </Typography>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ExpeditionCards color={color} onChange={this.onChange} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
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
            <Grid key={color} item xs={12} sm={6}>
              <ExpeditionPanel color={color} onChange={this.onScoreChange} />
            </Grid>
          ))}
        </Grid>
        <ActionButton onClick={this.onActionClick} icon="check" label="Done" />
      </React.Fragment>
    );
  }
}

export default Scorer;
