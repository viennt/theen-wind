import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getSettingColorName } from 'Stores/reducers/settingsStore';

class TheenColorPickerRow extends PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    const { reduxColorName, color } = this.props;
    const oldActive = reduxColorName === color;
    const newActive = nextProps.reduxColorName === color;
    return oldActive || newActive;
  }

  render() {
    const { reduxColorName, color, children } = this.props;
    const active = reduxColorName === color;
    const classNameActiveWrapper = active ?
      `border-${color}-500 bg-${color}-100` :
      `border-transparent hover:border-${color}-200 bg-${color}-50`;
    const classNameWrapper = 'grid grid-cols-7 gap-3 transition-all px-2 py-1 ' +
      `border border-solid ${classNameActiveWrapper}`;

    const classNameLabel = `col-span-2 flex items-center justify-start text-${color}-500 uppercase text-sm`

    return (
      <div className={classNameWrapper}>
        <div className={classNameLabel}>{color}</div>
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxColorName: getSettingColorName(state),
})
export default connect(mapStateToProps)(TheenColorPickerRow)
