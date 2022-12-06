import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div>
      <Header name={blogData.name} />
      <About src={blogData.image} alt="blog logo" aboutText={blogData.about} />
      <ArticleList />
    </div>
  );
}

export default App;
