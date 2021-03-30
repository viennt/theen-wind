import React, { PureComponent } from 'react';

import TheenFontPicker from '../../Settings/FontPicker/TheenFontPicker';
import TheenColorPicker from '../../Settings/ColorPicker/TheenColorPicker';
import TheenBorderPicker from '../../Settings/BorderPicker/TheenBorderPicker';

class SettingPage extends PureComponent {
  render() {
    return (
      <>
        <TheenFontPicker />
        <TheenColorPicker />
        <TheenBorderPicker />
      </>
    );
  }
}

export default SettingPage;
