import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { getLibraryItems, updating } from 'Stores/reducers/libraryStore';

import { INITIAL_LIB_ITEMS } from 'Utils/constants';

class LibraryPage extends PureComponent {
  componentDidMount() {
    const { updatingLibrary } = this.props;
    updatingLibrary(INITIAL_LIB_ITEMS)
  }

  render() {
    const { reduxLibraryThemes } = this.props;

    return (
        <div className="p-4 relative">
          {reduxLibraryThemes.map((theme, themeIndex) => (
            <NavLink
              to={`/${theme.id}`} exact className="block bg-white rounded-lg overflow-hidden shadow-xl mb-4"
              key={themeIndex}>
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={theme.cover || `https://dummyimage.com/300x100/ffffff?text=${theme.label}`}
              />
            </NavLink>
          ))}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxLibraryThemes: getLibraryItems(state),
})
const mapDispatchToProps = dispatch => ({
  updatingLibrary: (libraryItems) => dispatch(updating(libraryItems)),
})
export default connect(mapStateToProps, mapDispatchToProps)(LibraryPage);
