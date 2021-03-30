import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getSettingView } from '../../Stores/reducers/settingsStore';

import RouteWrapper from './Routes/_RouteWrapper';
import { VIEW_TYPES } from '../../constants';

class TheenMainContent extends PureComponent {
  render() {
    const { reduxView } = this.props;

    if (reduxView === VIEW_TYPES.EDITOR) {
      return (
        <div className="w-72 h-full overflow-y-auto">
          <RouteWrapper />
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
