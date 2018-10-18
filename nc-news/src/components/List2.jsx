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
    <ul>
      {result.reduce((acc, article) => {
        if (
          !articleFilter ||
          article.title.toLowerCase().includes(articleFilter.toLowerCase()) ||
          article.body.includes(articleFilter)
        ) {
          acc.push(
            <div key={article._id}>
              <Link to={`/${article._id}`}>
                <h2>{article.title}</h2>
                <p
                  // onClick={this.singleArticle}
                  className="articles"
                >
                  {article.body}
                </p>
              </Link>
              <p>by {article.created_by.name}</p>
              <p>Comment: {article.comment_count}</p>
              <Votes article={article} />
            </div>
          );
        }
        return acc;
      }, [])}
    </ul>
  );
}

export default List2;
