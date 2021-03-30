import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../../constants';

class RouteWrapper extends PureComponent {
  render() {
    return (
      <Switch>
        {ROUTES.map(route => <Route path={route.url}>{route.component}</Route>)}
      </Switch>
    );
  }
}

export default RouteWrapper;
