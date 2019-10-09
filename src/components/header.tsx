import React, { useContext } from 'react';
import { Context } from "../components/context";
import { Translations } from '../localization/dictionary';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { global } = useContext(Context) as {global: any};
  const txt = Translations[global.language];

  const dropDownAbout = React.useRef<HTMLDivElement>(null);
  const dropDownGetInvolved = React.useRef<HTMLDivElement>(null);
  const dropDownProgress = React.useRef<HTMLDivElement>(null);
  const dropDownWhoWeAre= React.useRef<HTMLDivElement>(null);
  
  const openAbout = () => {
    if (dropDownAbout.current) dropDownAbout.current.style.display = 'block';
    if (dropDownGetInvolved.current) dropDownGetInvolved.current.style.display = 'none';
    if (dropDownProgress.current) dropDownProgress.current.style.display = 'none';
    if (dropDownWhoWeAre.current) dropDownWhoWeAre.current.style.display = 'none';
  }
  const openGetInvolved = () => {
    if (dropDownGetInvolved.current) dropDownGetInvolved.current.style.display = 'block';
    if (dropDownAbout.current) dropDownAbout.current.style.display = 'none';
    if (dropDownProgress.current) dropDownProgress.current.style.display = 'none';
    if (dropDownWhoWeAre.current) dropDownWhoWeAre.current.style.display = 'none';
  }
  const openProgress = () => {
    if (dropDownProgress.current) dropDownProgress.current.style.display = 'block';
    if (dropDownAbout.current) dropDownAbout.current.style.display = 'none';
    if (dropDownGetInvolved.current) dropDownGetInvolved.current.style.display = 'none';
    if (dropDownWhoWeAre.current) dropDownWhoWeAre.current.style.display = 'none';
  }
  const openWhoWeAre = () => {
    if (dropDownWhoWeAre.current) dropDownWhoWeAre.current.style.display = 'block';
    if (dropDownGetInvolved.current) dropDownGetInvolved.current.style.display = 'none';
    if (dropDownProgress.current) dropDownProgress.current.style.display = 'none';
    if (dropDownAbout.current) dropDownAbout.current.style.display = 'none';
  }

  window.onclick = (event: any) => {
    if (event.target.id !== 'dropdown-button' && dropDownWhoWeAre.current && dropDownAbout.current && dropDownGetInvolved.current && dropDownProgress.current) {
      dropDownAbout.current.style.display = 'none';
      dropDownGetInvolved.current.style.display = 'none';
      dropDownProgress.current.style.display = 'none';
      dropDownWhoWeAre.current.style.display = 'none';
    }
  }


  return (    
    <div className='header max-width'>
      <Link to={{pathname: '/'}}><h1>{txt.siteName}</h1></Link>
      <div></div>
      <div className='top-nav'>
        <div className='dropdown-button' onClick={openAbout} id='dropdown-button'>{txt.about}
          <span className='dropdown' ref={dropDownAbout}>
            <Link to={{pathname: '/about/direction'}}>{txt.directionAim}</Link>
            <Link to={{pathname: '/about/differences'}}>{txt.keyDifferences}</Link>
            <Link to={{pathname: '/about/governance'}}>{txt.governanceComplience}</Link>
          </span>
        </div>

        <div className='dropdown-button' onClick={openGetInvolved} id='dropdown-button'>{txt.getInvolved}
        <span className='dropdown' ref={dropDownGetInvolved}>
            <Link to={{pathname: '/getInvolved/launch'}}>{txt.launchOnWorbli}</Link>
            <Link to={{pathname: '/getInvolved/partner'}}>{txt.partnerWithUs}</Link>
            <Link to={{pathname: '/getInvolved/account'}}>{txt.openAnAccount}</Link>
          </span>
        </div>

        <div className='dropdown-button' onClick={openProgress} id='dropdown-button'>Progress
        <span className='dropdown' ref={dropDownProgress}>
            <Link to={{pathname: '/progress/updates'}}>{txt.latestUpdates}</Link>
            <Link to={{pathname: '/progress/launches'}}>{txt.applicationLaunches}</Link>
            <Link to={{pathname: '/progress/technical'}}>{txt.technicalUpdates}</Link>
          </span>
        </div>

        <div className='dropdown-button' onClick={openWhoWeAre} id='dropdown-button'>{txt.whoWeAre}
        <span className='dropdown' ref={dropDownWhoWeAre}>
            <Link to={{pathname: '/our/team'}}>{txt.theTeam}</Link>
            <Link to={{pathname: '/our/foundation'}}>{txt.foundation}</Link>
            <Link to={{pathname: '/our/partners'}}>{txt.ourPartners}</Link>
            <Link to={{pathname: '/our/press'}}>{txt.pressReleases}</Link>
            <Link to={{pathname: '/our/contacts'}}>{txt.contactUs}</Link>
          </span>
        </div>
        
      </div>
    </div>
  );
}

export { Header };