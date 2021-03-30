import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Frame from 'react-frame-component';

import TheenBuilder from '../../TheenBuilder';

import { getSettingFontFamily, getSettingView } from '../../../Stores/reducers/settingsStore';
import { getEditorItems } from '../../../Stores/reducers/editorStore';

import { VIEW_TYPES } from '../../../constants';
import { templates } from '../../../Templates';

class TheenViewPreview extends PureComponent {
  render() {
    const { reduxView, reduxEditorItems, reduxFontFamily } = this.props;

    if (reduxView === VIEW_TYPES.DESKTOP || reduxView === VIEW_TYPES.TABLET || reduxView === VIEW_TYPES.PHONE) {
      const innerHTML = {__html: `body * { font-family: '${reduxFontFamily}', sans-serif }`}
      return (
        <div className="w-full h-full p-2 bg-gray-200 border border-solid border-gray-300">
          <Frame
            className="w-full h-full bg-white rounded border border-solid border-gray-300"
            head={
              <>
                <link href="/css/tailwind.css" rel="stylesheet" />
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
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  reduxView: getSettingView(state),
  reduxEditorItems: getEditorItems(state),
  reduxFontFamily: getSettingFontFamily(state),
})
export default connect(mapStateToProps)(TheenViewPreview);
