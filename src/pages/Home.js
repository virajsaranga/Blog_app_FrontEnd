import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from './axios';
import './style/stylehome.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/blogs/getAllBlogs')
      .then(res => {
        setPosts(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter(post => {
    return post.blog_title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by blog title"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <h1 className="home-title">Blog Posts</h1>
      <div className="row">
        {filteredPosts.map(post => (
          <div key={post.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={post.img} alt={post.blog_title} />
              <div className="card-body">
                <h5 className="card-title">{post.blog_title}</h5>
                <p className="card-text">{post.blog_body}</p>
              </div>
              <div className="card-footer">
                <Link to={`/ViewBlogs/${post.id}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
