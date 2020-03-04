import React, { PureComponent } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class ControlledCheckbox extends PureComponent {
  state = {
    checked: false,
  };

  onChange = event => {
    const { onChange, data } = this.props;
    const { checked } = event.target;

    this.setState({ checked }, () => onChange({ checked, data }));
  };

  render() {
    const { onChange, data, ...props } = this.props;
    const { checked } = this.state;

    return <Checkbox onChange={this.onChange} checked={checked} {...props} />;
  }
}

export default ControlledCheckbox;
