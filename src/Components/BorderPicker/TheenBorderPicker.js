import React from 'react';

import TheenBorderPickerRounded from './TheenBorderPickerRounded'

function TheenBorderPicker() {
  return (
    <div className="bg-white select-none rounded p-4 mb-4">
      <div className="text-lg font-medium mb-2">Borders</div>
      <TheenBorderPickerRounded />
    </div>
  );
}

export default TheenBorderPicker;
