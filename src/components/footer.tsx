import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer max-width">
      <div>
        Quick links
        <ul className="link">


        
        <li>
            <a
              href="https://testnet.worbli.axonibyte.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Testnet Portal
            </a>
          </li>



          <li>
            <a
              href="https://worbli.bloks.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Block Explorer
            </a>
          </li>
          <li>
            <a
              href="https://www.chainrift.com/trading?coinpair=WBI/EOS&"
              target="_blank"
              rel="noopener noreferrer"
            >
              Exchange
            </a>
          </li>
          <li>
            <Link to={{ pathname: "/quick/report" }}>
              Report a vulnerability
            </Link>
          </li>
        </ul>
      </div>
      <div>
        Follow us
        <ul className="link">
          <li>
            <a
              href="https://medium.com/@WORBLI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/WORBLI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/worbli"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCzJHGK-1utdhj623VYHSprA"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </li>
        </ul>
      </div>
      <div>
        {" "}
        Legal
        <ul className="link">
          <li>
            <Link to={{ pathname: "/legal/terms" }}>Terms of service</Link>
          </li>
          <li>
            <Link to={{ pathname: "/legal/privacy" }}>Privacy</Link>
          </li>
          <li>
            <Link to={{ pathname: "/legal/accessibility" }}>Accessibility</Link>
          </li>
        </ul>
      </div>
      <div>
        Contact
        <ul className="link">
          <li>
            <a
              href="mailto:hello@worbli.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://worbli.zendesk.com/hc/en-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Footer };
