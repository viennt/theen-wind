import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import Frame from 'react-frame-component';
import { Switch, Route } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import TheenColorPicker from '../ColorPicker/TheenColorPicker';
import TheenBorderPicker from '../BorderPicker/TheenBorderPicker';
import TheenStoreDraggable from './TheenStoreDraggable';
import TheenEditorDraggable from './TheenEditorDraggable';
import { VIEW_TYPES } from '../../constants';

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

class TheenDropable extends Component {
  state = {
    items: [
      { id: uuidv4(), block: 'StandardHeader'},
      { id: uuidv4(), block: 'StandardFooter'},
      { id: uuidv4(), block: 'StandardBanner'},
      { id: uuidv4(), block: 'StandardBanner'},
      { id: uuidv4(), block: 'StandardBanner'},
      { id: uuidv4(), block: 'StandardBanner'},
      { id: uuidv4(), block: 'StandardBanner'},
      { id: uuidv4(), block: 'StandardBanner'},
    ],
    selected: [
      { id: uuidv4(), block: 'StandardHeader'},
      { id: uuidv4(), block: 'StandardBanner'},
      { id: uuidv4(), block: 'StandardFooter'},
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
    const { renderStoreItem, renderCodeItem, renderEditorItem } = this.props;
    const { reduxView } = this.props;

    let mainClasses = ''
    if (reduxView === VIEW_TYPES.PHONE) {
      mainClasses = 'w-80 mx-auto'
    } else if (reduxView === VIEW_TYPES.TABLET) {
      mainClasses = 'w-2/3 mx-auto'
    } else {
      mainClasses = 'flex-1';
    }

    return (
      <div className="flex h-screen select-none">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="storeDroppable" isDropDisabled>
            {provided => (
              <div
                id="store-droppable"
                ref={provided.innerRef}
                className="w-72 h-full overflow-y-auto">
                <Switch>
                  <Route path="/settings">
                     <TheenColorPicker />
                     <TheenBorderPicker />
                  </Route>
                  <Route path="/library">
                    <div className="p-4">
                      {this.state.items.map((item, index) => (
                        <TheenStoreDraggable key={item.id} item={item} index={index}>
                          {renderStoreItem(item.block)}
                        </TheenStoreDraggable>
                      ))}
                    </div>
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

          <div className={`${mainClasses} bg-white border-l border-solid border-gray-100 shadow-sm`}>
            {/* CONTENT */}
            <div className="h-full m-auto">
              {/* Code */}
              <div className={`w-full h-full overflow-auto ${reduxView === VIEW_TYPES.CODE ? '' : 'hidden'}`}>
                <SyntaxHighlighter
                  language="html" style={docco} showLineNumbers>
                  {this.state.selected.map(item => renderCodeItem(item.block))}
                </SyntaxHighlighter>
              </div>

              {/* Editor */}
              <Droppable droppableId="editorDroppable">
                {provided => (
                  <div
                    id="editor-droppable"
                    ref={provided.innerRef}
                    className={`w-full h-full ${reduxView === VIEW_TYPES.EDITOR ? '' : 'hidden'}`}
                    style={{ fontFamily: 'muli, sans-serif' }}
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

              {/* Preview */}
              <Frame
                className={`w-full h-full ${reduxView === VIEW_TYPES.DESKTOP || reduxView === VIEW_TYPES.TABLET || reduxView === VIEW_TYPES.PHONE ? '' : 'hidden'}`}
                head={
                  <>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css" rel="stylesheet" />
                    <link href="https://use.typekit.net/kfz5jhb.css" rel="stylesheet" />
                    {
                      <style dangerouslySetInnerHTML={{__html:
                        `body * {
                          font-family: muli, sans-serif
                        }`
                      }}/>
                    }
                    <style>

                    </style>
                  </>
                }>
                {this.state.selected.map(item => renderEditorItem(item.block))}
              </Frame>
            </div>
          </div>
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxView: state.settings.data.view,
})
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenDropable);
