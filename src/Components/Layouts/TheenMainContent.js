import React, { PureComponent, Suspense, lazy } from 'react';
import MediaQuery from 'react-responsive'
import { connect } from 'react-redux';

import TheenLoading from 'Components/TheenLoading';
import { getSettingView } from 'Stores/reducers/settingsStore';
import { VIEW_TYPES } from 'Utils/constants';

import TheenViewEditor from 'Views/TheenViewEditor';
const TheenViewCode = lazy(() => import('Views/TheenViewCode'));
const TheenViewPreview = lazy(() => import('Views/TheenViewPreview'));

class TheenMainContent extends PureComponent {
  render() {
    const { reduxView } = this.props;

    let mainClasses = ''
    if (reduxView === VIEW_TYPES.PHONE) {
      mainClasses = 'w-full sm:w-80 mx-auto'
    } else if (reduxView === VIEW_TYPES.TABLET) {
      mainClasses = 'w-full sm:w-2/3 mx-auto'
    } else {
      mainClasses = 'flex-1 min-w-0';
    }

    return (
      <MediaQuery minWidth={640}>
        {(isFullScreen) =>
          <div className={`${mainClasses} bg-white border-l border-solid border-gray-100 shadow-sm`}>
            <div className="h-full m-auto">
              <Suspense fallback={<TheenLoading/>}>
                {isFullScreen && reduxView === VIEW_TYPES.EDITOR ? <TheenViewEditor/> : null}
                {reduxView === VIEW_TYPES.CODE ? <TheenViewCode/> : null}
                {reduxView === VIEW_TYPES.DESKTOP || reduxView === VIEW_TYPES.TABLET || reduxView === VIEW_TYPES.PHONE ?
                  <TheenViewPreview/> : null}
              </Suspense>
            </div>
          </div>
        }
      </MediaQuery>
    );
  }
}

const mapStateToProps = state => ({
  reduxView: getSettingView(state),
})
export default connect(mapStateToProps)(TheenMainContent);
