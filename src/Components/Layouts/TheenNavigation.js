import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SiTailwindcss } from 'react-icons/si';
import { FiMonitor, FiCode, FiServer, FiSmartphone, FiTablet } from 'react-icons/fi';

import TheenNavItem from './TheenNavItem';
import TheenViewItem from './TheenViewItem';
import TheenViewSeparator from './TheenViewSeparator';

import { ROUTES, VIEW_TYPES } from '../../constants';

function TheenNavigation({ activeColor }) {
  const { name: colorName } = activeColor;

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="">
        <ul>
          <li className={`flex items-center justify-center h-20 text-4xl text-${colorName}-600`}>
            <NavLink to="/" className="transform rotate-90"><SiTailwindcss/></NavLink>
          </li>
          {ROUTES.map(route => <TheenNavItem key={route.url} color={colorName} {...route} />)}
        </ul>
      </div>
      <div className="py-4">
        <ul>
          <TheenViewItem view={VIEW_TYPES.CODE} icon={<FiCode/>} />
          <TheenViewItem view={VIEW_TYPES.EDITOR} icon={<FiServer/>} />
          <TheenViewSeparator />
          <TheenViewItem view={VIEW_TYPES.DESKTOP} icon={<FiMonitor/>} />
          <TheenViewItem view={VIEW_TYPES.TABLET} icon={<FiTablet/>} />
          <TheenViewItem view={VIEW_TYPES.PHONE} icon={<FiSmartphone/>} />
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  activeColor: state.settings.data.colors?.primary,
})
const mapDispatchToProps = () => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenNavigation);
