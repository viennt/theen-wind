import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Switch, Route } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import TheenColorPicker from '../ColorPicker/TheenColorPicker';
import TheenBorderPicker from '../BorderPicker/TheenBorderPicker';
import TheenStoreDraggable from './TheenStoreDraggable';
import TheenEditorDraggable from './TheenEditorDraggable';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, {...removed, id: uuidv4()});

  const result = {};

  if (droppableSource.droppableId === 'storeDroppable') {
    result[droppableSource.droppableId] = source;
    result[droppableDestination.droppableId] = destClone;
  } else {
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destination;
  }

  return result;
};

const getStoreClasses = isDraggingOver => `${isDraggingOver ? '' : ''} w-72 m-4`;
const getEditorClasses = isDraggingOver => `${isDraggingOver ? '' : ''} flex-1 m-4 ml-0 bg-white rounded`;

class TheenDropable extends Component {
  state = {
    items: [
      { id: uuidv4(), block: 'StandardHeader'},
      { id: uuidv4(), block: 'StandardFooter'},
      { id: uuidv4(), block: 'StandardBanner'},
      { id: uuidv4(), block: 'StandardBanner'},
      { id: uuidv4(), block: 'StandardBanner'},
      { id: uuidv4(), block: 'StandardBanner'},
    ],
    selected: [
    ]
  };

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    storeDroppable: 'items',
    editorDroppable: 'selected'
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === 'editorDroppable') {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        items: result.storeDroppable,
        selected: result.editorDroppable
      });
    }
  };

  render () {
    const { renderStoreItem, renderEditorItem } = this.props;

    return (
      <div className="flex select-none">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="storeDroppable" isDropDisabled>
            {(provided, snapshot) => (
              <div
                id="store-droppable"
                ref={provided.innerRef}
                className={getStoreClasses(snapshot.isDraggingOver)}>
                <Switch>
                  <Route path="/settings">
                     <TheenColorPicker />
                     <TheenBorderPicker />
                  </Route>
                  <Route path="/package">
                    {this.state.items.map((item, index) => (
                      <TheenStoreDraggable key={item.id} item={item} index={index}>
                        {renderStoreItem(item.block)}
                      </TheenStoreDraggable>
                    ))}
                  </Route>
                  <Route path="/store">
                    <div>Store</div>
                  </Route>
                  <Route path="/">
                    <div>Home</div>
                  </Route>
                </Switch>

                {provided.placeholder}

              </div>
            )}
          </Droppable>

          <Droppable droppableId="editorDroppable">
            {(provided, snapshot) => (
              <div
                id="editor-droppable"
                ref={provided.innerRef}
                className={getEditorClasses(snapshot.isDraggingOver)}
                // style={{ fontFamily: 'muli, sans-serif' }}
              >

                {this.state.selected.map((item, index) => (
                  <TheenEditorDraggable key={item.id} item={item} index={index}>
                    {renderEditorItem(item.block)}
                  </TheenEditorDraggable>
                ))}
                {provided.placeholder}

              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

export default TheenDropable
