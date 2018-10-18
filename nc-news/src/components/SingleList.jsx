import React from "react";
import Votes from "./Votes";
// import Article from "./Article";

function SingleList({ article }) {
  return (
    <ul>
      <div>
        <h2>{article.title}</h2>
        <p className="article" key={article._id}>
          {article.body}
        </p>
        <div>
          {article.created_by ? (
            <p>by {article.created_by.name}</p>
          ) : (
            <p>unknown</p>
          )}
        </div>
        <p>Comment: {article.comment_count}</p>
        <Votes article={article} />
      </div>
    </ul>
  );
}

export default SingleList;
