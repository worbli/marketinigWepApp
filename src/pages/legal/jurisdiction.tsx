import React, { useContext } from 'react';
import { Context } from "../../components/context";
import { Copy } from '../../localization/pages/legal/jurisdiction';

const Jurisdiction: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const cpy = Copy[global.language];

  return (    
    <div>Jurisdiction</div>
  );
}


export { Jurisdiction };