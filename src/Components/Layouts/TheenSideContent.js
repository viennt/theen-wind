import React, { PureComponent, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import TheenLoading from 'Components/TheenLoading';
import { getSettingView } from 'Stores/reducers/settingsStore';

import { VIEW_TYPES } from 'Utils/constants';
import withTracker from 'Routes/withTracker';
import { ROUTES } from 'Routes';

class TheenMainContent extends PureComponent {
  render() {
    const { reduxView } = this.props;

    if (reduxView === VIEW_TYPES.EDITOR) {
      return (
        <div className="w-full sm:w-72 z-10 h-full overflow-y-auto select-none bg-gray-100 shadow-2xl sm:shadow-none">
          <Suspense fallback={<TheenLoading />}>
            <Switch>
              {Object.keys(ROUTES).map(route =>
                <Route
                  key={ROUTES[route].url}
                  path={ROUTES[route].url}
                  exact={ROUTES[route].exact}
                  component={withTracker(ROUTES[route].component)}
                />
              )}
            </Switch>
          </Suspense>
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
