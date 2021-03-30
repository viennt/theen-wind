import React, { PureComponent } from 'react';

import TheenColorPickerRow from './TheenColorPickerRow'
import TheenColorPickerCell from './TheenColorPickerCell';
import { COLORS, OPACITIES } from '../../../Utils/constants';

class TheenColorPicker extends PureComponent {
  render() {
    return (
      <div className="bg-white select-none p-4">
        <div className="text-lg font-medium mb-2">Colors</div>
        {COLORS.map(color => color.toLowerCase()).map(color => (
          <TheenColorPickerRow key={color} color={color}>
            {OPACITIES.map(opacity => (
              <TheenColorPickerCell key={`${color}-${opacity}`} color={color} opacity={opacity}/>
            ))}
          </TheenColorPickerRow>
        ))}
      </div>
    );
  }
}

export default TheenColorPicker;
