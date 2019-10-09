import React, { useContext } from 'react';
import { Context } from "../components/context";
import { Translations } from '../localization/dictionary';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const txt = Translations[global.language];

  return (    
    <div className='footer max-width'>
      <div>{txt.quickLinks}
        <ul>
          <li><a href='https://worbli.bloks.io/' target='_blank' rel="noopener noreferrer">{txt.blockExplorer}</a></li>
          <li><a href='https://www.chainrift.com/trading?coinpair=WBI/EOS&' target='_blank' rel="noopener noreferrer">{txt.exchange}</a></li>
          <li><Link to={{pathname: '/quick/report'}}>{txt.reportAVulnrability}</Link></li>
          <li><Link to={{pathname: '/quick/blockProducuers'}}>{txt.blockProducers}</Link></li>
        </ul>
      </div>
      <div>Follow us
      <ul>
          <li><a href='https://medium.com/@WORBLI' target='_blank' rel="noopener noreferrer">{txt.medium}</a></li>
          <li><a href='https://twitter.com/WORBLI' target='_blank' rel="noopener noreferrer">{txt.twitter}</a></li>
          <li><a href='https://www.facebook.com/worbli' target='_blank' rel="noopener noreferrer">{txt.facebook}</a></li>
          <li><a href='https://www.youtube.com/channel/UCzJHGK-1utdhj623VYHSprA' target='_blank' rel="noopener noreferrer">{txt.youTube}</a></li>
        </ul>
      </div>
      <div> {txt.legal}
        <ul>
          <li><Link to={{pathname: '/legal/terms'}}>{txt.termsOfService}</Link></li>
          <li><Link to={{pathname: '/legal/privacy'}}>{txt.privacy}</Link></li>
          <li><Link to={{pathname: '/legal/accessibility'}}>{txt.accessibility}</Link></li>
          <li><Link to={{pathname: '/legal/jurisdiction'}}>{txt.jurisdiction}</Link></li>
        </ul>
      </div>
      <div>{txt.contact}
      <ul>
          <li><a href='mailto:hello@worbli.io' target='_blank' rel="noopener noreferrer">{txt.email}</a></li>
          <li><a href='https://worbli.zendesk.com/hc/en-us' target='_blank' rel="noopener noreferrer">{txt.support}</a></li>
          <li><a href='mailto:careers@worbli.io' target='_blank' rel="noopener noreferrer">{txt.careers}</a></li>
          <li><a href='mailto:arbitors@worbli.io' target='_blank' rel="noopener noreferrer">{txt.arbitration}</a></li>
        </ul>
      </div>

    </div>
  );
}

export { Footer };

