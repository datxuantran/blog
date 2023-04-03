import React from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="postPage">
      <article>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <Link to={`/edit/${post.id}`}><button>Edit Post</button></Link>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Return to Homepage</p>
            <p>
              <Link to="/">Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
