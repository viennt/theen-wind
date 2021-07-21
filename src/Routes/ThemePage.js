import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import TheenLibraryDroppable from 'Components/DragDrop/Library/TheenLibraryDroppable';
import TheenLibraryDraggable from 'Components/DragDrop/Library/TheenLibraryDraggable';
import { getThemeItems, updating } from 'Stores/reducers/themeStore';

import { menus, themes } from '../Themes';

class ThemePage extends PureComponent {
  componentDidMount() {
    const { updatingTheme, match } = this.props;
    const { themeId } = match.params;
    if (themeId && menus[themeId]) {
      updatingTheme(menus[themeId])
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
                         src={themes[item.block].thumbnail || '/images/blocks/default-thumbnail.png'} />
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
