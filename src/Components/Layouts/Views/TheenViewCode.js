import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import virtualizedRenderer from 'react-syntax-highlighter-virtualized-renderer';

import { getSettingView, getSettingColors, getSettingBorders } from '../../../Stores/reducers/settingsStore';
import { getEditorItems } from '../../../Stores/reducers/editorStore';

import { templates } from '../../../Templates';
import { VIEW_TYPES } from '../../../constants';
import { hbs } from '../../../hbs-helpers';

class TheenViewCode extends PureComponent {
  render() {
    const { reduxView, reduxColors, reduxBorders, reduxEditorItems } = this.props;

    if (reduxView === VIEW_TYPES.CODE) {
      return (
        <div className="w-full h-full text-xs p-2 bg-gray-200 border border-solid border-gray-300">
        <div className="w-full h-full bg-white rounded border border-solid border-gray-300 overflow-hidden">
          <SyntaxHighlighter
            className="h-full"
            language="htmlbars"
            style={github}
            showLineNumbers
            showInlineLineNumbers
            renderer={virtualizedRenderer()}
            customStyle={{ backgroundColor: 'white' }}
            lineNumberStyle={{ color: '#d1d5da' }}
          >
            {reduxEditorItems
              .map(item => {
                const generator = hbs.compile(templates[item.block].template);
                return generator(
                  {
                    ...templates[item.block].props,
                    colors: reduxColors,
                    borders: reduxBorders
                  }
                );
              })
              .reduce((accumulator, currentValue) =>  `${accumulator}\n${currentValue}`)}
          </SyntaxHighlighter>
        </div>
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
  reduxColors: getSettingColors(state),
  reduxBorders: getSettingBorders(state),
})
export default connect(mapStateToProps)(TheenViewCode);
