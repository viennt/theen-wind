import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { SiTailwindcss } from 'react-icons/si';

import { getSettingColorName } from 'Stores/reducers/settingsStore';

class TheenNavLogo extends PureComponent {
  render() {
    const { reduxColorName } = this.props;

    return (
      <li className={`flex items-center justify-center h-20 text-4xl text-${reduxColorName}-600`}>
        <div className="transform rotate-90"><SiTailwindcss/></div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  reduxColorName: getSettingColorName(state),
})
export default connect(mapStateToProps)(TheenNavLogo);
