// By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL
import React, { PureComponent } from 'react';
import { FiActivity } from 'react-icons/fi';

class TheenLoading extends PureComponent {
  render() {
    return (
      <div className="flex flex-col items-center justify-center h-full animate-ping">
        <div className="text-4xl text-gray-400"><FiActivity /></div>
        <div className="mt-2 text-gray-400 font-bold">loading</div>
      </div>
    );
  }
}

export default TheenLoading;
