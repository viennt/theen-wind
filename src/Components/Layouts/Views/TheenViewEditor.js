import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import TheenBuilder from '../../TheenBuilder';
import TheenEditorDroppable from '../../DragDrop/TheenEditorDroppable';
import TheenEditorDraggable from '../../DragDrop/TheenEditorDraggable';

import { getSettingView } from '../../../Stores/reducers/settingsStore';
import { getEditorItems } from '../../../Stores/reducers/editorStore';

import { VIEW_TYPES } from '../../../constants';
import { templates } from '../../../Templates';

class TheenViewEditor extends PureComponent {
  render() {
    const { reduxView, reduxEditorItems } = this.props;
    return (
      <TheenEditorDroppable className={reduxView === VIEW_TYPES.EDITOR ? 'overflow-auto' : 'hidden'}>
        {reduxEditorItems.map((item, index) => (
          <TheenEditorDraggable key={item.id} item={item} index={index}>
            <TheenBuilder {...templates[item.block]} />
          </TheenEditorDraggable>
        ))}
      </TheenEditorDroppable>
    );
  }
}

const mapStateToProps = state => ({
  reduxView: getSettingView(state),
  reduxEditorItems: getEditorItems(state),
})
export default connect(mapStateToProps)(TheenViewEditor);
