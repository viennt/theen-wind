import handlebars from 'handlebars';
import { connect } from 'react-redux';

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

function TheenBuilder({ template, settings, reduxColors, reduxBorders }) {
  function createMarkup() {
    const generator = handlebars.compile(template);
    return {__html: generator({
      ...settings.template,
      colors: reduxColors,
      borders: reduxBorders
    })};
  }

  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

const mapStateToProps = state => ({
  reduxColors: state.settings.data.colors,
  reduxBorders: state.settings.data.borders,
})
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(TheenBuilder);
