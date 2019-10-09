interface TranslationsInterface {
  language: string,
}

const Copy: { [key: string]: TranslationsInterface; } = {
  cn: {
    language: '中文',
},
  kr: {
    language: '한국어',
 },
  en: {
    language: 'English',
},
}
export { Copy }
