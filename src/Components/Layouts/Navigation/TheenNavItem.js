import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { updating } from 'Stores/reducers/settingsStore';
import { VIEW_TYPES } from 'Utils/constants';

class TheenNavItem extends PureComponent {
  render() {
    const { label, url, icon, updatingSettings, ...props } = this.props;
    const onClick = () => updatingSettings({ view: VIEW_TYPES.EDITOR })

    return (
      <li className="relative flex items-center justify-center w-14 sm:w-auto sm:h-16 text-xl text-gray-500" {...props}>
        <NavLink
          to={url} exact
          className={`flex flex-col items-center justify-center hover:bg-gray-50 transition-all w-12 sm:w-full h-full sm:h-14 cursor-pointer pt-0.5 sm:pt-0 sm:pl-0.5 border-b sm:border-b-0 sm:border-r-2 border-solid border-transparent`}
          activeClassName={`text-gray-600 border-gray-600`}
          onClick={onClick}>
          <div className="">{icon}</div>
          <div className="text-xs sm:mt-1">{label}</div>
        </NavLink>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatingSettings: (settings) => dispatch(updating(settings)),
})
export default connect(null, mapDispatchToProps)(TheenNavItem);
