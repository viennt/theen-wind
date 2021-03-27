import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getSettingColors, getSettingBorders } from '../Stores/reducers/settingsStore';

import { hbs } from '../helpers';

class TheenBuilder extends PureComponent {
  render() {
    const { template, props, reduxColors, reduxBorders } = this.props;
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

    // className="border-b border-solid border-gray-200"
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }
}

const mapStateToProps = state => ({
  reduxColors: getSettingColors(state),
  reduxBorders: getSettingBorders(state),
})
const mapDispatchToProps = () => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenBuilder);
