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
    title: 'Governance & Compliance ',
    subTitle: 'We can set the rules of the blockchain in the foundation.',
    body: 'A critical trait is a built in governance layer. For WORBLI, That means we can set the rules of the blockchain in the foundation. \n\n Our user accounts have a one time AML/KYC process built right in at the point of creation. \n All user accounts, transactions, and nodes will follow the rules of the governance layer that we implement. \n Block producing nodes come under our secure compliance guidelines and submit to regular auditing of ownership stakes. \n This makes WORBLI perfect for any developer that wants to create an application where financial security and scalability are paramount.\n All this with zero cost to applications\n\n WORBLI’s network governance is designed to meet the regulatory needs of global financial services and financial technology businesses. \n \n Free Verified Accounts for individual users.\n WORBLI will provide account recovery for all users; therefore if private keys are lost - there is a process for the user to recover their account.\n Dispute resolution that is based on law and provides the same security as users would expect in the real world.\n',
},
}
export { Copy }
