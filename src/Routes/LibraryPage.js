import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import TheenLibraryDroppable from 'Components/DragDrop/Library/TheenLibraryDroppable';
import TheenLibraryDraggable from 'Components/DragDrop/Library/TheenLibraryDraggable';
import { getLibraryItems, updating } from 'Stores/reducers/libraryStore';

import { INITIAL_LIB_ITEMS } from 'Utils/constants';
import { templateReviews } from 'Themes/reviews';

class LibraryPage extends PureComponent {
  componentDidMount() {
    const { updatingLibrary } = this.props;
    updatingLibrary(INITIAL_LIB_ITEMS)
  }

  render() {
    const { reduxLibraryGroups } = this.props;

    return (
      <TheenLibraryDroppable>
        <div className="px-4 relative">
          {reduxLibraryGroups.map((group, groupIndex) => (
            <React.Fragment key={groupIndex}>
              <div className="sticky -top-1 -mx-4 bg-white text-center px-2 py-1 mb-3 z-10">
                {group.name}
              </div>
              {group.blocks.map((item, itemIndex) => (
                <TheenLibraryDraggable key={item.id} item={item} index={{ groupIndex, itemIndex }}>
                  <div className="rounded overflow-hidden">
                    <img alt="content"
                         className="object-cover object-center h-full w-full"
                         src={templateReviews[item.block] || `https://dummyimage.com/300x100/ffffff?text=${item.block}`} />
                  </div>
                </TheenLibraryDraggable>
              ))}
            </React.Fragment>
          ))}
        </div>
      </TheenLibraryDroppable>
    );
  }
}

const mapStateToProps = state => ({
  reduxLibraryGroups: getLibraryItems(state),
})
const mapDispatchToProps = dispatch => ({
  updatingLibrary: (libraryItems) => dispatch(updating(libraryItems)),
})
export default connect(mapStateToProps, mapDispatchToProps)(LibraryPage);
