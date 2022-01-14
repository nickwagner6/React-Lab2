import React, { FormEvent, useState } from "react";
import Post from "../model/postInterface";

interface Props {
  onSubmit: (post: Post) => void;
}

function PostForm({ onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
  }
  const newPost: Post = {
    title: title,
    thought: thought,
  };
  onSubmit(newPost);

  return (
    <div className="PostForm" onSubmit={handleFormSubmit}>
      <h1>Title</h1>
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h2>Thoughts</h2>
      <textarea
        id="thought"
        cols={25}
        rows={10}
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      ></textarea>
      <button type="submit">Add Post</button>
    </div>
  );
}

export default PostForm;
