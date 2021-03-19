import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getSettingView } from '../../Stores/reducers/settingsStore';
import { VIEW_TYPES } from '../../constants';

class TheenMainContent extends PureComponent {
  render() {
    const { reduxView, children } = this.props;

    if (reduxView === VIEW_TYPES.EDITOR) {
      return (
        <div className="w-72 h-full overflow-y-auto">
          {children}
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  reduxView: getSettingView(state),
})
export default connect(mapStateToProps)(TheenMainContent);
