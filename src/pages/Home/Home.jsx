import React, { useState } from "react";
import "./Home.css";
import BlogList from "../../components/BlogList/BlogList";

const Home = () => {
  const [blogs, setBlog] = useState([
    {
      id: 1,
      title: "la couleur du sang",
      body: "Lorem ipsum dolor sit amet consectetur.",
      author: "parfait",
      date: "12/11/2023",
    },
    {
      id: 2,
      title: "les lions indomptables",
      body: " Quisquam vitae nobis aliquid quod repudiandae corporis eius dolorem quis ducimus accusamus.",
      author: "Eric",
      date: "02/01/2021",
    },
    {
      id: 3,
      title: "lanuit des codeurs",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam vitae nobis aliquid quod repudiandae corporis eius dolorem quis ducimus accusamus.",
      author: "Eric",
      date: "02/01/2022",
    },
  ]);

  const handleDelete = (id) => {
    console.log(id);
    const newBlogs = [...blogs].filter((blog) => blog.id !== id);
    console.log(newBlogs);
    setBlog(newBlogs);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="Liste des Blogs"
        handleDelete={handleDelete}
      />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Eric")}
        title="Liste des Blogs publie par Eric"
      /> */}
    </div>
  );
};

export default Home;
