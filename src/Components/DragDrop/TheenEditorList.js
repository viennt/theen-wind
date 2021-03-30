import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import TheenBuilder from 'Components/TheenBuilder';
import TheenEditorDraggable from 'Components/DragDrop/TheenEditorDraggable';

import { getEditorItems } from 'Stores/reducers/editorStore';

import { templates } from 'Templates';

class TheenEditorList extends PureComponent {
  render() {
    const { reduxEditorItems } = this.props;

    if (reduxEditorItems && reduxEditorItems.length) {
      return reduxEditorItems.map((item, index) => (
        <TheenEditorDraggable key={item.id} item={item} index={index}>
          <TheenBuilder {...templates[item.block]} />
        </TheenEditorDraggable>
      ));
    }

    return <div className="flex h-full items-center justify-center">Drag & Drop</div>
  }
}

const mapStateToProps = state => ({
  reduxEditorItems: getEditorItems(state),
})
export default connect(mapStateToProps)(TheenEditorList);
