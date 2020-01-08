import React from "react";

const Account: React.FC = () => {
  return (
    <React.Fragment>
      <div className="max-width">
        <span className="body">
          <h2 id="openanaccount">Open an account</h2>

          <h3>
            and open the world of decentralized finance and cutting edge
            applications.
          </h3>
        </span>
      </div>

      <div className="image image--account"> </div>

      <div className="max-width">
        <span className="body">
          <p>
            Opening a WORBLI account grants you access to our entire ecosystem
            of compliant applications, network resources and AML/KYC
            verification.{" "}
          </p>

          <p>
            <a href="https://portal.worbli.io/" target="_blank" rel="noopener noreferrer">
              <button className="medium-button">
                Open a free Worbli account
              </button>
            </a>
          </p>

          <p>Learn how to start you journey here:</p>

          <p>
            <a
              href="http://www.youtube.com/watch?v=dEyy3p4rqWo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="http://img.youtube.com/vi/dEyy3p4rqWo/0.jpg" alt="" />
            </a>
          </p>
        </span>
      </div>
    </React.Fragment>
  );
};

export { Account };
