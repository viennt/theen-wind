import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import {VIEW_TYPES} from '../../constants';

const getStoreItemClasses = (isDragging, isDragDisabled) =>
  `${isDragging ? 'border-gray-100 shadow-2xl' : 'border-white'} ` +
  `${isDragDisabled ? 'cursor-not-allowed' : 'hover:shadow-lg'} ` +
  `transform border border-solid bg-white rounded mb-3`;

function TheenStoreDraggable({ item, index, children, reduxView }) {
  const isDragDisabled = reduxView !== VIEW_TYPES.EDITOR;

  return (
    <Draggable
      key={item.id}
      isDragDisabled={isDragDisabled}
      draggableId={item.id}
      index={index}>
      {(provided, snapshot) => (
        <>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={getStoreItemClasses(snapshot.isDragging, isDragDisabled)}
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

const mapStateToProps = state => ({
  reduxView: state.settings.data.view,
})
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenStoreDraggable);
