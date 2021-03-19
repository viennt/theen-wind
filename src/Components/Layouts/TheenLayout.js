import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SiTailwindcss } from 'react-icons/si';
import {
  FiShoppingBag, FiLayers, FiSettings,
  FiMonitor, FiCode, FiEdit, FiSmartphone, FiTablet
} from 'react-icons/fi';

import TheenNavigation from './TheenNavigation';

const routes = [
  { label: 'Shop', url: '/store', icon: <FiShoppingBag/> },
  { label: 'Package', url: '/package', icon: <FiLayers/> },
  { label: 'Settings', url: '/settings', icon: <FiSettings/> },
]

function TheenLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-16"/>
      <div className="w-16 fixed left-0 top-0 h-screen bg-white border border-solid border-gray-100 shadow-sm">
        <TheenNavigation/>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = () => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenLayout);
