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
          </span>
        }
      </div>
  );
}

export { Direction };
