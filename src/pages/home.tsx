import React, { useContext } from 'react';
import { Context } from "../components/context";
import { Carousel } from "../components/carousel";
import { Translations } from '../localization/dictionary';
import { HomeCopy } from '../localization/pages/home';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
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
          <h2 className='title'>{cpy.getInvolvedTitle}</h2>
          <h3 className='sub-title'>{cpy.getInvolvedStrapline}</h3>
          <div className='three-column-grid'>
            <div>
              <img src='./images/launchOnWorbli.png' alt=''/>
              <h4 className='item-title'>{cpy.joinCardOneTitle}</h4>
              <p>{cpy.joinCardOneIntro}</p>
              <ul>
                <li><Link to={{pathname: '/getInvolved/launch'}}>Launch on Worbli</Link></li>
                <li><Link to={{pathname: '/progress/launches'}}>Recent launche</Link>s</li>
              </ul>
            </div>
            <div>
            <img src='./images/partnerWithUs.png' alt=''/>
              <h4 className='item-title'>{cpy.joinCardTwoTitle}</h4>
              <p>{cpy.joinCardTwoIntro}</p>
              <ul>
                <li><Link to={{pathname: '/getInvolved/partner'}}>Partner wth us</Link></li>
                <li><Link to={{pathname: '/our/partners'}}>Our partners</Link></li>
              </ul>
            </div>
            <div>
            <img src='./images/openAnAccount.png' alt=''/>
              <h4 className='item-title'>{cpy.joinCardThreeTitle}</h4>
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
          <h2 className='title'>{cpy.progressTitle}</h2>
          <h3 className='sub-title'>{cpy.progressStrapline}</h3>
          <div className='three-column-grid'>
            <div className='floating-card'>
              <h4 className='item-title'>{cpy.progressCardOneTitle}</h4>
              <p>{cpy.progressCardOneIntro}</p>
              <Link to={{pathname: '/progress/updates'}}><button className='left blue'>Latest updates</button></Link>
            </div>  
            <div className='floating-card'>
              <h4 className='item-title'>{cpy.progressCardTwoTitle}</h4>
              <p>{cpy.progressCardTwoIntro}</p>
              <Link to={{pathname: '/progress/launches'}}><button className='left blue'>Application launches</button></Link>
            </div>
            <div className='floating-card'>
              <h4 className='item-title'>{cpy.progressCardThreeTitle}</h4>
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