import React, { useEffect } from 'react';
import { Header } from "./components/header";
import { Footer } from "./components/footer";

interface propsInterface {
  location: any; 
}

const Layout: React.FC<propsInterface> = (props) => {

  useEffect(() => {
    const element = document.getElementById('shell');
    if (element) element.scrollTo(0, 0);
  }, [props.location]);


  return (
    <div className='layout'>
      <div className='card'><Header/></div>
      <div className='layout-body'>{props.children}</div>
      <div  className='layout-header'><Footer/></div>
    </div> 
  );
}

export { Layout };
