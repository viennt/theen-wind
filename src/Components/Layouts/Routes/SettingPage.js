import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import TheenFontPicker from 'Components/Settings/FontPicker/TheenFontPicker';
import TheenColorPicker from 'Components/Settings/ColorPicker/TheenColorPicker';
import TheenBorderPicker from 'Components/Settings/BorderPicker/TheenBorderPicker';

class SettingPage extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <link rel="stylesheet" href="css/fonts.css"/>
        </Helmet>
        <TheenFontPicker />
        <TheenColorPicker />
        <TheenBorderPicker />
      </>
    );
  }
}

export default SettingPage;
