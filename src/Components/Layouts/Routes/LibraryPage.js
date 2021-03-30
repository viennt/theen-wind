import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import TheenLibraryDroppable from 'Components/DragDrop/TheenLibraryDroppable';
import TheenLibraryDraggable from 'Components/DragDrop/TheenLibraryDraggable';
import { getLibraryItems } from 'Stores/reducers/libraryStore';

import { templates } from 'Templates';

class LibraryPage extends PureComponent {
  render() {
    const { reduxLibraryItems } = this.props;

    return (
      <TheenLibraryDroppable>
        <div className="p-4">
          {reduxLibraryItems.map((item, index) => (
            <TheenLibraryDraggable key={item.id} item={item} index={index}>
              <div className="rounded overflow-hidden">
                <img alt="content"
                     className="object-cover object-center h-full w-full"
                     src={templates[item.block].review} />
              </div>
            </TheenLibraryDraggable>
          ))}
        </div>
      </TheenLibraryDroppable>
    );
  }
}

const mapStateToProps = state => ({
  reduxLibraryItems: getLibraryItems(state),
})
export default connect(mapStateToProps)(LibraryPage);
