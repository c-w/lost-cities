import React, { Fragment, PureComponent } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActionButton from './ActionButton';
import ControlledCheckbox from './ControlledCheckbox';
import { CARDS, EXPEDITIONS, calculateScore, isMultiplier } from './game';
import { fromPairs, sum } from './utils';
import i8n from './i8n';

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
      <Grid container>
        {CARDS.map(card => (
          <Grid item key={card} xs={4} sm={6} lg={12}>
            <FormControlLabel
              key={card}
              control={
                <this.ColorCheckbox data={card} onChange={this.onChange} />
              }
              label={
                <div style={{ color }}>
                  {isMultiplier(card) ? (
                    <FontAwesomeIcon
                      icon="handshake"
                      aria-label={i8n.investment}
                    />
                  ) : (
                    <Typography>{card}</Typography>
                  )}
                </div>
              }
            />
          </Grid>
        ))}
      </Grid>
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
              {score == null ? i8n.clickToStart : i8n.score.format(score)}
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
    const spacing = 2;

    return (
      <Fragment>
        <div style={{ padding: `${8 * spacing}px` }}>
          <Grid container spacing={spacing}>
            {EXPEDITIONS.map(color => (
              <Grid key={color} item xs={12} sm={6} lg>
                <ExpeditionPanel color={color} onChange={this.onScoreChange} />
              </Grid>
            ))}
          </Grid>
        </div>
        <ActionButton
          onClick={this.onActionClick}
          icon="check"
          label={i8n.done}
        />
      </Fragment>
    );
  }
}

export default Scorer;
