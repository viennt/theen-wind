import React, { PureComponent } from 'react';
import { FiCode, FiMonitor, FiTablet, FiSmartphone, FiEye } from 'react-icons/fi';
// FiServer

import TheenNavLogo from './TheenNavLogo';
import TheenNavItem from './TheenNavItem';
import TheenViewItem from './TheenViewItem';
import TheenViewSeparator from './TheenViewSeparator';

import { NAVIGATIONS, VIEW_TYPES } from 'Utils/constants';

class TheenNavigation extends PureComponent {
  render() {
    return (
      <div className="flex flex-row sm:flex-col w-full h-full items-center justify-between">
        <ul className="flex flex-row sm:flex-col w-auto sm:w-full h-full sm:h-auto">
          <TheenNavLogo />
          {NAVIGATIONS.map(route => <TheenNavItem key={route.url} {...route} />)}
        </ul>
        <div className="px-2 sm:px-0 py-0 sm:py-4 w-auto sm:w-full h-full sm:h-auto">
          <ul className="flex flex-row sm:flex-col h-full sm:h-auto">
            {/* <TheenViewItem view={VIEW_TYPES.EDITOR} icon={<FiServer/>}/> */}
            <TheenViewSeparator/>
            <TheenViewItem view={VIEW_TYPES.CODE} icon={<FiCode/>}/>
            <TheenViewItem className="hidden lg:block" view={VIEW_TYPES.DESKTOP} icon={<FiMonitor/>}/>
            <TheenViewItem className="hidden md:block" view={VIEW_TYPES.TABLET} icon={<FiTablet/>}/>
            <TheenViewItem className="hidden md:block" view={VIEW_TYPES.PHONE} icon={<FiSmartphone/>}/>
            <TheenViewItem className="block md:hidden" view={VIEW_TYPES.PHONE} icon={<FiEye/>}/>
          </ul>
        </div>
      </div>
    );
  }
}

export default TheenNavigation;
