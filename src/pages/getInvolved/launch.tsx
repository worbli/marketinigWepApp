import React, { useContext } from 'react';
import { Context } from "../../components/context";
import image from '../../images/pages/launch.jpg'

const Launch: React.FC = () => {
  const { global } = useContext(Context) as {global: any};

  return (    
      <div className='max-width'>
        { global.language === 'en' && 
          <span className='body'>
            <h2 className='title'>Launch on Worbli</h2>
            <h3 className='sub-title'>together we are stronger</h3>
            <img src={image} className='title-image' />
            <p className='body-copy'>WORBLI provides fertile ground for applications to be able to develop, innovate and prosper within the ever changing regulatory environment.  We make compliance easy, affordable and within reach for small and large applications alike.</p>
            <p className='body-copy'>WORBLI has a number of unique value propositions for developers.  We are enabling opportunity for expansion and growth </p>
            <h4 className='body-title'>Free user account creation</h4>
            <p className='body-copy'>We take the guess work and additional costs out of ensuring legitimate verified users through our easy to follow portal interface.</p>
            <h4 className='body-title'>Lightning fast transaction speeds with unlimited scalability</h4>
            <p className='body-copy'>Zero congestion, zero frictional lag.  We use superior technology to ensure your customers have the best user experience.</p>
            <h4 className='body-title'>Stable resource pricing </h4>
            <p className='body-copy'>Developers building on Distributed ledger technology need to know their costs.  Stable resource pricing takes the guess work out of knowing your bottom line. WORBLI's resource model ensures that people can operate freely within the ecosystem without having to pay additional fees just to send transactions or interact with your application.</p>
            <h4 className='body-title'>Infrastructure to bridge the gap</h4>
            <p className='body-copy'>With a vast array of infrastructure upgrades including social sign in, payment processors, and easy to navigate developer tools, WORBLI makes building your application seamless from start to finish.  Intuitive UX & UI, Optimized for Simplicity.</p>
            <h4 className='body-title'>Recoverable accounts</h4>
            <p className='body-copy'>WORBLI has network managed resources allowing users to recover lost accounts easily via our customer service infrastructure.</p>
            <h4 className='body-title'>Dispute Resolution</h4>
            <p className='body-copy'>At WORBLI, we feel like blockchain governance should make sense.  Disputes are handled within the system ensuring both applications and customers feel safe and secure with all the rights they would have outside of the blockchain world.</p>
            <h4 className='body-title'>Access to existing AML partners for picture perfect compliance</h4>
            <p className='body-copy'>For apps that wish to use it, WORBLI has vetted partners who provide preferred pricing for ongoing AML and transactional monitoring as required by FIncen and the FATF guidelines.</p>
            <h4 className='body-title'>Compliance at the token level</h4>
            <p className='body-copy'>Do you have a product that is only available to accredited investors?  Do you want to launch an STO or a token that is only available in certain locations?  WORBLI has you covered with unique token registries allowing the most stringent of processes to be built right into the token itself.</p>
            <h4 className='body-title'>Our partners and suite of applications can also leverage expert level consulting for... </h4>
            <p className='body-copy'>
              <ul>
                <li>Marketing</li>
                <li>Tech</li>
                <li>Legal</li>
                <li>Strategy</li>
                <li>Tokenomics</li>
                <li>Blockchain architecture</li>
                <li>Network development </li>
              </ul>
            </p>
          </span>
        }
      </div>
  );
}
export { Launch };

