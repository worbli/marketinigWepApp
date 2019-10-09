interface TranslationsInterface {
  language: string,
  siteName: string,
  notFound: string,
  accountableTransparency: string,
  enterpriseGrade: string,
  progress: string,
  publiclyAvailableForever: string,
  financiallyCompliantBlockchain: string,
  constantlyEvolvingAndProgressing: string,
  getInvolvedTitle: string,
  getInvolvedStrapline: string,
  progressTitle: string,
  progressStrapline: string,
  joinCardOneTitle: string,
  joinCardTwoTitle: string,
  joinCardThreeTitle: string,
  progressCardOneTitle: string,
  progressCardTwoTitle: string,
  progressCardThreeTitle: string,
}

const Translations: { [key: string]: TranslationsInterface; } = {
  cn: {
    language: '中文',
    siteName: 'Worbli',
    notFound: '网页未找到！',
    accountableTransparency: 'Accountable transparency',
    enterpriseGrade: 'Enterprise grade',
    progress: 'Progress',
    publiclyAvailableForever: 'Publicly Available Forever',
    financiallyCompliantBlockchain: 'financially compliant blockchain',
    constantlyEvolvingAndProgressing: 'constantly evolving and progressing',
    joinCardOneTitle: 'Launch On Worbli',
    joinCardTwoTitle: 'Partner With Us',
    joinCardThreeTitle: 'Open An Account',
    progressCardOneTitle: 'string',
    progressCardTwoTitle: 'string',
    progressCardThreeTitle: 'string',
    getInvolvedTitle: 'string',
    getInvolvedStrapline: 'string',
    progressTitle: 'string',
    progressStrapline: 'string',
  },
  kr: {
    language: '한국어',
    siteName: 'Worbli',
    notFound: '페이지를 찾을 수 없습니다!',
    accountableTransparency: 'Accountable Transparency',
    enterpriseGrade: 'Enterprise grade',
    progress: 'Progress',
    publiclyAvailableForever: 'Publicly Available Forever',
    financiallyCompliantBlockchain: 'financially compliant blockchain',
    constantlyEvolvingAndProgressing: 'constantly evolving and progressing',
    joinCardOneTitle: 'Launch On Worbli',
    joinCardTwoTitle: 'Partner With Us',
    joinCardThreeTitle: 'Open An Account',
    progressCardOneTitle: 'string',
    progressCardTwoTitle: 'string',
    progressCardThreeTitle: 'string',
    getInvolvedTitle: 'string',
    getInvolvedStrapline: 'string',
    progressTitle: 'string',
    progressStrapline: 'string',
  },
  en: {
    language: 'English',
    siteName: 'Worbli',
    notFound: 'Page not found!',
    accountableTransparency: 'Accountable Transparency',
    enterpriseGrade: 'Enterprise grade',
    progress: 'Progress',
    publiclyAvailableForever: 'Publicly available forever',
    financiallyCompliantBlockchain: 'financially compliant blockchain',
    constantlyEvolvingAndProgressing: 'constantly evolving and progressing',
    joinCardOneTitle: 'Launch On Worbli',
    joinCardTwoTitle: 'Partner With Us',
    joinCardThreeTitle: 'Open An Account',
    progressCardOneTitle: 'Worbli partners with wordproof',
    progressCardTwoTitle: 'Every month new partners launch',
    progressCardThreeTitle: 'Chain updates and new protocols',
    getInvolvedTitle: 'Get involved',
    getInvolvedStrapline: 'eliminating the confusion around blockchain',
    progressTitle: 'Progress',
    progressStrapline: 'progress lies not in enhancing what is, but in advancing toward what will be.',
  },
}
export { Translations }
