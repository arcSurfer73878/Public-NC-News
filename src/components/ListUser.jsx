import React from "react";
import Votes from "./Votes";
import { Link } from "@reach/router";

function List({ articles, username }) {
  return (
    <div>
      {articles.reduce((acc, article) => {
        if (article.created_by.username.includes(username)) {
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

export default List;
