import React, { useEffect, useState } from "react";
const Press: React.FC = () => {
  const [state, setState] = useState({
    items: []
  });
  const { items } = state;

  interface ArticleData {
    title: string;
    pubDate: string;
    link: string;
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@WORBLI",
        {
          headers: {
            // prettier-ignore
            'Accept': 'application/json',
            "Content-Type": "application/json"
          },
          method: "GET"
        }
      );
      const content = await response.json();
      console.log(content.items);
      setState(prev => ({
        ...prev,
        items: content.items
      }));
    };
    getData();
  }, []);

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
          {items.map((article: ArticleData, iterator: number) => (
            <p>
              <a href={article.link} target='_blank' rel="noopener noreferrer">
                <h4 className="noPadding">{article.title}</h4>
              </a>
              <p>{article.pubDate.split(' ')[0]}</p>
            </p>
          ))}
        </span>
      </div>
    </React.Fragment>
  );
};

export { Press };
