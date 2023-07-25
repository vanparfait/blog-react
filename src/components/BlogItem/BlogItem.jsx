import React from "react";

const BlogItem = ({ blog, handleDelete }) => {
  return (
    <div className="blog">
      <a href="/" className="blog-titre">
        {blog.title}
      </a>
      <p className="blog-publication-date">Publier le {blog.date} </p>
      <p className="blog-author">Publier par {blog.author} </p>
      {/* <button onClick={() => handleDelete(blog.id)}>
        Supprimer un article
      </button> */}
    </div>
  );
};

export default BlogItem;
