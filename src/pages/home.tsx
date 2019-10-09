import React, { useContext } from 'react';
import { Context } from "../components/context";
import { Carousel } from "../components/carousel";
import { Translations } from '../localization/dictionary';
import { HomeCopy } from '../localization/pages/home';
import { Link } from 'react-router-dom';

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
              <img src='./images/launchOnWorbli.png' alt=''/>
              <h4 className='item-title'>{txt.joinCardOneTitle}</h4>
              <p>{cpy.joinCardOneIntro}</p>
              <ul>
                <li><Link to={{pathname: '/getInvolved/launch'}}>Launch on Worbli</Link></li>
                <li><Link to={{pathname: '/progress/launches'}}>Recent launche</Link>s</li>
              </ul>
            </div>
            <div>
            <img src='./images/partnerWithUs.png' alt=''/>
              <h4 className='item-title'>{txt.joinCardTwoTitle}</h4>
              <p>{cpy.joinCardTwoIntro}</p>
              <ul>
                <li><Link to={{pathname: '/getInvolved/partner'}}>Partner wth us</Link></li>
                <li><Link to={{pathname: '/our/partners'}}>Our partners</Link></li>
              </ul>
            </div>
            <div>
            <img src='./images/openAnAccount.png' alt=''/>
              <h4 className='item-title'>{txt.joinCardThreeTitle}</h4>
              <p>{cpy.joinCardThreeIntro}</p>
              <ul>
                <li><Link to={{pathname: '/getInvolved/account'}}>Open an account</Link></li>

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
              <Link to={{pathname: '/progress/updates'}}><button className='left blue'>Latest updates</button></Link>
            </div>  
            <div className='floating-card'>
              <h4 className='item-title'>{txt.progressCardTwoTitle}</h4>
              <p>{cpy.progressCardTwoIntro}</p>
              <Link to={{pathname: '/progress/launches'}}><button className='left blue'>Application launches</button></Link>
            </div>
            <div className='floating-card'>
              <h4 className='item-title'>{txt.progressCardThreeTitle}</h4>
              <p>{cpy.progressCardThreeIntro}</p>
              <Link to={{pathname: '/progress/technical'}}><button className='left blue'>Technical updates</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };