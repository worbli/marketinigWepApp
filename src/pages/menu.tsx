import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <div className='menu'>
      <div className='menu--header'>About</div>
      <Link to={{ pathname: "/about/direction" }}>Direction</Link>
      <Link to={{ pathname: "/about/differences" }}>Key differences?</Link>
      <Link to={{ pathname: "/about/governance" }}>Governance</Link>
      <div className='menu--header'>Get involved</div>
      <Link to={{ pathname: "/getInvolved/launch" }}>Launch with us</Link>
      <Link to={{ pathname: "/getInvolved/partner" }}>Partner with us</Link>
      <Link to={{ pathname: "/getInvolved/account" }}>Open an account</Link>
      <div className='menu--header'>Progress</div>
      <Link to={{ pathname: "/progress/updates" }}>Latest updates</Link>
      <Link to={{ pathname: "/progress/launches" }}>Application launches</Link>
      <Link to={{ pathname: "/progress/technical" }}>Technical updates</Link>
      <div className='menu--header'>Who we are</div>
      <Link to={{ pathname: "/our/team" }}>The team</Link>
      <Link to={{ pathname: "/our/foundation" }}>Foundation</Link>
      <Link to={{ pathname: "/our/partners" }}>Our partners</Link>
      <Link to={{ pathname: "/our/press" }}>Press releases</Link>
      <Link to={{ pathname: "/our/contacts" }}>Contact us</Link>
    </div>
  );
};

export { Menu };
