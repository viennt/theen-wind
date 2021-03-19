import React, { PureComponent } from 'react';
import { Droppable } from 'react-beautiful-dnd';

class TheenLibraryDroppable extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Droppable droppableId="libraryDroppable" isDropDisabled>
        {provided => (
          <div
            id="store-droppable"
            ref={provided.innerRef}
            className="">
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default TheenLibraryDroppable;
