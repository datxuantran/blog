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
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title: </label>
        <br/>
        <input
          id="postTitle"
          type="text"
          placeholder="Enter title..."
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <br/>
        <label htmlFor="postBody">Body: </label>
        <br/>
        <textarea
          id="postBody"
          placeholder="Enter body..."
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <br/>
        <button type="submit">Post</button>
      </form>
    </main>
  );
};

export default NewPost;
