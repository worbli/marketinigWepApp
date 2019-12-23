import React from "react";


const Technical: React.FC = () => {
  return (
    <div className="max-width">
      <span className="body">
        <h2>Technical updates</h2>

        <h3>
          learn about the technical specifications of the worbli network.
        </h3>

        <p>
          <img src="../images/technical.jpg" alt="page image" />
        </p>

        <p>
          The WORBLI network has been optimized for Decentralized Finance (DeFi)
          and enterprise-grade services through our innovative resource model.
          Our Delegated Proof of Utility (DPOU) consensus protocols, inflation
          algorithms and resource management models ensure the efficient running
          of our network. Learn more here.
        </p>

        <p>
          <a href="https://medium.com/worbli-ecosystem/technical/home">
          <button className="medium-button">Read more on medium</button>
          </a>
        </p>

        <p>
          The WORBLI network remains up to date with software upgrades that are
          provided to the EOSIO code via Block.One. Recently the WORBLI network
          and our Block Producers upgraded to the EOSIO 1.8.1 iteration.
        </p>
      </span>
    </div>
  );
};

export { Technical };
