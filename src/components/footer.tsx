import React, { useContext } from 'react';
import { Context } from "../components/context";
import { Translations } from '../localization/dictionary';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const txt = Translations[global.language];

  return (    
    <div className='footer max-width'>
      <div>Quick links
        <ul>
          <li><a href='https://worbli.bloks.io/' target='_blank' rel="noopener noreferrer">Block Explorer</a></li>
          <li><a href='https://www.chainrift.com/trading?coinpair=WBI/EOS&' target='_blank' rel="noopener noreferrer">Exchanges</a></li>
          <li><Link to={{pathname: '/quick/report'}}>Report a vulnrability</Link></li>
          <li><Link to={{pathname: '/quick/blockProducuers'}}>Block Producers</Link></li>
        </ul>
      </div>
      <div>Follow us
      <ul>
          <li><a href='https://medium.com/@WORBLI' target='_blank' rel="noopener noreferrer">Medium</a></li>
          <li><a href='https://twitter.com/WORBLI' target='_blank' rel="noopener noreferrer">Twitter</a></li>
          <li><a href='https://www.facebook.com/worbli' target='_blank' rel="noopener noreferrer">Facebook</a></li>
          <li><a href='https://www.youtube.com/channel/UCzJHGK-1utdhj623VYHSprA' target='_blank' rel="noopener noreferrer">YouTube</a></li>
        </ul>
      </div>
      <div> Legal
        <ul>
          <li><Link to={{pathname: '/legal/terms'}}>Terms</Link></li>
          <li><Link to={{pathname: '/legal/privacy'}}>Privacy</Link></li>
          <li><Link to={{pathname: '/legal/accessibility'}}>Accessibility</Link></li>
          <li><Link to={{pathname: '/legal/jurisdiction'}}>Jurisdiction</Link></li>
        </ul>
      </div>
      <div>Contact
      <ul>
          <li><a href='mailto:hello@worbli.io' target='_blank' rel="noopener noreferrer">Email</a></li>
          <li><a href='https://worbli.zendesk.com/hc/en-us' target='_blank' rel="noopener noreferrer">Support</a></li>
          <li><a href='mailto:careers@worbli.io' target='_blank' rel="noopener noreferrer">Careers</a></li>
          <li><a href='mailto:arbitors@worbli.io' target='_blank' rel="noopener noreferrer">Arbitration</a></li>
        </ul>
      </div>

    </div>
  );
}

export { Footer };

