import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import TheenPickerCell from '../TheenPickerCell';
import {
  getSettingPrimaryColorName,
  getSettingPrimaryColorOpacity,
  updating
} from '../../Stores/reducers/settingsStore';

class TheenColorPickerCell extends PureComponent {
  render() {
    const { reduxColorName, reduxColorOpacity, color, opacity, updatingSettings } = this.props;
    const active = reduxColorName === color && reduxColorOpacity === opacity;

    const settings = { name: color, normal: opacity, lighter: opacity - 100, darker: opacity + 100 };
    const onClick = () => updatingSettings({colors: {primary: settings}})

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
  reduxColorName: getSettingPrimaryColorName(state),
  reduxColorOpacity: getSettingPrimaryColorOpacity(state),
})
const mapDispatchToProps = dispatch => ({
  updatingSettings: (settings) => dispatch(updating(settings)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenColorPickerCell);
