import React, { useContext } from 'react';
import { Context } from "../../components/context";
import image from '../../images/pages/partner.jpg'

const Partner: React.FC = () => {
  const { global } = useContext(Context) as {global: any};

  return (    
      <div className='max-width'>
        { global.language === 'en' && 
          <span className='body'>
            <h2 className='title'>Partner with us</h2>
            <h3 className='sub-title'>together we are stronger</h3>
            <img src={image} className='title-image' />
            <p className='body-copy'>We are always on a mission to find good partners who share our WORBLI values.  We actively seek out the best applications, technical teams, infrastructure, and  technology.  </p>
            <p className='body-copy'>Collaboration is a requirement of success.  It's really not optional.  Focus on what you do best and attract the best minds in the space to grow and prosper.</p>
            <p className='body-copy'>While all of our partners are vetted and checked for compliance, we want to work with organizations who share our desire to create a diverse and accessible ecosystem.</p>
            <p className='body-copy'>If you have an innovative idea or project that you think fits our ethos, we want to work with you.  We have a vast array of partners from all industries and are always scouting out the next wave. We are pioneering the future of innovation one day at a time and we invite you to join us.</p>
            <p className='body-copy'>Ethics, versatility, and service.  No project too big or small.  We welcome everyone to reach out and initiate a conversation.  Together we can shape a fast, resilient infrastructure, that will bring digital assets to the masses, allowing businesses to innovate the future of DeFi technology.</p>
            <p className='body-copy'>For more information please complete and submit the form below and someone from our team will be in touch.</p>
          </span>
        }
      </div>
  );
}

export { Partner };