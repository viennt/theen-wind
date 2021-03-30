import React, { PureComponent } from 'react';

import TheenBorderPickerRounded from './TheenFontPickerFamily'

class TheenFontPicker extends PureComponent {
  render () {
    return (
      <div className="bg-white select-none p-4">
        <div className="text-lg font-medium mb-2">Typography</div>
        <TheenBorderPickerRounded />
      </div>
    );
  }
}

export default TheenFontPicker;
