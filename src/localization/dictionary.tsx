interface TranslationsInterface {
  language: string,
  siteName: string,
  notFound: string,
}

const Translations: { [key: string]: TranslationsInterface; } = {
  cn: {
    language: '中文',
    siteName: 'Worbli',
    notFound: '网页未找到！',

  },
  kr: {
    language: '한국어',
    siteName: 'Worbli',
    notFound: '페이지를 찾을 수 없습니다!',
  },
  en: {
    language: 'English',
    siteName: 'Worbli',
    notFound: 'Page not found!',
  },
}
export { Translations }
