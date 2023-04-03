import React from "react";
import Post from "./Post";

const Home = ({ posts }) => {
  return (
    <main className="home">
      {posts.length ? (
        posts.map((post) => <Post post={post} />)
      ) : (
        <p>No posts to display.</p>
      )}
    </main>
  );
};

export default Home;
