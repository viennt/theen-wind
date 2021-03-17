import React from 'react';
import { connect } from 'react-redux';

import TheenPickerCell from '../TheenPickerCell';
import {updating} from "../../Stores/reducers/settingsStore";

function TheenBorderPickerRounded({ activeRadius, updatingSettings }) {
  const classNameActiveWrapper = `border-gray-200 bg-gray-50`
  const classNameWrapper = 'grid grid-cols-7 gap-3 rounded transition-all p-2 mb-1 ' +
    `border border-solid ${classNameActiveWrapper}`;

  const classNameLabel = `col-span-2 flex items-center justify-start text-black uppercase text-sm`

  // FIXME: Handle this
  const radius = activeRadius.topLeft.split('-')[2] || '';

  const onClick = (rounded) => () => {
    const settings = {
      topLeft: `rounded-tl${rounded}`,
      topRight: `rounded-tr${rounded}`,
      bottomLeft: `rounded-bl${rounded}`,
      bottomRight: `rounded-br${rounded}`
    };
    updatingSettings({ borders: { radius: settings }})
  }

  return (
    <div className={classNameWrapper}>
      <div className={classNameLabel}>Radius</div>
      <TheenPickerCell label="none" active={radius === 'none'} onClick={onClick('-none')} />
      <TheenPickerCell label="sm" active={radius === 'sm'} onClick={onClick('-sm')} />
      <TheenPickerCell label="nm" active={radius === ''} onClick={onClick('')} />
      <TheenPickerCell label="md" active={radius === 'md'} onClick={onClick('-md')} />
      <TheenPickerCell label="lg" active={radius === 'lg'} onClick={onClick('-lg')} />
      <div className={classNameLabel}>{''}</div>
      <TheenPickerCell label="xl" active={radius === 'xl'} onClick={onClick('-xl')} />
      <TheenPickerCell label="2xl" active={radius === '2xl'} onClick={onClick('-2xl')} />
      <TheenPickerCell label="3xl" active={radius === '3xl'} onClick={onClick('-3xl')} />
      <TheenPickerCell span={2} label="full" active={radius === 'full'} onClick={onClick('-full')} />
    </div>
  );
}

const mapStateToProps = state => ({
  activeRadius: state.settings.data.borders?.radius,
})
const mapDispatchToProps = dispatch => ({
  updatingSettings: (settings) => dispatch(updating(settings)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenBorderPickerRounded)
