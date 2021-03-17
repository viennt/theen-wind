import React, { Component } from 'react';
import {connect} from "react-redux";
import { SiTailwindcss } from 'react-icons/si';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { FiShoppingBag, FiLayers, FiSettings } from 'react-icons/fi';

import TheenBuilder from './Components/TheenBuilder';
import TheenDropable from './Components/DragDrop/TheenDropable';
import standardHeaderTemplate from './Templates/Headers/standard.hbs';
import standardHeaderSettings from './Templates/Headers/standard.settings';
import standardBannerTemplate from './Templates/Banners/standard.hbs';
import standardBannerSettings from './Templates/Banners/standard.settings';
import standardFooterTemplate from './Templates/Footers/standard.hbs';
import standardFooterSettings from './Templates/Footers/standard.settings';
import waveDividerTemplate from './Templates/Dividers/wave.hbs';
import waveDividerSettings from './Templates/Dividers/wave.settings';

import './App.css';

const blocks = {
  'StandardHeader': {
    template: standardHeaderTemplate,
    settings: standardHeaderSettings,
  },
  'StandardBanner': {
    template: standardBannerTemplate,
    settings: standardBannerSettings,
  },
  'StandardFooter': {
    template: standardFooterTemplate,
    settings: standardFooterSettings,
  },
  'WaveDivider': {
    template: waveDividerTemplate,
    settings: waveDividerSettings,
  }
}

class App extends Component {
  render () {
    const { name: colorName } = this.props.activeColor;

    return (
      <Router>
        <div className="flex h-screen">
          <div className="w-16 bg-white border border-solid border-gray-100 shadow-sm">
            <div className="flex h-full flex-col justify-between">
              <div className="">
                <ul>
                  <li className={`flex items-center justify-center h-20 text-4xl text-${colorName}-600`}>
                    <NavLink to="/" className="transform rotate-90"><SiTailwindcss/></NavLink>
                  </li>
                  <li className="flex items-center justify-center h-12 text-xl hover:text-2xl text-gray-700">
                    <NavLink to="/store"
                             className={`flex items-center justify-center transition-all h-10 w-full cursor-pointer hover:bg-${colorName}-50 pl-0.5 border-r-2 border-solid border-transparent`}
                             activeClassName={`text-${colorName}-600 border-${colorName}-600`}>
                      <FiShoppingBag/>
                    </NavLink>
                  </li>
                  <li className="flex items-center justify-center h-12 text-xl hover:text-2xl text-gray-700">
                    <NavLink to="/package"
                             className={`flex items-center justify-center transition-all h-10 w-full cursor-pointer hover:bg-${colorName}-50 pl-0.5 border-r-2 border-solid border-transparent`}
                             activeClassName={`text-${colorName}-600 border-${colorName}-600`}>
                      <FiLayers/>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="py-4">
                <li className="flex items-center justify-center h-12 text-xl hover:text-2xl text-gray-700">
                  <NavLink to="/settings"
                           className={`flex items-center justify-center transition-all h-10 w-full cursor-pointer hover:bg-${colorName}-50 pl-0.5 border-r-2 border-solid border-transparent`}
                           activeClassName={`text-${colorName}-600 border-${colorName}-600`}>
                    <FiSettings/>
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <TheenDropable
              renderStoreItem={block => (
                <div className="rounded overflow-hidden">
                  <img alt="content"
                       className="object-cover object-center h-full w-full"
                       src={blocks[block].settings.review} />
                </div>
              )}
              renderEditorItem={block => (
                <TheenBuilder {...blocks[block]} />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  activeColor: state.settings.data.colors?.primary,
})
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
