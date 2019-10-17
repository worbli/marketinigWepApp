import React, { useContext } from 'react';
import { Context } from "../../components/context";
import { copy } from '../../localization/pages/about/governance';

const Governance: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const cpy = copy[global.language];

  return (    
    <div className='max-width'>
      <h2 className='title'>{cpy.title}</h2>
      <h3 className='sub-title'>{cpy.subTitle}</h3>
    </div>
  );
}

export { Governance };
