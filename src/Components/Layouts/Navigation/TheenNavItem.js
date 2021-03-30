import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { updating } from '../../../Stores/reducers/settingsStore';
import { VIEW_TYPES } from '../../../constants';

class TheenNavItem extends PureComponent {
  render() {
    const { title, url, icon, color = 'gray', updatingSettings, ...props } = this.props;
    const onClick = () => updatingSettings({ view: VIEW_TYPES.EDITOR })

    return (
      <li className="relative flex items-center justify-center h-16 text-xl text-gray-500" {...props}>
        <NavLink
          to={url} exact
          className={`flex flex-col items-center justify-center hover:bg-${color}-50 transition-all h-14 w-full cursor-pointer pl-0.5 border-r-2 border-solid border-transparent`}
          activeClassName={`text-${color}-600 border-${color}-600`}
          onClick={onClick}>
          <div>{icon}</div>
          <div className="text-xs mt-1">{title}</div>
        </NavLink>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatingSettings: (settings) => dispatch(updating(settings)),
})
export default connect(null, mapDispatchToProps)(TheenNavItem);
