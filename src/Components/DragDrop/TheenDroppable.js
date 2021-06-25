import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { updating, moving, reordering } from 'Stores/reducers/editorStore';
import { getThemeItems } from 'Stores/reducers/themeStore';

class TheenDroppable extends PureComponent {
  onDragEnd = result => {
    const { movingEditor, reorderingEditor, reduxLibraryItems } = this.props;
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return null;

    // Reorder in editor list
    } else if (source.droppableId === destination.droppableId && source.droppableId === 'editorDroppable') {
      reorderingEditor({ startIndex: source.index, endIndex: destination.index} )

    // Move from library to editor list
    } else if (source.droppableId === 'libraryDroppable') {
      const sourceIndex = source.index;
      const item = reduxLibraryItems[sourceIndex.groupIndex]?.blocks[sourceIndex.itemIndex];
      movingEditor({ item, index: destination.index })
    }
  };

  render () {
    const { children } = this.props;
    return <DragDropContext onDragEnd={this.onDragEnd}>{children}</DragDropContext>;
  }
}

const mapStateToProps = state => ({
  reduxLibraryItems: getThemeItems(state),
})
const mapDispatchToProps = dispatch => ({
  updatingEditor: (editorItems) => dispatch(updating(editorItems)),
  movingEditor: ({ item, index }) => dispatch(moving({ item, index })),
  reorderingEditor: ({ startIndex, endIndex }) => dispatch(reordering({ startIndex, endIndex })),
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenDroppable);
