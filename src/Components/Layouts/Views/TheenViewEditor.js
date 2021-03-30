import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import TheenEditorDroppable from '../../DragDrop/TheenEditorDroppable';
import TheenEditorList from '../../DragDrop/TheenEditorList';

import { getSettingFontFamily, getSettingView } from '../../../Stores/reducers/settingsStore';

import { VIEW_TYPES } from '../../../constants';

class TheenViewEditor extends PureComponent {
  render() {
    const { reduxView, reduxFontFamily } = this.props;
    const displayClass = reduxView === VIEW_TYPES.EDITOR ? 'overflow-auto' : 'hidden';
    const styles = { fontFamily: `'${reduxFontFamily}', sans-serif` };

    return (
      <TheenEditorDroppable>
        <div className={`${displayClass}`} style={styles}>
          <TheenEditorList />
        </div>
      </TheenEditorDroppable>
    );
  }
}

const mapStateToProps = state => ({
  reduxView: getSettingView(state),
  reduxFontFamily: getSettingFontFamily(state),
})
export default connect(mapStateToProps)(TheenViewEditor);
