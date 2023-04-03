import React from "react";

const NewPost = ({
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
  handleSubmit,
}) => {
  return (
    <main className="newPost">
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title: </label>
        <input
          id="postTitle"
          type="text"
          placeholder="Enter title..."
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Body: </label>
        <textarea
          id="postBody"
          placeholder="Enter body..."
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </main>
  );
};

export default NewPost;
