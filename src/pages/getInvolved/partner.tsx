import React, { useContext } from 'react';
import { Context } from "../../components/context";
import { Copy } from '../../localization/pages/getInvolved/partner';

const Partner: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const cpy = Copy[global.language];

  return (    
    <div>Direction</div>
  );
}

export { Partner };