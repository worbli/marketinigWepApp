import React, { useContext } from 'react';
import { Context } from "../../components/context";
import { Copy } from '../../localization/pages/legal/accessibility';

const Accessibility: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const cpy = Copy[global.language];

  return (    
    <div>Accessibility</div>
  );
}

export { Accessibility };