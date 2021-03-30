import React, { PureComponent } from 'react';
import { FiMonitor, FiCode, FiSmartphone, FiTablet } from 'react-icons/fi';
// FiServer

import TheenNavLogo from './TheenNavLogo';
import TheenNavItem from './TheenNavItem';
import TheenViewItem from './TheenViewItem';
import TheenViewSeparator from './TheenViewSeparator';

import { ROUTES, VIEW_TYPES } from 'Utils/constants';

class TheenNavigation extends PureComponent {
  render() {
    return (
      <div className="flex h-full flex-col justify-between">
        <ul>
          <TheenNavLogo />
          {ROUTES.map(route => <TheenNavItem key={route.url} {...route} />)}
        </ul>
        <div className="py-4">
          <ul>
            {/* <TheenViewItem view={VIEW_TYPES.EDITOR} icon={<FiServer/>}/> */}
            <TheenViewSeparator/>
            <TheenViewItem view={VIEW_TYPES.CODE} icon={<FiCode/>}/>
            <TheenViewItem view={VIEW_TYPES.DESKTOP} icon={<FiMonitor/>}/>
            <TheenViewItem view={VIEW_TYPES.TABLET} icon={<FiTablet/>}/>
            <TheenViewItem view={VIEW_TYPES.PHONE} icon={<FiSmartphone/>}/>
          </ul>
        </div>
      </div>
    );
  }
}

export default TheenNavigation;
