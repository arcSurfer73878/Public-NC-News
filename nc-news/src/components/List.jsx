import React from "react";
import Votes from "./Votes";

function List({ articles, voteMod, articleFilter, showLove }) {
  console.log(articleFilter);
  return (
    <ul>
      {articles.reduce((acc, article) => {
        if (
          !articleFilter ||
          article.title.toLowerCase().includes(articleFilter.toLowerCase()) ||
          article.body.includes(articleFilter)
        ) {
          acc.push(
            <div>
              <h2>{article.title}</h2>
              <p
                // onClick={this.singleArticle}
                className="articles"
                key={article._id}
              >
                {article.body}
              </p>
              <p>by {article.created_by.name}</p>
              <Votes article={article} />
            </div>
          );
        }
        return acc;
      }, [])}
    </ul>
  );
}

export default List;
