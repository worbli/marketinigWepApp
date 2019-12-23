import React from "react";

const Launches: React.FC = () => {
  return (
    <div className="max-width">
      <span className="body">
        <h2>Application launches</h2>

        <h3>innovations currently available to Worbli users.</h3>

        <p>
          <img src="../images/launches.jpg" alt="page image" />
        </p>

        <h4>TokenOro is Live on Worbli.</h4>

        <p>
          The Gold Storage and Gold Streaming Token is Now Available to
          Accredited Investors.
        </p>

        <p>
          TokenOro was created to <strong>solve the challenge</strong> of
          raising capital which small miners struggle with on a regular basis.
          With the cost of geological testing and the expense of full-blown gold
          production, artisanal mining outfits fight to survive. Usually,
          survival can only happen if they sell 80-90% ownership of their mine
          (at a low valuation) to a large mining consortium -—-{" "}
          <strong>even when they have gold in the ground.</strong>
        </p>

        <p>
          The management team of TokenOro spent years raising capital for mining
          projects the old fashioned way but they decided to find an alternative
          solution. They <strong>partnered</strong> with <strong>WORBLI</strong>{" "}
          to create a token and a funding model that had{" "}
          <strong>never been done before</strong>.
        </p>

        <p>
          <a href="https://medium.com/worbli-ecosystem/applications/home ">
            <button className="medium-button">Read more on medium</button>
          </a>
        </p>

        <h4>Bountyblok.io Joins WORBLI.</h4>

        <p>
          WORBLI is excited to announce a strategic partnership with{" "}
          <a href="http://www.bountyblok.io">bountyblok.io</a> where an
          easy-to-use gamification and rewards engine allows everyday businesses
          to dip their toes into blockchain.
        </p>

        <p>
          Using the WORBLI blockchain as a transparent and accessible record,
          businesses can create challenges, tasks and rewards while tracking
          each user’s progress. This gamification engagement incentivizes users
          which helps to drive revenue and sales for the business.
        </p>

        <p>
          <a href="http://www.wallstreetsurvivor.com">Wallstreetsurvivor.com</a>{" "}
          was the first client to transition to the WORBLI Mainnet using
          bountyblok.io’s gamification system in their live trading competitions
          and investment educational resources.
        </p>

        <p>
          <a href="https://medium.com/worbli-ecosystem/applications/home ">
            <button className="medium-button">Read more on medium</button>
          </a>
        </p>
      </span>
    </div>
  );
};

export { Launches };
