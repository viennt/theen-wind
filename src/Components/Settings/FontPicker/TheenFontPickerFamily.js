import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getSettingFontFamily, updating } from 'Stores/reducers/settingsStore';
import { FONT_FAMILIES } from 'Utils/constants';

class TheenFontPickerFamily extends PureComponent {
  valSelected(e) {
    const { updatingSettings } = this.props;
    updatingSettings({ fontFamily: FONT_FAMILIES[+e.target.value] })
  }

  render() {
    const { reduxFontFamily } = this.props;
    const classNameActiveWrapper = `border-gray-100 bg-gray-50`
    const classNameWrapper = 'grid grid-cols-7 gap-3 transition-all p-2 ' +
      `border border-solid ${classNameActiveWrapper}`;

    const classNameLabel = `col-span-2 flex items-center justify-start text-black uppercase text-sm`

    return (
      <div className={classNameWrapper}>
        <div className={classNameLabel}>Font</div>
        <select
          name="fontFamily"
          onChange={this.valSelected.bind(this)}
          className="col-span-5 bg-gray-200 rounded px-2 py-1 text-left cursor-pointer focus:outline-none text-xs"
        >
          {FONT_FAMILIES.map((font, index) =>
            <option
              key={index}
              value={index}
              selected={font.value === reduxFontFamily.value}
            >{font.label}</option>
          )}
        </select>
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
