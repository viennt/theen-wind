import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Frame from 'react-frame-component';

import TheenBuilder from 'Components/TheenBuilder';

import { getSettingFontFamily } from 'Stores/reducers/settingsStore';
import { getEditorItems } from 'Stores/reducers/editorStore';

import { templates } from 'Templates';

class TheenViewPreview extends PureComponent {
  render() {
    const { reduxEditorItems, reduxFontFamily } = this.props;

    const innerHTML = {__html: `body * { font-family: '${reduxFontFamily}', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif }`}
    return (
      <div className="w-full h-full p-2 bg-gray-200 border border-solid border-gray-300">
        <Frame
          className="w-full h-full bg-white rounded border border-solid border-gray-300"
          head={
            <>
              <link href="/css/tailwind.min.css" rel="stylesheet" />
              <link href="/css/fonts.css" rel="stylesheet" />
              <style dangerouslySetInnerHTML={innerHTML}/>
            </>
          }>
          {reduxEditorItems.map(
            item => <TheenBuilder key={item.id} {...templates[item.block]} />
          )}
        </Frame>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxEditorItems: getEditorItems(state),
  reduxFontFamily: getSettingFontFamily(state),
})
export default connect(mapStateToProps)(TheenViewPreview);
