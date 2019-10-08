import React, { useContext } from 'react';
import { Context } from "../components/context";
import { Translations } from '../localization/dictionary';

const Header: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const txt = Translations[global.language];

  return (    
    <div className='header max-width'>
      <h1>{txt.siteName}</h1>
      <div></div>
      <div className='top-nav'>
        <div>About</div>
        <div>Get Involved</div>
        <div>Progress</div>
        
      </div>
    </div>
  );
}

export { Header };