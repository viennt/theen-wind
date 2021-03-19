import React, { PureComponent } from 'react';
import { Droppable } from 'react-beautiful-dnd';

class TheenEditorDroppable extends PureComponent {
  render() {
    const { className, children } = this.props;
    return (
      <Droppable droppableId="editorDroppable">
        {provided => (
          <div
            id="editor-droppable"
            ref={provided.innerRef}
            className={`w-full h-full ${className}`}
            style={{fontFamily: 'muli, sans-serif'}}
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default TheenEditorDroppable;
