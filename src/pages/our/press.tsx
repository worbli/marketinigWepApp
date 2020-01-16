import React from "react";
// https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@WORBLI
const Press: React.FC = () => {
  return (
    <React.Fragment>
      <div className="max-width">
        <span className="body">
          <h2 id="inthepress">In the press</h2>

          <h3>stay up to date with the latest network news.</h3>
        </span>
      </div>

      <div className="image image--press"> </div>

      <div className="max-width">
        <span className="body">
          <p>
            <a href="https://www.prnewswire.com/news-releases/worbli-partners-with-wordproof-bringing-blockchain-transparency-to-the-world-of-online-content-300904879.html">
              <h4 className="noPadding">
                WORBLI Partners With WordProof, Bringing Blockchain Transparency
                To The World Of Online Content
              </h4>
            </a>
            <p>Aug 21, 2019</p>
          </p>

          <p>
            <a href="https://www.marketwatch.com/press-release/worbli-partners-with-eos-canada-to-bring-dfuse-to-the-worbli-network-2019-07-25">
              <h4 className="noPadding">
                WORBLI Partners With EOS Canada to Bring dfuse to the WORBLI
                Network
              </h4>
            </a>
            <p>July 25, 2019</p>
          </p>

          <p>
            <a href="https://finance.yahoo.com/news/worbli-power-edna-124800977.html">
              <h4 className="noPadding">WORBLI to Power EDNA</h4>
            </a>
            <p>July 17, 2019</p>
          </p>

          <p>
            <a href="https://irishtechnews.ie/worbli-calls-2018-the-year-of-substantive-growth-in-blockchain-and-predicts-global-expansion-in-2019/">
              <h4 className="noPadding">
                WORBLI CALLS 2018 THE YEAR OF SUBSTANTIVE GROWTH IN BLOCKCHAIN
                AND PREDICTS GLOBAL EXPANSION IN 2019
              </h4>
            </a>
            <p>DECEMBER 30, 2018</p>
          </p>

          <p>
            <a href="https://markets.businessinsider.com/news/stocks/worbli-network-blockchain-s-financial-district-has-launched-1027811058">
              <h4 className="noPadding">
                WORBLI Network, "Blockchain's Financial District," has Launched
              </h4>
            </a>
            <p>December 14, 2018</p>
          </p>

          <p>
            <a href="https://www.finanzen.net/nachricht/aktien/worbli-partners-with-chainrift-on-first-public-token-sale-6923610">
              <h4 className="noPadding">
                WORBLI partners with ChainRift on first Public Token Sale
              </h4>
            </a>
            <p>Dec. 10, 2018</p>
          </p>
        </span>
      </div>
    </React.Fragment>
  );
};

export { Press };
