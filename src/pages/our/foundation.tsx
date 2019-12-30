import React from "react";

const Foundation: React.FC = () => {
  return (
    <React.Fragment>
      <div className="max-width">
        <span className="body">
          <h2 id="foundation">Foundation</h2>

          <h3>is the governing body of the entire ecosystem.</h3>
        </span>
      </div>

      <div className="image image--foundation"> </div>

      <div className="max-width">
        <span className="body">
          <p>
            The not for profit organization maintained by our community, block
            producers and board members is committed to fulfilling our vision
            through the creation of a vibrant WORBLI community, with the
            following protocols:
          </p>

          <ul>
            <li>
              Project Software will be open-sourced, with some potential patent
              applications for proprietary technology - all community-owned
            </li>

            <li>
              Decentralized decision-making by the community for all
              macroeconomic decisions
            </li>

            <li>
              Day-to-day operations, marketing, and general project management
              executed by the WORBLI Foundation team
            </li>

            <li>Total financial transparency</li>

            <li>
              Board of directors made up of representatives from our Block
              Producers to start and evolving into a representation of the whole
              of WORBLI’s stakeholders.
            </li>

            <li>
              The Board members will be elected annually to continue their
              service or be replaced by newly elected members through processes
              in our governance model.
            </li>
          </ul>

          <p>The Board will provide guidance and approval for:</p>

          <ul>
            <li>Contracts and compensation</li>
            <li>Budgets</li>
            <li>Strategic planning</li>
            <li>Strategic Partnerships</li>
            <li>Asset Management</li>
          </ul>
        </span>
      </div>
    </React.Fragment>
  );
};
export { Foundation };
