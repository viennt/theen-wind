import handlebars from 'handlebars';

handlebars.registerHelper('ifE', function(arg1, arg2, options) {
  return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
});
handlebars.registerPartial(
  'color',
  '{{value.name}}-' +
  '{{#ifE opacity "normal"}}{{value.normal}}{{/ifE}}' +
  '{{#ifE opacity "lighter"}}{{value.lighter}}{{/ifE}}' +
  '{{#ifE opacity "darker"}}{{value.darker}}{{/ifE}}'
);
handlebars.registerPartial(
  'rounded',
  '{{radius.topLeft}} {{radius.topRight}} {{radius.bottomLeft}} {{radius.bottomRight}}'
);

export const hbs = handlebars;