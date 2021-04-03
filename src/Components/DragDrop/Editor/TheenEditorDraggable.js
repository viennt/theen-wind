import React, { PureComponent } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const getEditorItemClasses = isDragging =>
  `${isDragging ? 'rounded border-gray-200' : ''} ` +
  `border-2 border-solid border-white hover:border-gray-200 overflow-hidden`;

class TheenEditorDraggable extends PureComponent {
  render() {
    const { id, index, children } = this.props;
    return (
      <Draggable
        key={id}
        draggableId={id}
        isFixedOnPage
        index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={getEditorItemClasses(snapshot.isDragging)}
            style={provided.draggableProps.style}>
            {children}
          </div>
        )}
      </Draggable>
    );
  }
}

export default TheenEditorDraggable;
