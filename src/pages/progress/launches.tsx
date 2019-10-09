import React, { useContext } from 'react';
import { Context } from "../../components/context";
import { Copy } from '../../localization/pages/progress/launches';

const Launches: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const cpy = Copy[global.language];

  return (    
    <div>Launches</div>
  );
}

export { Launches };