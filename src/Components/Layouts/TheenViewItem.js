import React from 'react';
import { connect } from 'react-redux';

import { updating } from '../../Stores/reducers/settingsStore';

function TheenViewItem({ view, icon, reduxView, updatingSettings, ...props }) {
  const activeClasses = reduxView === view ? 'text-black' : 'text-gray-400';
  const onClick = () => updatingSettings({ view })

  return (
    <li className={`${activeClasses} flex items-center justify-center h-8 text-md`}
        onClick={onClick}
        {...props}>
      <div className={`flex items-center justify-center transition-all h-6 w-full cursor-pointer pl-0.5 border-r-2 border-solid border-transparent`}>
        {icon}
      </div>
    </li>
  );
}

const mapStateToProps = state => ({
  reduxView: state.settings.data.view,
})
const mapDispatchToProps = dispatch => ({
  updatingSettings: (settings) => dispatch(updating(settings)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenViewItem);
