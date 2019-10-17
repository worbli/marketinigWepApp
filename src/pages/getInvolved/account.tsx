import React, { useContext } from 'react';
import { Context } from "../../components/context";
import { copy } from '../../localization/pages/getInvolved/account';

const Account: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const cpy = copy[global.language];

  return (    
    <div>Direction</div>
  );
}

export { Account };
