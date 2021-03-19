import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class TheenNavItem extends PureComponent {
  render() {
    const { label, url, icon, color = 'gray', ...props } = this.props;
    return (
      <li className="group relative flex items-center justify-center h-16 text-xl text-gray-500"
          {...props}>
        <NavLink to={url} exact
                 className={`flex flex-col items-center justify-center hover:bg-${color}-50 transition-all h-14 w-full cursor-pointer pl-0.5 border-r-2 border-solid border-transparent`}
                 activeClassName={`text-${color}-600 border-${color}-600`}>
          <div>{icon}</div>
          <div className="text-xs mt-1">{label}</div>
        </NavLink>
      </li>
    );
  }
}

export default TheenNavItem;
