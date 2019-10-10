import React, { useContext } from 'react';
import { Context } from "../../components/context";
import image from '../../images/pages/differences.jpg'

const Differences: React.FC = () => {
  const { global } = useContext(Context) as {global: any};

  return (    
      <div className='max-width'>
        { global.language === 'en' && 
          <span className='body'>
            <h2 className='title'>Key Differences</h2>
            <h3 className='sub-title'>The unique qualities of the Worbli offering</h3>
            <img src={image} className='title-image' />
            <p className='body-copy'>
              <h4 className='body-title'>APIs are custom, agile and managed by our proprietary SLAs (Service Level Agreements). We can cater them to individual enterprise needs</h4>
              <p>Key Features:</p>
              <ul>
                <li>An adaptive blockchain infrastructure capable of hosting applications developed in ANY programming language</li>
                <li>Superior infrastructure: Leveraging our own independent EOS blockchain with features such as built-in developer tools and feeless, reversible transactions</li>
                <li>Stable pricing - Committed to driving down deployment cost</li>
                <li>RAM, CPU and Bandwidth will get cheaper as time goes on</li>
              </ul>
            </p>
            <p className='body-copy'>
              <h4 className='body-title'>The WORBLI Token Protocol creates rulesets at the token level enabling security and functionality that that would normally have to be built in at the app or chain layers</h4>
              <p>Other features:</p>
              <ul>
                <li>Transaction speed - Real world usage of over 4k TPS. Targeting 15K TPS by the end of Q3 2019</li>
                <li>Additional auditing</li>
                <li>Guarantee of network availability </li>
                <li>Password authenticated or a private communication network</li>
                <li>Stable network support (Not just Telegram or Github)</li>
                <li>Coordinated tech. stacks between BPs</li>
                <li>Individual accounts and customers wallets cannot be hacked or altered.</li>
              </ul>
            </p>
            <p className='body-copy'>
              <h4 className='body-title'>WORBLI’s network governance is designed to meet the regulatory needs of global financial services and financial technology businesses. </h4>
              <p>Benefits are:</p>
              <ul>
                <li>Geolocated Tokens</li>
                <li>Community-based currencies</li>
                <li>Geolocated human aid and charities.</li>
                <li>Accredited investor tokens that can only be traded between accredited investors </li>
                <li>Tokens that can be transferred a limited number of times</li>
                <li>Voting tokens within a specified area </li>
                <li>Can reduce the amount of transactional monitoring a compliant business has to perform</li>
                <li>Single check for accredited investors for multiple investment opportunities</li>
                <li>Early liquidity to typically illiquid assets </li>
                <li>Assign permissions to tokens to simplify compliance requirements</li>
              </ul>
            </p>
            <p className='body-copy'>
              <h4 className='body-title'>With all of this in mind - we are enabling mass adoption of DLT whether the end user knows they’re using blockchain or not.</h4>
              <p>Benefits are:</p>
              <ul>
                <li>Free Verified Accounts for individual users.</li>
                <li>WORBLI will provide account recovery for all users; therefore if private keys are lost - there is a process for the user to recover their account.</li>
                <li>Staking for account creation executed by Application. 316 WBI per account. </li>
                <li>Single sign on - Universal login Plus KYC  </li>
                <li>Intuitive UX & UI, Optimized for Simplicity.</li>
                <li>The WORBLI Application Store. All users will have access to a family of applications that are being created on the WORBLI Blockchain</li>
              </ul>
            </p>
          </span>
        }
      </div>
  );
}

export { Differences };