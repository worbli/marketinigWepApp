import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../components/context";
import ReactMarkdown from "react-markdown";

const Updates: React.FC = () => {
  const { global } = useContext(Context) as { global: any };
  const [state, setState] = useState({ src: "" });

  useEffect(() => {
    const getMarkdown = async () => {
      const response = await fetch(
        `https://worbli.github.io/marketinigWepApp/markdown/${global.language}/updates.md`
      );
      const src = await response.text();
      if (state.src === "") setState({ ...state, src });
    };
    getMarkdown();
  }, [global.language, state]);

  return (
    <React.Fragment>
    <div className="max-width">
      <span className="body">
        <h2>Latest updates</h2>

        <h3>
          keep up to date with our latest updates and news.
        </h3>

        </span>
      </div>

      <div className="image image--updates"> </div>

      <div className="max-width">
        <span className="body">

        <p>
          <strong>EOSIO 1.8.1 Being Deployed on WORBLI</strong>
        </p>

        <p>
          At <strong>WORBLI</strong>, we are working hard to provide the{" "}
          <strong>best possible platform</strong> for enterprise-grade
          applications using compliant, easy, and accessible blockchain network
          architecture. A significant amount of{" "}
          <strong>strategic energy</strong> is directed to ensuring{" "}
          <strong>developers</strong> have access to the{" "}
          <strong>latest innovations</strong> in the EOSIO space.
        </p>

        <p>
          Block.One is constantly working on <strong>pushing EOSIO</strong>{" "}
          architecture <strong>forward</strong> which was largely our reason for
          keeping the base code of WORBLI unaltered. WORBLI also benefits from
          having a steady group of Block Producers to work with who can easily
          collaborate and coordinate their efforts to make updates like this
          quick and seamlessly.
        </p>

        <p>
          The release of <strong>EOSIO 1.8 was historic</strong>, as it is the
          first consensus protocol update since 1.0. This means that all of the
          Block Producers were required to replay{" "}
          <strong>the whole blockchain</strong> in order to upgrade and{" "}
          <strong>stay</strong> in <strong>sync</strong> with the rest of the
          nodes. EOSIO 1.8 also emphasizes protocol features, which are enabled
          through block header extensions.
        </p>

        <p>
          <a href="https://medium.com/worbli-ecosystem/news/home">
          <button className="medium-button">Read more on medium</button>
          </a>
        </p>
      </span>
    </div>
    </React.Fragment>
  );
};

export { Updates };
