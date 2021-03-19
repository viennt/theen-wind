import React from 'react';
import { connect } from 'react-redux';

function TheenColorPickerRow({ activeColor = {}, color, children }) {
  const active = activeColor.name === color;
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

const mapStateToProps = state => ({
  activeColor: state.settings.data.colors?.primary,
})
const mapDispatchToProps = () => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenColorPickerRow)
