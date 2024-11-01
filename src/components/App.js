import React from "react";
import blogData from "../data/blog"; // Ensure this path is correct
import Header from "./Header/Header"; // Adjust path as necessary
import About from "./About/About"; // Adjust path if necessary
import ArticleList from "./ArticleList/ArticleList"; // Adjust path if necessary

function App() {
  const blogName = blogData.name;
  const blogImage = blogData.image;
  const blogAbout = blogData.about;
  const posts = blogData.posts;

  return (
    <div className="App">
      <Header name={blogName} />
      <About image={blogImage} about={blogAbout} />
      <ArticleList posts={posts} /> {/* Pass posts to ArticleList */}
    </div>
  );
}

export default App;
