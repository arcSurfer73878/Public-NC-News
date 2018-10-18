import React from "react";
// import Article from "./Article";

function ListComment({ comments, deleteComment }) {
  return (
    <ul>
      {comments.map(comment => {
        return (
          <div key={comment._id}>
            {comment.created_by ? (
              <h2>{comment.created_by.username}</h2>
            ) : (
              <h2>unknown</h2>
            )}
            <p className="comments">{comment.body}</p>
            <button onClick={() => deleteComment(comment._id, comment)}>
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  );
}

export default ListComment;
