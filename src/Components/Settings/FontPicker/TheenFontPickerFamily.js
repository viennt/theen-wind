import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select'

import { getSettingFontFamily, updating } from 'Stores/reducers/settingsStore';
import { FONT_FAMILIES } from 'Utils/constants';

class TheenFontPickerFamily extends PureComponent {
  valSelected(selected) {
    const { updatingSettings } = this.props;
    updatingSettings({ fontFamily: selected })
  }

  render() {
    const { reduxFontFamily } = this.props;
    const classNameActiveWrapper = `border-gray-100 bg-gray-50`
    const classNameWrapper = 'grid grid-cols-7 gap-3 transition-all p-2 ' +
      `border border-solid ${classNameActiveWrapper}`;

    const classNameLabel = `col-span-2 flex items-center justify-start text-black uppercase text-sm`;

    const customStyles = {
      control: (provided) => ({
        ...provided,
        minHeight: 30,
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        padding: '0 8px',
      }),
    }

    return (
      <div className={classNameWrapper}>
        <div className={classNameLabel}>Font</div>
        <Select
          size={100}
          name="fontFamily"
          styles={customStyles}
          onChange={this.valSelected.bind(this)}
          value={reduxFontFamily}
          options={FONT_FAMILIES}
          className="col-span-5 rounded text-left cursor-pointer focus:outline-none text-xs"
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
