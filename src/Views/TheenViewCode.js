import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import virtualizedRenderer from 'react-syntax-highlighter-virtualized-renderer';

import { getSettingColors, getSettingBorders } from 'Stores/reducers/settingsStore';
import { getEditorItems } from 'Stores/reducers/editorStore';

import { hbs } from 'Utils/hbs-helpers';

import { templateSettings } from 'Themes/settings';

class TheenViewCode extends PureComponent {
  render() {
    const { reduxColors, reduxBorders, reduxEditorItems } = this.props;

    return (
      <div className="w-full h-full text-xs sm:p-2 bg-gray-200 sm:border border-solid border-gray-300">
      <div className="w-full h-full bg-white rounded sm:border border-solid border-gray-300 overflow-hidden">
        <SyntaxHighlighter
          className="h-full"
          language="htmlbars"
          style={atomOneLight}
          showLineNumbers
          showInlineLineNumbers
          renderer={virtualizedRenderer()}
          // customStyle={{ backgroundColor: 'white' }}
          lineNumberStyle={{ color: '#d1d5da' }}
        >
          {reduxEditorItems
            .map(item => {
              const generator = hbs.compile(templateSettings[item.block].template);
              return generator(
                {
                  ...templateSettings[item.block].props,
                  colors: reduxColors,
                  borders: reduxBorders
                }
              );
            })
            .reduce((accumulator, currentValue) =>  `${accumulator}\n${currentValue}`, [''])}
        </SyntaxHighlighter>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxEditorItems: getEditorItems(state),
  reduxColors: getSettingColors(state),
  reduxBorders: getSettingBorders(state),
})
export default connect(mapStateToProps)(TheenViewCode);
