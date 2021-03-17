import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const getEditorItemClasses = isDragging =>
  `${isDragging ? 'bg-green-500 rounded border-gray-200' : 'bg-gray-500'} ` +
  `border-2 border-solid border-white hover:border-gray-200 hover:rounded overflow-hidden`;

function TheenEditorDraggable({ item, index, children }) {
  return (
    <Draggable
      key={item.id}
      draggableId={item.id}
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

export default TheenEditorDraggable;
