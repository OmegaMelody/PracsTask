import React from "react";

const BlogCard = ({ post, onSelectPost }) => {
  const handleClick = () => {
    if (onSelectPost) {
      onSelectPost(post);
    }
  };

  return (
    <article
      className="blog-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="blog-card-img">
        {post.image && <img src={post.image} alt={post.title} />}
      </div>
      <div className="blog-card-content">
        <div className="blog-card-category">{post.category}</div>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-footer">
          {post.authorName && (
            <div className="author">
              {post.authorPhoto && (
                <img src={post.authorPhoto} alt={post.authorName} />
              )}
              <span>{post.authorName}</span>
            </div>
          )}
          <div className="date">{post.date}</div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
