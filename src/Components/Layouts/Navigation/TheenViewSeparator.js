import React, { PureComponent } from 'react';

class TheenViewSeparator extends PureComponent {
  render() {
    return (
      <li className="flex items-center justify-center w-0 sm:w-auto mx-2 sm:mx-0 sm:h-0 sm:my-2">
        <div className="border-l sm:border-l-0 sm:border-t border-solid border-gray-200 h-1/3 sm:h-auto sm:w-1/3" />
      </li>
    );
  }
}

export default TheenViewSeparator;
