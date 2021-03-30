import React, { PureComponent, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from 'Utils/constants';

class RouteWrapper extends PureComponent {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {ROUTES.map(route => <Route path={route.url}>{route.component}</Route>)}
        </Switch>
      </Suspense>
    );
  }
}

export default RouteWrapper;
