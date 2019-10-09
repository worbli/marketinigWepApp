import React, { useContext } from 'react';
import { Context } from "../../components/context";
import { Copy } from '../../localization/pages/about/direction';

const Direction: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const cpy = Copy[global.language];

  return (    
    <div className='max-width'>
      <h2 className='title'>{cpy.title}</h2>
      <h3 className='sub-title'>{cpy.subTitle}</h3>
      <img src='/images/pages/direction.jpg' className='title-image' />
      <p className='page-body'>{cpy.body}</p>
    </div>
  );
}

export { Direction };
