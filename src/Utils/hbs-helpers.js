import handlebars from 'handlebars';

handlebars.registerHelper('ifE', function(arg1, arg2, options) {
  return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
});
handlebars.registerPartial(
  'class::color',
  '{{colors.name}}' +
  '{{#ifE opacity "normal"}}-{{colors.normal}}{{/ifE}}' +
  '{{#ifE opacity "lighter"}}-{{colors.lighter}}{{/ifE}}' +
  '{{#ifE opacity "darker"}}-{{colors.darker}}{{/ifE}}'
);
handlebars.registerPartial(
  'class::rounded',
  '{{borders.radius.topLeft}} {{borders.radius.topRight}} ' +
  '{{borders.radius.bottomLeft}} {{borders.radius.bottomRight}}'
);
handlebars.registerPartial(
  'attr::imgSrc',
  // 'https://picsum.photos/{{w}}/{{h}}',
  'https://dummyimage.com/{{w}}x{{h}}'
);

handlebars.registerPartial(
  'group::Standard::Heading',
  'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight'
);

export const hbs = handlebars;