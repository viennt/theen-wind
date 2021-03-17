import React from 'react';

import TheenColorPickerRow from './TheenColorPickerRow'
import TheenColorPickerCell from './TheenColorPickerCell';

const colors = ['Red', 'Yellow', 'Green', 'Blue', 'Indigo', 'Purple', 'Pink', 'Gray'];
const opacities = [300, 400, 500, 600, 700];

function TheenColorPicker() {
  return (
    <div className="bg-white select-none rounded p-4 mb-4">
      <div className="text-lg font-medium mb-2">Colors</div>
      {colors.map(color => color.toLowerCase()).map(color => (
        <TheenColorPickerRow key={color} color={color}>
          {opacities.map(opacity => (
            <TheenColorPickerCell key={`${color}-${opacity}`} color={color} opacity={opacity} />
          ))}
        </TheenColorPickerRow>
      ))}
    </div>
  );
}

export default TheenColorPicker;
