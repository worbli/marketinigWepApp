import React, { useContext } from 'react';
import { Context } from "../components/context";
import { Translations } from '../localization/dictionary';

const Carousel: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const txt = Translations[global.language];

  return (    
    <div className='carousel'>
        <button className='left-button'></button>
        <button className='right-button'></button>
    </div>
  );
}

export { Carousel };