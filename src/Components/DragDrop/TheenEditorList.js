import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import TheenBuilder from '../TheenBuilder';
import TheenEditorDraggable from '../DragDrop/TheenEditorDraggable';

import { getEditorItems } from '../../Stores/reducers/editorStore';

import { templates } from '../../Templates';

class TheenEditorList extends PureComponent {
  render() {
    const { reduxEditorItems } = this.props;

    return reduxEditorItems.map((item, index) => (
      <TheenEditorDraggable key={item.id} item={item} index={index}>
        <TheenBuilder {...templates[item.block]} />
      </TheenEditorDraggable>
    ));
  }
}

const mapStateToProps = state => ({
  reduxEditorItems: getEditorItems(state),
})
export default connect(mapStateToProps)(TheenEditorList);
