import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

import { getEditorItems, updating } from '../../Stores/reducers/editorStore';
import { getLibraryItems } from '../../Stores/reducers/libraryStore';

import TheenMainContent from '../Layouts/TheenMainContent';
import TheenSideContent from '../Layouts/TheenSideContent';

import TheenColorPicker from '../ColorPicker/TheenColorPicker';
import TheenBorderPicker from '../BorderPicker/TheenBorderPicker';

import TheenLibraryDraggable from './TheenLibraryDraggable';
import TheenLibraryDroppable from './TheenLibraryDroppable';

import { moveDnD, reorderDnD, removeDnD } from '../../helpers';

class TheenDroppable extends PureComponent {
  Id2List = {
    libraryDroppable: 'reduxLibraryItems',
    editorDroppable: 'reduxEditorItems'
  };

  getReduxList = id => this.props[this.Id2List[id]];

  onDragEnd = result => {
    const { updatingEditor } = this.props;
    const { source, destination } = result;

    let editorItems = '';
    // dropped outside the list
    if (!destination) {
      editorItems = removeDnD(
        this.getReduxList(source.droppableId),
        source,
      );
      updatingEditor(editorItems)
      return null;

    } else if (source.droppableId === destination.droppableId) {
      editorItems = reorderDnD(
        this.getReduxList(source.droppableId),
        source.index,
        destination.index
      );

    } else {
      const result = moveDnD(
        this.getReduxList(source.droppableId),
        this.getReduxList(destination.droppableId),
        source,
        destination
      );
      editorItems = result.editorDroppable;
    }

    updatingEditor(editorItems)
  };

  render () {
    const { renderLeftSide = () => {}, renderRightSide = () => {} } = this.props;
    const { renderStoreItem } = this.props;
    const { reduxLibraryItems } = this.props;

    return (
      <div className="flex h-screen">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <TheenSideContent>
            {renderLeftSide()}
            <Switch>
              <Route path="/settings">
                <TheenColorPicker />
                <TheenBorderPicker />
              </Route>
              <Route path="/store">
                <div className="h-full bg-white select-none p-4">
                  <div className="text-lg font-medium mb-2">Store</div>
                </div>
              </Route>
              <Route path="">
                <TheenLibraryDroppable>
                <div className="p-4">
                  {reduxLibraryItems.map((item, index) => (
                    <TheenLibraryDraggable key={item.id} item={item} index={index}>
                      {renderStoreItem(item.block)}
                    </TheenLibraryDraggable>
                  ))}
                </div>
                </TheenLibraryDroppable>
              </Route>
            </Switch>
          </TheenSideContent>

          <TheenMainContent>
            {renderRightSide()}
          </TheenMainContent>
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxEditorItems: getEditorItems(state),
  reduxLibraryItems: getLibraryItems(state),
})
const mapDispatchToProps = dispatch => ({
  updatingEditor: (settings) => dispatch(updating(settings)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TheenDroppable);
