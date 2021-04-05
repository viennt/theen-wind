import React, { PureComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MediaQuery from 'react-responsive';
import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

import { getSettingView } from 'Stores/reducers/settingsStore';
import { updating as updatingSS } from 'Stores/reducers/settingsStore';
import { updating as updatingES } from 'Stores/reducers/editorStore';
import { VIEW_TYPES } from 'Utils/constants';

const getLibraryItemClasses = (isDragging, isDragDisabled) =>
  `${isDragging ? 'border-gray-100 shadow-2xl' : 'border-white'} ` +
  `${isDragDisabled ? 'cursor-not-allowed' : 'hover:shadow-md'} ` +
  `border border-solid bg-white sm:rounded mb-3`;
const getLibraryReplaceClasses = (isDragging) =>
  `${isDragging ? 'block' : 'hidden'} ` +
  `border border-solid bg-white rounded mb-3`;

class TheenLibraryDraggable extends PureComponent {
  render() {
    const { item, index, children, reduxView, updatingEditor, updatingSettings } = this.props;
    const isDragDisabled = reduxView !== VIEW_TYPES.EDITOR;
    const onClick = isFullScreen => {
      if (!isFullScreen) {
        updatingEditor([{ ...item, id: uuidv4() }]);
        updatingSettings({ view: VIEW_TYPES.PHONE })
      }
    }

    return (
      <MediaQuery minWidth={640}>
        {(isFullScreen) =>
          <Draggable
            key={item.id}
            isDragDisabled={isDragDisabled || !isFullScreen}
            draggableId={item.id}
            index={index}>
            {(provided, snapshot) => (
              <>
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={getLibraryItemClasses(snapshot.isDragging, isDragDisabled)}
                  onClick={() => onClick(isFullScreen)}
                  style={{
                    ...provided.draggableProps.style,
                    transitionDuration: !snapshot.isDropAnimating ? provided.draggableProps.style?.transitionDuration : '0.025s',
                    transform: snapshot.isDragging ? provided.draggableProps.style?.transform : 'translate(0px, 0px)',
                  }}>{children}</div>

                <div className={getLibraryReplaceClasses(snapshot.isDragging)}>{children}</div>
              </>
            )}
          </Draggable>
        }
      </MediaQuery>
    );
  }
}

const mapStateToProps = state => ({
  reduxView: getSettingView(state),
})
const mapDispatchToProps = dispatch => ({
  updatingEditor: (editorItems) => dispatch(updatingES(editorItems)),
  updatingSettings: (settings) => dispatch(updatingSS(settings)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenLibraryDraggable);
