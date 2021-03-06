import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getSettingColors, getSettingBorders } from 'Stores/reducers/settingsStore';

import { hbs } from 'Utils/hbs-helpers';
import { themes } from 'Themes';

class TheenBuilder extends PureComponent {
  render() {
    const { name, reduxColors, reduxBorders } = this.props;
    const { template, props } = themes[name];

    function createMarkup() {
      const generator = hbs.compile(template);
      return {
        __html: generator({
          ...props,
          colors: reduxColors,
          borders: reduxBorders
        })
      };
    }

    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }
}

const mapStateToProps = state => ({
  reduxColors: getSettingColors(state),
  reduxBorders: getSettingBorders(state),
})
export default connect(mapStateToProps)(TheenBuilder);
