import React, { useContext, useState, useEffect } from 'react';
import { Context } from "../../components/context";
import ReactMarkdown from 'react-markdown';

const Account: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const [state, setState] = useState({src: ''});
  
useEffect(() => {
  const getMarkdown = async () => {
    const response = await fetch(`https://worbli.github.io/marketinigWepApp/markdown/${global.language}/account.md`);    
    const src = await response.text();
    if (state.src === '') setState({ ...state, src});
  }
  getMarkdown();
}, [global.language, state]);

  return (    
      <div className='max-width'>
          <span className='body'>
            <ReactMarkdown source={state.src} />
          </span>
      </div>
  );
}

export { Account };
