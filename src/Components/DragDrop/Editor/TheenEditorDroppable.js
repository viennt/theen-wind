import React, { PureComponent } from 'react';
import { Droppable } from 'react-beautiful-dnd';

class TheenEditorDroppable extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Droppable droppableId="editorDroppable">
        {provided => (
          <div ref={provided.innerRef} className="w-full h-full overflow-auto">
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default TheenEditorDroppable;
