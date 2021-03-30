import React, { PureComponent } from 'react';
import { Droppable } from 'react-beautiful-dnd';

class TheenLibraryDroppable extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Droppable droppableId="libraryDroppable" isDropDisabled>
        {provided => (
          <div id="library-droppable" ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default TheenLibraryDroppable;
