import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const dropDownAbout = React.useRef<HTMLDivElement>(null);
  const dropDownGetInvolved = React.useRef<HTMLDivElement>(null);
  const dropDownProgress = React.useRef<HTMLDivElement>(null);
  const dropDownWhoWeAre = React.useRef<HTMLDivElement>(null);

  const openAbout = () => {
    if (dropDownAbout.current) dropDownAbout.current.style.display = "block";
    if (dropDownGetInvolved.current)
      dropDownGetInvolved.current.style.display = "none";
    if (dropDownProgress.current)
      dropDownProgress.current.style.display = "none";
    if (dropDownWhoWeAre.current)
      dropDownWhoWeAre.current.style.display = "none";
  };
  const openGetInvolved = () => {
    if (dropDownGetInvolved.current)
      dropDownGetInvolved.current.style.display = "block";
    if (dropDownAbout.current) dropDownAbout.current.style.display = "none";
    if (dropDownProgress.current)
      dropDownProgress.current.style.display = "none";
    if (dropDownWhoWeAre.current)
      dropDownWhoWeAre.current.style.display = "none";
  };
  const openProgress = () => {
    if (dropDownProgress.current)
      dropDownProgress.current.style.display = "block";
    if (dropDownAbout.current) dropDownAbout.current.style.display = "none";
    if (dropDownGetInvolved.current)
      dropDownGetInvolved.current.style.display = "none";
    if (dropDownWhoWeAre.current)
      dropDownWhoWeAre.current.style.display = "none";
  };
  const openWhoWeAre = () => {
    if (dropDownWhoWeAre.current)
      dropDownWhoWeAre.current.style.display = "block";
    if (dropDownGetInvolved.current)
      dropDownGetInvolved.current.style.display = "none";
    if (dropDownProgress.current)
      dropDownProgress.current.style.display = "none";
    if (dropDownAbout.current) dropDownAbout.current.style.display = "none";
  };

  window.onclick = (event: any) => {
    if (
      event.target.id !== "dropdown-button" &&
      dropDownWhoWeAre.current &&
      dropDownAbout.current &&
      dropDownGetInvolved.current &&
      dropDownProgress.current
    ) {
      dropDownAbout.current.style.display = "none";
      dropDownGetInvolved.current.style.display = "none";
      dropDownProgress.current.style.display = "none";
      dropDownWhoWeAre.current.style.display = "none";
    }
  };

  return (
    <div className="header max-width">
      <Link to={{ pathname: "/" }}>
        <h1>WORBLI</h1>
      </Link>
      <div></div>
      <div className="top-nav-mobile"></div>
      <div className="top-nav">
        <div
          className="dropdown-button"
          onClick={openAbout}
          id="dropdown-button"
        >
          About
          <span className="dropdown" ref={dropDownAbout}>
            <Link to={{ pathname: "/about/direction" }}>
            Direction
            </Link>
            <Link to={{ pathname: "/about/differences" }}>
            Key differences?
            </Link>
            <Link to={{ pathname: "/about/governance" }}>
            Governance
            </Link>
          </span>
        </div>

        <div
          className="dropdown-button"
          onClick={openGetInvolved}
          id="dropdown-button"
        >
          Get involved
          <span className="dropdown" ref={dropDownGetInvolved}>
            <Link to={{ pathname: "/getInvolved/launch" }}>
            Launch with us
            </Link>
            <Link to={{ pathname: "/getInvolved/partner" }}>
            Partner with us
            </Link>
            <Link to={{ pathname: "/getInvolved/account" }}>
            Open an account
            </Link>
            <a href="https://docs.worbli.io/" target='_blank' rel="noopener noreferrer">
            Technical documentation
            </a>
          </span>
        </div>

        <div
          className="dropdown-button"
          onClick={openProgress}
          id="dropdown-button"
        >
          Progress
          <span className="dropdown" ref={dropDownProgress}>
            <Link to={{ pathname: "/progress/updates" }}>
            Latest updates
            </Link>
            <Link to={{ pathname: "/progress/launches" }}>
            Application launches
            </Link>
            <Link to={{ pathname: "/progress/technical" }}>
            Technical updates
            </Link>
          </span>
        </div>

        <div
          className="dropdown-button"
          onClick={openWhoWeAre}
          id="dropdown-button"
        >
          Who we are
          <span className="dropdown" ref={dropDownWhoWeAre}>
            <Link to={{ pathname: "/our/team" }}>The team</Link>
            <Link to={{ pathname: "/our/foundation" }}>Foundation</Link>
            <Link to={{ pathname: "/our/partners" }}>Our partners</Link>
            <Link to={{ pathname: "/our/press" }}>Press releases</Link>
            <Link to={{ pathname: "/our/contacts" }}>Contact us</Link>
          </span>
        </div>
        <span className="header--login">
          <a href="https://portal.worbli.io" target="_blank" rel="noopener noreferrer">
            <span>Portal</span>
          </a>
        </span>
      </div>
    </div>
  );
};

export { Header };
