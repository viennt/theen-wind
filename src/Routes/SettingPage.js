import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import TheenFontPicker from 'Components/Settings/FontPicker/TheenFontPicker';
import TheenColorPicker from 'Components/Settings/ColorPicker/TheenColorPicker';
import TheenBorderPicker from 'Components/Settings/BorderPicker/TheenBorderPicker';
import { FONT_FAMILIES } from 'Utils/constants';

class SettingPage extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          {FONT_FAMILIES.map(font => <link key={font.value} rel="stylesheet" href={font.href} />)}
        </Helmet>
        <TheenFontPicker />
        <TheenColorPicker />
        <TheenBorderPicker />
      </>
    );
  }
}

export default SettingPage;
