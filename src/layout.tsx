import React, { useContext } from 'react';
import { Translations } from './localization/dictionary';
import { Context } from "./components/context";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

interface propsInterface {
  location: any; 
}

const Layout: React.FC<propsInterface> = (props) => {
  const { global } = useContext(Context) as {global: any};
  const txt = Translations[global.language];

  return (
    <div className='layout'>
      <div className='card'><Header/></div>
      <div className='layout-body'>{props.children}</div>
      <div  className='layout-header'><Footer/></div>
    </div> 
  );
}

export { Layout };