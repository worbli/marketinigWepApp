import React from 'react';
import { Header } from "./components/header";
import { Footer } from "./components/footer";

interface propsInterface {
  location: any; 
}

const Layout: React.FC<propsInterface> = (props) => {
  return (
    <div className='layout'>
      <div className='card'><Header/></div>
      <div className='layout-body'>{props.children}</div>
      <div  className='layout-header'><Footer/></div>
    </div> 
  );
}

export { Layout };
