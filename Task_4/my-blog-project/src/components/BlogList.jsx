import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ posts, onSelectPost }) => {
  return (
    <section className="blog-list container">
      <div className="blog-grid">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            onSelectPost={onSelectPost} 
          />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
