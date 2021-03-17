import React from 'react';
import { connect } from 'react-redux';

function TheenColorPickerRow({ activeColor = {}, color, children }) {
  const active = activeColor.name === color;
  const classNameActiveWrapper = active ?
    `border-${color}-500 bg-${color}-200` :
    `border-transparent hover:border-${color}-200 bg-${color}-50`;
  const classNameWrapper = 'grid grid-cols-7 gap-3 rounded transition-all p-2 mb-1 ' +
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
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(TheenColorPickerRow)
