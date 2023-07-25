import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog, handleDelete }) => {
  return (
    <div className="blog">
      <Link to={`blogs/${blog.id}`} className="blog-titre">
        {blog.title}
      </Link>
      <p className="blog-publication-date">Publier le {blog.date} </p>
      <p className="blog-author">Publier par {blog.author} </p>
      {/* <button onClick={() => handleDelete(blog.id)}>
        Supprimer un article
      </button> */}
    </div>
  );
};

export default BlogItem;
