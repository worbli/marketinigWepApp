import React, { useContext } from 'react';
import { Context } from "../../components/context";
import image from '../../images/pages/direction.jpg'

const Direction: React.FC = () => {
  const { global } = useContext(Context) as {global: any};

  return (    
      <div className='max-width'>
        { global.language === 'en' && 
          <span className='body'>
            <h2 className='title'>Direction / aim</h2>
            <h3 className='sub-title'>worbli is built for access, transparency, and unity.</h3>
            <img src={image} className='title-image' />
            <p className='body-copy'>WORBLI was created with the intention of supplying a safe platform for users and developers to engage all the benefits of DLT (distributed ledger technology) without the risks.  A platform which is robust enough to scale to the speed and accessibility of modern centralized platforms while reducing user friction and costs to applications.</p>
            <p className='body-copy'>A place where the most innovative of applications can exist within the confines of the latest regulatory restrictions.  Where compliance and innovation are at the forefront of the mission</p>
            <p className='body-copy'>DLT has typically been out of reach for the average person.  The need for high technical knowledge combined with its complex process and unsecured accounts have kept DLT solutions from being adopted by the masses.</p>
            <p className='body-copy'>Simple user accounts, user supplied resources, recoverable account access, and easy integrations with existing technology are necessary to ensure the growth and development of this incredible technology.  If it's not better than existing systems, it won't last the test of time.</p>
            <p className='body-copy'>WORBLI has the infrastructure required to bridge the gap from digital assets to existing financial systems. </p>
            <p className='body-copy'>Government regulation is not going away.  At the same time, as new rules pop up, we can learn to adapt and pivot.  WORBLI makes that pivot easy. WORBLI is creating an accessible and fair DeFi infrastructure for innovators and dreamers.</p>
          </span>
        }
      </div>
  );
}

export { Direction };
