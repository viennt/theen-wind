import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { getEditorItems, updating } from '../../Stores/reducers/editorStore';
import { getLibraryItems } from '../../Stores/reducers/libraryStore';

import { moveDnD, reorderDnD } from '../../helpers';

class TheenDroppable extends PureComponent {
  onDragEnd = result => {
    const { updatingEditor, reduxLibraryItems, reduxEditorItems } = this.props;
    const { source, destination } = result;

    let editorItems = '';
    // Dropped outside the list
    if (!destination) {
      return null;

    // Reorder in editor list
    } else if (source.droppableId === destination.droppableId && source.droppableId === 'editorDroppable') {
      editorItems = reorderDnD(reduxEditorItems, source.index, destination.index);

    // Move from library to editor list
    } else if (source.droppableId === 'libraryDroppable') {
      const result = moveDnD(reduxLibraryItems, reduxEditorItems, source, destination);
      editorItems = result.editorDroppable;
    }

    updatingEditor(editorItems)
  };

  render () {
    const { children } = this.props;
    return <DragDropContext onDragEnd={this.onDragEnd}>{children}</DragDropContext>;
  }
}

const mapStateToProps = state => ({
  reduxEditorItems: getEditorItems(state),
  reduxLibraryItems: getLibraryItems(state),
})
const mapDispatchToProps = dispatch => ({
  updatingEditor: (settings) => dispatch(updating(settings)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenDroppable);
