import React, { useEffect, useState } from "react";
import "./Home.css";
import BlogList from "../../components/BlogList/BlogList";

const Home = () => {
  const [blogs, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => {
        if (!response.ok) {
          throw Error("Desole Une erreur est survenue...");
        }
        return response.json();
      })
      .then((datas) => {
        setBlog(datas);
        setIsLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

  // const handleDelete = (id) => {
  //   console.log(id);
  //   const newBlogs = [blogs].filter((blog) => blog.id !== id);
  //   console.log(newBlogs);
  //   setBlog(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && (
        <div style={{ color: "red", textAlign: "right" }}>
          En cours de traitement...
        </div>
      )}
      <BlogList
        blogs={blogs}
        title="Liste des Blogs"

        // handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
