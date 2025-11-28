const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'en'],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
}
