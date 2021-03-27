import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getSettingView } from '../../Stores/reducers/settingsStore';
import { VIEW_TYPES } from '../../constants';

class TheenMainContent extends PureComponent {
  render() {
    const { reduxView, children } = this.props;

    let mainClasses = ''
    if (reduxView === VIEW_TYPES.PHONE) {
      mainClasses = 'w-80 mx-auto'
    } else if (reduxView === VIEW_TYPES.TABLET) {
      mainClasses = 'w-2/3 mx-auto'
    } else {
      mainClasses = 'flex-1 min-w-0';
    }

    return (
      <div className={`${mainClasses} bg-white border-l border-solid border-gray-100 shadow-sm`}>
        <div className="h-full m-auto">
          {children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxView: getSettingView(state),
})
export default connect(mapStateToProps)(TheenMainContent);
