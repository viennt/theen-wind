import React, { PureComponent } from 'react';
import handlebars from 'handlebars';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import virtualizedRenderer from 'react-syntax-highlighter-virtualized-renderer';

import { getSettingView } from '../../../Stores/reducers/settingsStore';
import { getEditorItems } from '../../../Stores/reducers/editorStore';

import { templates } from '../../../Templates';
import { VIEW_TYPES } from '../../../constants';

handlebars.registerHelper('ifE', function(arg1, arg2, options) {
  return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
});
handlebars.registerPartial(
  'color',
  '{{color.name}}-' +
  '{{#ifE opacity "normal"}}{{color.normal}}{{/ifE}}' +
  '{{#ifE opacity "lighter"}}{{color.lighter}}{{/ifE}}' +
  '{{#ifE opacity "darker"}}{{color.darker}}{{/ifE}}'
);
handlebars.registerPartial(
  'rounded',
  '{{radius.topLeft}} {{radius.topRight}} {{radius.bottomLeft}} {{radius.bottomRight}}'
);

class TheenViewCode extends PureComponent {
  render() {
    const { reduxView, reduxColors, reduxBorders, reduxEditorItems } = this.props;

    if (reduxView === VIEW_TYPES.CODE) {
      return (
        <div className="h-full text-xs px-1 bg-white">
          <SyntaxHighlighter
            className="h-full"
            language="htmlbars"
            style={docco}
            showLineNumbers
            showInlineLineNumbers
            renderer={virtualizedRenderer()}
            customStyle={{ backgroundColor: 'white' }}
            lineNumberStyle={{ color: '#d1d5da' }}
          >
            {reduxEditorItems
              .map(item => {
                const generator = handlebars.compile(templates[item.block].template);
                return generator(
                  {
                    ...templates[item.block].settings.template,
                    colors: reduxColors,
                    borders: reduxBorders
                  }
                );
              })
              .reduce((accumulator, currentValue) =>  `${accumulator}\n${currentValue}`)}
          </SyntaxHighlighter>
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
  reduxColors: state.settings.data.colors,
  reduxBorders: state.settings.data.borders,
})
export default connect(mapStateToProps)(TheenViewCode);
