import handlebars from 'handlebars';

handlebars.registerHelper('ifE', function(arg1, arg2, options) {
  return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
});

handlebars.registerPartial('class::color', '{{colors.name}}');
handlebars.registerPartial('class::color-normal', '{{colors.name}}-{{colors.normal}}');
handlebars.registerPartial('class::color-lighter', '{{colors.name}}-{{colors.lighter}}');
handlebars.registerPartial('class::color-darker', '{{colors.name}}-{{colors.darker}}');

handlebars.registerPartial(
  'class::rounded',
  '{{#if borders.radius.topLeft}}{{borders.radius.topLeft}} {{/if}}' +
  '{{#if borders.radius.topRight}}{{borders.radius.topRight}} {{/if}}' +
  '{{#if borders.radius.bottomLeft}}{{borders.radius.bottomLeft}} {{/if}}' +
  '{{#if borders.radius.bottomRight}}{{borders.radius.bottomRight}} {{/if}}'
);
handlebars.registerPartial(
  'attr::imgSrc',
  // 'https://picsum.photos/{{w}}/{{h}}',
  'https://dummyimage.com/{{w}}x{{h}}'
);

handlebars.registerPartial(
  'theme::Standard::Heading',
  'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight'
);

export const hbs = handlebars;