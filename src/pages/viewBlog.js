import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from './axios';
import './style/viewBlog.css';

const ViewBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`api/blogs/getBlogById/${id}`)
      .then(res => {
        setPost(res.data.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`api/blogs/deleteBlog/${id}`)
      .then(() => {
        console.log('Blog deleted successfully');
        alert('Blog deleted successfully');
        window.location.href = '/Home';
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="blog-title">{post.blog_title}</h1>
      <img src={post.img} alt={post.blog_title} className="blog-image" />
      <p className="blog-body">{post.blog_body}</p>
      <a href={`/UpdateBlog/${id}`} className="btn btn-primary ml-2">Update</a>
      <div className='delbtn'>
      <button className="btn btn-danger ml-2" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ViewBlog;
