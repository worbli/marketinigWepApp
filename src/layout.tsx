import React, { useContext } from 'react';
import { Translations } from './localization/dictionary';
import { Context } from "./components/context";

interface propsInterface {
  location: any; 
}

const Layout: React.FC<propsInterface> = (props) => {
  const { global } = useContext(Context) as {global: any};
  const txt = Translations[global.language];

  return (
    <div className='layout'>
      <div>{txt.siteName}</div>
      <div>{props.children}</div>
    </div> 

  );
}

export { Layout };