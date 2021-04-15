import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import TheenListBox from 'Components/Forms/TheenListBox';
import { getSettingFontFamily, updating } from 'Stores/reducers/settingsStore';
import { FONT_FAMILIES } from 'Utils/constants';

class TheenFontPickerFamily extends PureComponent {
  valSelected(selected) {
    const { updatingSettings } = this.props;
    updatingSettings({ fontFamily: selected })
  }

  render() {
    const { reduxFontFamily } = this.props;
    const classNameWrapper = 'grid grid-cols-7 gap-3 transition-all p-2 border border-solid border-gray-100 bg-gray-50';
    const classNameLabel = `col-span-2 flex items-center justify-start text-black uppercase text-sm`;

    return (
      <div className={classNameWrapper}>
        <div className={classNameLabel}>Font</div>
        <TheenListBox
          options={FONT_FAMILIES}
          label={reduxFontFamily.label}
          value={reduxFontFamily}
          labelStyles={{ fontFamily: `'${reduxFontFamily.value}', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif` }}
          optionStyles={option => ({ fontFamily: `'${option.value}', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif` })}
          onChange={this.valSelected.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxFontFamily: getSettingFontFamily(state),
})
const mapDispatchToProps = dispatch => ({
  updatingSettings: (settings) => dispatch(updating(settings)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenFontPickerFamily)
