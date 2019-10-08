import React from "react";

const Comment = ({ author, content }) => (
  <article className="post__comment">
    <img
      className="comment__author__avatar"
      src={author.avatar}
      alt={author.name}
      title={author.name}
    />
    <div className="comment__content">
      <p>
        <span className="comment__author__name">{author.name}</span> {content}
      </p>
    </div>
  </article>
);

export default Comment;
