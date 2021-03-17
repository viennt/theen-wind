import React from "react";
import { connect } from 'react-redux';

import TheenPickerCell from '../TheenPickerCell';
import { updating } from '../../Stores/reducers/settingsStore';

function TheenColorPickerCell({ activeColor = {}, updatingSettings, color, opacity }) {
  const active = activeColor.name === color && activeColor.normal === opacity;

  const settings = { name: color, normal: opacity, lighter: opacity - 100, darker: opacity + 100 };
  const onClick = () => updatingSettings({ colors: { primary: settings }})

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

const mapStateToProps = state => ({
  activeColor: state.settings.data.colors?.primary,
})
const mapDispatchToProps = dispatch => ({
  updatingSettings: (settings) => dispatch(updating(settings)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenColorPickerCell);
