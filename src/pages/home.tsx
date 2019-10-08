import React, { useContext } from 'react';
import { Context } from "../components/context";
import { Carousel } from "../components/carousel";
import { Translations } from '../localization/dictionary';
import { HomeCopy } from '../localization/pages/home';

const Home: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const txt = Translations[global.language];
  const cpy = HomeCopy[global.language];

  return (  
    <div>
      <div>
        <div className='max-width'>
          <Carousel/>
        </div>
      </div>
      <div className='card'>
        <div className='max-width'>
          <h2 className='title'>{txt.getInvolvedTitle}</h2>
          <h3 className='sub-title'>{txt.getInvolvedStrapline}</h3>
          <div className='three-column-grid'>
            <div>
              <img src='./images/launchOnWorbli.jpg' alt=''/>
              <h4 className='item-title'>{txt.joinCardOneTitle}</h4>
              <p>{cpy.joinCardOneIntro}</p>
              <ul>
                <li>Link One</li>
                <li>Link Two</li>
              </ul>
            </div>
            <div>
            <img src='./images/partnerWithUs.jpg' alt=''/>
              <h4 className='item-title'>{txt.joinCardTwoTitle}</h4>
              <p>{cpy.joinCardTwoIntro}</p>
              <ul>
                <li>Link One</li>
              </ul>
            </div>
            <div>
            <img src='./images/openAnAccount.jpg' alt=''/>
              <h4 className='item-title'>{txt.joinCardThreeTitle}</h4>
              <p>{cpy.joinCardThreeIntro}</p>
              <ul>
                <li>Link One</li>
                <li>Link Two</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='max-width'>
          <h2 className='title'>{txt.progressTitle}</h2>
          <h3 className='sub-title'>{txt.progressStrapline}</h3>
          <div className='three-column-grid'>
            <div className='floating-card'>
              <h4 className='item-title'>{txt.progressCardOneTitle}</h4>
              <p>{cpy.progressCardOneIntro}</p>
              <button className='left blue'>Read More</button>
            </div>  
            <div className='floating-card'>
              <h4 className='item-title'>{txt.progressCardTwoTitle}</h4>
              <p>{cpy.progressCardTwoIntro}</p>
              <button className='left blue'>Read More</button>
            </div>
            <div className='floating-card'>
              <h4 className='item-title'>{txt.progressCardThreeTitle}</h4>
              <p>{cpy.progressCardThreeIntro}</p>
              <button className='left blue'>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };