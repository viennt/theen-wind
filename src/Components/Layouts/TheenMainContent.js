import React, { PureComponent, Suspense, lazy } from 'react';
import { connect } from 'react-redux';

import { getSettingView } from 'Stores/reducers/settingsStore';
import { VIEW_TYPES } from 'Utils/constants';

const TheenViewCode = lazy(() => import('Components/Layouts/Views/TheenViewCode'));
const TheenViewEditor = lazy(() => import('Components/Layouts/Views/TheenViewEditor'));
const TheenViewPreview = lazy(() => import('Components/Layouts/Views/TheenViewPreview'));

class TheenMainContent extends PureComponent {
  render() {
    const { reduxView } = this.props;

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
            <Suspense fallback={<div>Loading...</div>}>
              <TheenViewEditor />
              {reduxView === VIEW_TYPES.CODE ? <TheenViewCode /> : null }
              {reduxView === VIEW_TYPES.DESKTOP || reduxView === VIEW_TYPES.TABLET || reduxView === VIEW_TYPES.PHONE ? <TheenViewPreview /> : null}
            </Suspense>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxView: getSettingView(state),
})
export default connect(mapStateToProps)(TheenMainContent);
