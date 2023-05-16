import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ posts }) => {
  return (
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={post.img}
              alt={post.blog_title}
            />
            <div className="card-body">
              <h5 className="card-title">{post.blog_title}</h5>
              <p className="card-text">{post.blog_body}</p>
            </div>
            <div className="card-footer">
              <Link to={`/viewBlog/${post.id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
