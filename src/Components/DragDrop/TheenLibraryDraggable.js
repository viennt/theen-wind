import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import { getSettingView } from 'Stores/reducers/settingsStore';
import { VIEW_TYPES } from 'Utils/constants';

const getLibraryItemClasses = (isDragging, isDragDisabled) =>
  `${isDragging ? 'border-gray-100 shadow-2xl' : 'border-white'} ` +
  `${isDragDisabled ? 'cursor-not-allowed' : 'hover:shadow-md'} ` +
  `border border-solid bg-white rounded mb-3`;
const getLibraryReplaceClasses = (isDragging) =>
  `${isDragging ? 'block' : 'hidden'} ` +
  `border border-solid bg-white rounded mb-3`;

class TheenLibraryDraggable extends PureComponent {
  render() {
    const { item, index, children, reduxView } = this.props;
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
              className={getLibraryItemClasses(snapshot.isDragging, isDragDisabled)}
              style={{
                ...provided.draggableProps.style,
                transitionDuration: !snapshot.isDropAnimating ? provided.draggableProps.style?.transitionDuration : '0.025s',
                transform: snapshot.isDragging ? provided.draggableProps.style?.transform : 'translate(0px, 0px)',
              }}>{children}</div>

            <div className={getLibraryReplaceClasses(snapshot.isDragging)}>{children}</div>
          </>
        )}
      </Draggable>
    );
  }
}

const mapStateToProps = state => ({
  reduxView: getSettingView(state),
})
export default connect(mapStateToProps)(TheenLibraryDraggable);
