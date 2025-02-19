import React from "react";
import "./BlogDetail.css"; 

const BlogDetail = ({ post }) => {
  if (!post) return null;

  return (
    <div className="blog-detail container">
      <div className="blog-detail-inner">
        <div className="blog-detail-image">
          {post.image && <img src={post.image} alt={post.title} />}
        </div>

        <div className="blog-detail-content">
          <h2>{post.title}</h2>
          <p className="blog-detail-meta">
            <strong>Category:</strong> {post.category} | <strong>Date:</strong> {post.date}
          </p>

          {post.authorName && (
            <p>
              <strong>Author:</strong> {post.authorName}
            </p>
          )}

          <p>{post.excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
