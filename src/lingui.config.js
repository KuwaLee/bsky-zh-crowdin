/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: [
    'en',
    'ca',
    'de',
    'en-GB',
    'es',
    'fi',
    'fr',
    'ga',
    'hi',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'pt-BR',
    'ru',
    'th',
    'tr',
    'uk',
    'zh-CN',
    'zh-HK',
    'zh-TW',
  ],
  catalogs: [
    {
      path: '<rootDir>/src/locale/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
}