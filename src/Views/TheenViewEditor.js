import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import TheenEditorDroppable from 'Components/DragDrop/Editor/TheenEditorDroppable';
import TheenEditorList from 'Components/DragDrop/Editor/TheenEditorList';

import { getSettingFontFamily, getSettingView } from 'Stores/reducers/settingsStore';

import { FONT_FAMILIES, VIEW_TYPES } from 'Utils/constants';

class TheenViewEditor extends PureComponent {
  render() {
    const { reduxView, reduxFontFamily } = this.props;
    const displayClass = reduxView === VIEW_TYPES.EDITOR ? 'block' : 'hidden';
    const styles = { fontFamily: `'${reduxFontFamily.value}', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif` };

    return (
      <>
        <Helmet>
          {reduxFontFamily.href !== '' && FONT_FAMILIES.map(font =>
            <link key={font.value} rel="stylesheet" href={font.href} />)}
        </Helmet>
        <div className={`w-full h-full select-none ${displayClass}`} style={styles}>
          <TheenEditorDroppable>
            <TheenEditorList />
          </TheenEditorDroppable>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  reduxView: getSettingView(state),
  reduxFontFamily: getSettingFontFamily(state),
})
export default connect(mapStateToProps)(TheenViewEditor);
