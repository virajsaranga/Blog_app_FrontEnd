import React, { useState, useEffect } from 'react';
import axios from './axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog_title, setTitle] = useState('');
  const [blog_body, setBody] = useState('');
  const [img, setImage] = useState('');

  useEffect(() => {
    axios.get(`api/blogs/getBlogById/${id}`)
      .then(res => {
        const { blog_title, blog_body, img } = res.data.data[0];
        setTitle(blog_title);
        setBody(blog_body);
        setImage(img);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const handleUpdateBlog = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('blog_title', blog_title);
    formData.append('blog_body', blog_body);
    formData.append('img', img);

    axios.put(`api/blogs/updateBlog/${id}`, formData)
      .then(res => {
        console.log('Blog updated successfully:', res.data);
        alert('Blog updated successfully!');
        navigate(`/Home.js/${id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1>Update Blog</h1>
      <form onSubmit={handleUpdateBlog}>
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
          Update
        </button>
        <br></br>
        <button type="button" className="btn btn-secondary ml-2" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateBlogPage;
