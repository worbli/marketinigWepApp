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
    title: 'Direction / aim',
    subTitle: 'WORBLI is built for access, transparency, and unity.',
    body: 'WORBLI was created with the intention of supplying a safe platform for users and developers to engage all the benefits of distributed ledger technology without the risks associated with anonymity.  A platform in which is robust enough to scale to the speed and accessibility of modern centralized platforms while reducing user friction and costs to applications. \n \n A place where the most innovative of applications can exist within the confines of the latest regulatory restrictions.  Where compliance and innovation are at the forefront of the mission.\n\n Distributed ledger technology has typically been out of reach for the common person.  High technical knowledge requirements combined with complex process and unsecured accounts have plagued the adoption from the masses.  \n\n Simple user accounts, user supplied resources, recoverable access to assets, and easy integrations with existing technology are necessary to ensure the growth and development of this incredible technology.  If it\'s not better than existing system, it\'s not relevant and it won\'t survive the test of time.\n\n WORBLI is the technical infrastrcuture required to bridge the gap from digital assets to existing financial systems.  \n \n Government regulation is not going away.  Moving underground is not the solution.  We can\'t fight the government we can only adapt and pivot.  WORBLI makes that pivot easy.  More investor confidence, more institutional investment, better business, longevity.\n\n An accessible and fair global financial infrastructure for innovators and dreamers.  For those who know the existing systems, that have been plagued with inequality, won\'t propel humankind forward unless we fix the issues from within the system itself.\n\n',
},
}
export { Copy }
