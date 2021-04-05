import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import TheenPickerCell from 'Components/TheenPickerCell';
import {
  getSettingColorName,
  getSettingColorOpacity,
  updating
} from 'Stores/reducers/settingsStore';

class TheenColorPickerCell extends PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    const { reduxColorName, reduxColorOpacity, color, opacity } = this.props;
    const oldActive = reduxColorName === color && reduxColorOpacity === opacity;
    const newActive = nextProps.reduxColorName === color && nextProps.reduxColorOpacity === opacity;
    return oldActive || newActive;
  }

  render() {
    const { reduxColorName, reduxColorOpacity, color, opacity, updatingSettings } = this.props;
    const active = reduxColorName === color && reduxColorOpacity === opacity;

    const settings = { name: color, normal: opacity, lighter: opacity - 100, darker: opacity + 100 };
    const onClick = () => updatingSettings({ colors: settings })

    return (
      <TheenPickerCell
        hideLabel
        label={opacity}
        active={active}
        color={color}
        opacity={opacity}
        activeOpacity={opacity}
        onClick={onClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  reduxColorName: getSettingColorName(state),
  reduxColorOpacity: getSettingColorOpacity(state),
})
const mapDispatchToProps = dispatch => ({
  updatingSettings: (settings) => dispatch(updating(settings)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenColorPickerCell);
