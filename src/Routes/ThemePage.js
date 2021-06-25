import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import TheenLibraryDroppable from 'Components/DragDrop/Library/TheenLibraryDroppable';
import TheenLibraryDraggable from 'Components/DragDrop/Library/TheenLibraryDraggable';
import { getThemeItems, updating } from 'Stores/reducers/themeStore';

import { INITIAL_THEME_ITEMS } from 'Utils/constants';
import { templateReviews } from 'Themes/reviews';

class ThemePage extends PureComponent {
  componentDidMount() {
    const { updatingTheme, match } = this.props;
    const { id } = match.params;
    if (id && INITIAL_THEME_ITEMS[id]) {
      updatingTheme(INITIAL_THEME_ITEMS[id])
    } else {
      updatingTheme([])
    }
  }

  render() {
    const { reduxThemeGroups } = this.props;

    return (
      <TheenLibraryDroppable>
        <div className="px-4 relative">
          {reduxThemeGroups.map((group, groupIndex) => (
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
  reduxThemeGroups: getThemeItems(state),
})
const mapDispatchToProps = dispatch => ({
  updatingTheme: (themeItems) => dispatch(updating(themeItems)),
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ThemePage));
