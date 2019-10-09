import React, { useContext } from 'react';
import { Context } from "../../components/context";
import { Copy } from '../../localization/pages/our/partners';

const Partners: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const cpy = Copy[global.language];

  return (    
    <div>Partners</div>
  );
}

export { Partners };