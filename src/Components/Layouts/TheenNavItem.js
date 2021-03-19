import React from 'react';
import { NavLink } from 'react-router-dom';

function TheenNavItem({ label, url, icon, color, ...props }) {
  return (
    <li className="group relative flex items-center justify-center h-16 text-xl text-black"
        {...props}>
      <NavLink to={url}
               className={`flex flex-col items-center justify-center hover:bg-${color}-50 transition-all h-14 w-full cursor-pointer pl-0.5 border-r-2 border-solid border-transparent`}
               activeClassName={`text-${color}-600 border-${color}-600`}>
        <div>{icon}</div>
        <div className="text-xs mt-1">{label}</div>
      </NavLink>
    </li>
  );
}

export default TheenNavItem;
