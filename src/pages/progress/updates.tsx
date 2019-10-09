import React, { useContext } from 'react';
import { Context } from "../../components/context";
import { Translations } from '../../localization/dictionary';

const Updates: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const txt = Translations[global.language];

  return (    
    <div>Updates</div>
  );
}

export { Updates };