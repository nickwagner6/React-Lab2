import React from "react";
import Post from "../model/postInterface";

interface postProp {
  post: Post;
  onDelete: () => void;
}

function PostInList({ post, onDelete }: postProp) {
  return (
    <div className="PostInList" onClick={onDelete}>
      <p>{post.title}</p>
      <p>{post.thought}</p>
    </div>
  );
}

export default PostInList;
