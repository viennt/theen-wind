import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import { getSettingView } from '../../Stores/reducers/settingsStore';
import { VIEW_TYPES } from '../../constants';

const getStoreItemClasses = (isDragging, isDragDisabled) =>
  `${isDragging ? 'border-gray-100 shadow-2xl' : 'border-white'} ` +
  `${isDragDisabled ? 'cursor-not-allowed' : 'hover:shadow-md'} ` +
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
              className={getStoreItemClasses(snapshot.isDragging, isDragDisabled)}
              style={{
                ...provided.draggableProps.style,
                transitionDuration: !snapshot.isDropAnimating ? provided.draggableProps.style?.transitionDuration : '0.025s',
                transform: snapshot.isDragging ? provided.draggableProps.style?.transform : 'translate(0px, 0px)',
              }}>{children}</div>

            {snapshot.isDragging && <div
              className={getStoreItemClasses(false)}>{children}</div>}
          </>
        )}
      </Draggable>
    );
  }
}

const mapStateToProps = state => ({
  reduxView: getSettingView(state),
})
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenLibraryDraggable);
