import React from "react";
// import Article from "./Article";

function ListComment({ comments, deleteComment }) {
  return (
    <div>
      {comments.map(comment => {
        return (
          <div key={comment._id} className="card">
            {comment.created_by ? (
              <div className="titre">
                <h2>{comment.created_by.username}</h2>
              </div>
            ) : (
              <h2>unknown</h2>
            )}
            <div className="content">
              <p>{comment.body}</p>
            </div>
            <button
              className="bouton"
              onClick={() => deleteComment(comment._id, comment)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ListComment;
