import React, { PureComponent } from 'react';

import TheenFontPicker from 'Components/Settings/FontPicker/TheenFontPicker';
import TheenColorPicker from 'Components/Settings/ColorPicker/TheenColorPicker';
import TheenBorderPicker from 'Components/Settings/BorderPicker/TheenBorderPicker';

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
