import React from "react";
import moment from "moment";
import Comment from "./Comment";

const Post = ({ author, date, content, comments }) => (
  <article className="post">
    <div>
      <header className="post__header">
        <img
          className="author__avatar"
          src={author.avatar}
          alt={author.name}
          title={author.name}
        />
        <div>
          <p className="author__name">{author.name}</p>
          <span className="post__date">{moment(date).fromNow()}</span>
        </div>
      </header>
      <p className="post__content">{content}</p>
      <hr />
      <section className="post__comments">
        {comments.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))}
      </section>
    </div>
  </article>
);

export default Post;
