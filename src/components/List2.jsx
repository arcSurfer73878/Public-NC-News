import React from "react";
import Votes from "./Votes";
import { Link } from "@reach/router";

function List2({ articles, articleFilter }) {
  function compare(a, b) {
    const commentA = a.comment_count;
    const commentB = b.comment_count;
    let comparison = 0;
    if (commentA > commentB) {
      comparison = -1;
    } else if (commentA < commentB) {
      comparison = 1;
    }
    return comparison;
  }
  const result = articles.sort(compare);
  return (
    <div>
      {result.reduce((acc, article) => {
        if (
          !articleFilter ||
          article.title.toLowerCase().includes(articleFilter.toLowerCase()) ||
          article.body.includes(articleFilter)
        ) {
          acc.push(
            <div key={article._id} className="card">
              <Link style={{ textDecoration: "none" }} to={`/${article._id}`}>
                <div className="titre">
                  <h2>{article.title}</h2>
                </div>
                <div className="content">
                  <p>{article.body}</p>
                </div>
              </Link>
              <div className="author">
                <p>by {article.created_by.name}</p>
              </div>
              <h4>Comment: {article.comment_count}</h4>
              <Votes article={article} />
            </div>
          );
        }
        return acc;
      }, [])}
    </div>
  );
}

export default List2;
