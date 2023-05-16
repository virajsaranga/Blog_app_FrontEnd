import React, { useState } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";

const AddPostPage = () => {
  const [valid, setValid] = useState(false);
  const [blog_title, setTitle] = useState("");
  const [blog_body, setBody] = useState("");
  const [img, setImage] = useState("");
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("blog_title", blog_title);
    formData.append("blog_body", blog_body);
    formData.append("img", img);

    axios
      .post("/blogs/createBlog", formData)
      .then((res) => {
        console.log("Blog post added successfully:", res.data);
        alert("Blogs details are added");
        setValid(true);
        navigate("/Home");
        // Clear form inputs
        setTitle("");
        setBody("");
        setImage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1>Add New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={blog_title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea
            className="form-control"
            rows="4"
            value={blog_body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control-file"
            accept="img/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPostPage;
