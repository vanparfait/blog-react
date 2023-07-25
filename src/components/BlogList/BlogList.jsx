import React from "react";
import BlogItem from "../BlogItem/BlogItem";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="bloglist">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BlogList;
