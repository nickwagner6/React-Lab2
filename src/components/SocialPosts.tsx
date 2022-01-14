import React, { useState } from "react";
import Post from "../model/postInterface";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./style.css";

function SocialPosts() {
  const [posts, setPost] = useState<Post[]>([
    { title: "I Got This", thought: "I think ill figure this out" },
    { title: "Uh, What?", thought: "Maybe this is tougher than i thought" },
    { title: "WTF", thought: "My brain is fried....." },
  ]);

  //this is our hook
  const [hidden, setHidden] = useState<boolean>(false);

  function handlePostFormSubmit(post: Post) {
    setPost((prev) => [...posts, post]);
  }

  function handleDeletePost(index: number) {
    setPost((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }

  return (
    <div className="SPcontainer">
      <h1 className="header">My Thoughts</h1>
      <button className="NewThought" onClick={() => setHidden(true)}>
        New Thought
      </button>
      <div>
        {posts.map((post, i) => (
          <PostInList key={i} post={post} onDelete={() => handleDeletePost} />
        ))}
      </div>
      <div>{hidden ? <PostForm onSubmit={handlePostFormSubmit} /> : null}</div>
    </div>
  );
}

export default SocialPosts;
