import React, { PureComponent } from 'react';

class TheenViewSeparator extends PureComponent {
  render() {
    return (
      <li className="flex items-center justify-center h-0 mt-2 mb-2">
        <div className="border-t border-solid border-gray-200 w-1/3" />
      </li>
    );
  }
}

export default TheenViewSeparator;
