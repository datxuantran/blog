import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";

import apiRequest from "./api/axios";
import EditPost from "./EditPage";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await apiRequest.get("/posts");
        setPosts(response.data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      }
    };

    fetchAPI();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleEdit = async (id) => {
    try {
      const date = format(new Date(), "MMMM dd, yyyy pp");
      const editedPost = {
        id: id,
        datetime: date,
        title: editTitle,
        body: editBody,
      };

      setPosts([...posts.filter((post) => post.id !== id), editedPost]);
      setEditTitle("");
      setEditBody("");
      navigate("/");

      await apiRequest.put(`/posts/${id}`, editedPost);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiRequest.delete(`/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      navigate("/");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const date = format(new Date(), "MMMM dd, yyyy pp");
      const newPost = {
        id: id,
        datetime: date,
        title: postTitle,
        body: postBody,
      };
      setPosts([...posts, newPost]);
      setPostTitle("");
      setPostBody("");
      navigate("/");

      await apiRequest.post(`/posts`, newPost);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    }
  };

  return (
    <>
      <Header />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={<Home posts={searchResults} />} />
        <Route
          exact
          path="/post"
          element={
            <NewPost
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          exact
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route
          exact
          path="/edit/:id"
          element={
            <EditPost
              posts={posts}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
              handleEdit={handleEdit}
            />
          }
        />
        <Route exact path="/about" Component={About} />
        <Route path="*" Component={Missing} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
