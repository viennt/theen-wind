import React, { PureComponent } from 'react';

import TheenNavigation from './Navigation/TheenNavigation';

class TheenLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="flex flex-col sm:flex-row">
        <div className="w-full h-16 sm:w-16 sm:h-screen">
          <div className="w-full h-16 sm:w-16 sm:h-screen"/>
        </div>
        <div className="w-full h-16 sm:w-16 sm:h-screen fixed z-10 left-0 top-0 bg-white border border-solid border-gray-100 shadow-sm">
          <TheenNavigation/>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex h-screen--16 sm:h-screen relative">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default TheenLayout;
