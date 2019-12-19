import React from "react";

const Account: React.FC = () => {
  return (
    <div className="max-width">
      <span className="body">
        <h2 id="openanaccount">Open an account</h2>

        <h3>
        and open the world of decentralized finance and cutting edge applications.
        </h3>

        <p>
          <img src="../images/account.jpg" alt="page image" />
        </p>

        <p>
          Opening a WORBLI account grants you access to our entire ecosystem of
          compliant applications, network resources and AML/KYC verification.{" "}
        </p>

        <p>Learn how to start you journey here:</p>

        <p>
          <a href="http://www.youtube.com/watch?v=dEyy3p4rqWo">
            <img src="http://img.youtube.com/vi/dEyy3p4rqWo/0.jpg" alt="" />
          </a>
        </p>

        <p>
          Visit <a href='https://portal.worbli.io/' target='_blank'>https://portal.worbli.io/</a> to begin your account creation
          process.
        </p>
      </span>
    </div>
  );
};

export { Account };
