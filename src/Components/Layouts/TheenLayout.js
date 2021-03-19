import React, { PureComponent } from 'react';

import TheenNavigation from './Navigation/TheenNavigation';

class TheenLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="flex">
        <div className="w-16">
          <div className="w-16"/>
        </div>
        <div className="w-16 fixed z-10 left-0 top-0 h-screen bg-white border border-solid border-gray-100 shadow-sm">
          <TheenNavigation/>
        </div>
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    );
  }
}

export default TheenLayout;
