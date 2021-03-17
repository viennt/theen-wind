import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const getStoreItemClasses = isDragging =>
  `${isDragging ? 'border-gray-100 shadow-2xl' : 'border-white'} transform ` +
  `hover:scale-105 border border-solid bg-white hover:shadow-lg rounded mb-3`;

function TheenStoreDraggable({ item, index, children }) {
  return (
    <Draggable
      key={item.id}
      draggableId={item.id}
      index={index}>
      {(provided, snapshot) => (
        <>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={getStoreItemClasses(snapshot.isDragging)}
            style={{
              ...provided.draggableProps.style,
              transform: snapshot.isDragging ? provided.draggableProps.style?.transform : 'translate(0px, 0px)',
            }}>{children}</div>

          {snapshot.isDragging && <div
            className={getStoreItemClasses(false)}
            style={{ transform: 'none !important' }}>{children}</div>}
        </>
      )}
    </Draggable>
  );
}

export default TheenStoreDraggable;
