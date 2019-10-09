interface TranslationsInterface {
  language: string,
  title: string,
  subTitle: string,
  body: string,
}

const Copy: { [key: string]: TranslationsInterface; } = {
  cn: {
    language: '中文',
    title: 'string',
    subTitle: 'string',
    body: 'string',
},
  kr: {
    language: '한국어',
    title: 'string',
    subTitle: 'string',
    body: 'string',
 },
  en: {
    language: 'English',
    title: 'Key differences',
    subTitle: 'string',
    body: 'string',
},
}
export { Copy }
