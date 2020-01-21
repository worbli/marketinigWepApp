import React from "react";
import { Carousel } from "../components/carousel";
import { Link } from "react-router-dom";

const Home: React.FC = () => {

  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="card">
        <div className="max-width">
          <h2 className="title">Get involved</h2>
          <h3 className="sub-title">Building a fair and inclusive world through enterprise-grade financial technology.</h3>
          <br/><br/><br/><br/>
          <div className="three-column-grid">
            <div>
              <img src="./images/launchOnWorbli.jpg" alt="" />
              <h4 className="item-title">Launch On Worbli</h4>
              <p>Are you working on a blockchain application that needs to be compliant with global laws and regulations? Learn how WORBLI can help. </p>
              <ul className="link">
                <li>
                  <Link to={{ pathname: "/getInvolved/launch" }}>
                    Launch on Worbli
                  </Link>
                </li>
                <li>
                  <Link to={{ pathname: "/progress/launches" }}>
                    Recent launches
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <img src="./images/partnerWithUs.jpg" alt="" />
              <h4 className="item-title">Partner With Us</h4>
              <p>The WORBLI network is collaborative If you can provide a core service to the network, such as identity verification, dispute resolution or developer integrations, we’d love to hear from you.</p>
              <ul className="link">
                <li>
                  <Link to={{ pathname: "/getInvolved/partner" }}>
                    Partner with us
                  </Link>
                </li>
                <li>
                  <Link to={{ pathname: "/our/partners" }}>Our partners</Link>
                </li>
              </ul>
            </div>
            <div>
              <img src="./images/openAnAccount.jpg" alt="" />
              <h4 className="item-title">Open An Account</h4>
              <p>Join the financial revolution by creating your WORBLI account. The account application process is quick, easy and free.</p>
              <ul className="link">
                <li>
                  <Link to={{ pathname: "/getInvolved/account" }}>
                    Open an account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-width">
          <h2 className="title">Follow</h2>
          <h3 className="sub-title">our progress as we build, grow and change the world </h3>
          <br/><br/><br/><br/>
          <div className="three-column-grid">
            <div className="floating-card">
              <h4 className="item-title">WORBLI articles, news and announcements</h4>
              <p>Browse WORBLI related articles and news<br/><br/></p>
              <Link to={{ pathname: "/our/press" }}>
                <button className="left blue">Latest updates</button>
              </Link>
            </div>
            <div className="floating-card">
              <h4 className="item-title">Every month new partners launch</h4>
              <p>Keep up to date with the new and exciting applications launching on WORBLI</p>
              <Link to={{ pathname: "/progress/launches" }}>
                <button className="left blue">Application launches</button>
              </Link>
            </div>
            <div className="floating-card">
              <h4 className="item-title">Chain updates and new protocols</h4>
              <p>View our proposed and past technical updates and current chain specifications</p>
              <Link to={{ pathname: "/progress/technical" }}>
                <button className="left blue">Technical updates</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
