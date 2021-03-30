import React, { PureComponent } from 'react';

import TheenBorderPickerRounded from './TheenBorderPickerRounded'

class TheenBorderPicker extends PureComponent {
  render () {
    return (
      <div className="bg-white select-none p-4">
        <div className="text-lg font-medium mb-2">Borders</div>
        <TheenBorderPickerRounded />
      </div>
    );
  }
}

export default TheenBorderPicker;
