import React from "react";
import Votes from "./Votes";
// import Article from "./Article";

function SingleList({ article }) {
  return (
    <div>
      <div key={article._id} className="card">
        <div className="titre">
          <h2>{article.title}</h2>
        </div>
        <div className="content" key={article._id}>
          <p>{article.body}</p>
        </div>
        <div className="author">
          {article.created_by ? (
            <p>by {article.created_by.name}</p>
          ) : (
            <p>unknown</p>
          )}
        </div>
        <h4>Comment: {article.comment_count}</h4>
        <Votes article={article} />
      </div>
    </div>
  );
}

export default SingleList;
