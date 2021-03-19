import React, { PureComponent } from 'react';

import TheenColorPickerRow from './TheenColorPickerRow'
import TheenColorPickerCell from './TheenColorPickerCell';

const colors = [
  'Red', 'Orange', 'Amber', 'Yellow',
  'Lime', 'Green', 'Emerald', 'Teal', 'Cyan', 'Blue',
  'Indigo', 'Violet', 'Purple', 'Fuchsia', 'Pink', 'Rose', 'Gray'];
const opacities = [300, 400, 500, 600, 700];

class TheenColorPicker extends PureComponent {
  render() {
    return (
      <div className="bg-white select-none p-4">
        <div className="text-lg font-medium mb-2">Colors</div>
        {colors.map(color => color.toLowerCase()).map(color => (
          <TheenColorPickerRow key={color} color={color}>
            {opacities.map(opacity => (
              <TheenColorPickerCell key={`${color}-${opacity}`} color={color} opacity={opacity}/>
            ))}
          </TheenColorPickerRow>
        ))}
      </div>
    );
  }
}

export default TheenColorPicker;
