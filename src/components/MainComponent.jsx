import React, { useState } from "react";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";

function Main() {
  const [articles, setArticles] = useState([]);

  // Add a new article
  const addArticle = (title, status) => {
    const newArticle = { id: Date.now(), title, status }; // Add status to the article
    setArticles((prevArticles) => [...prevArticles, newArticle]);
  };

  // Delete an article by ID
  const deleteArticle = (id) => {
    setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
  };

  return (
    <main className="p-4">
      <BlogForm onAddArticle={addArticle} />
      <BlogList articles={articles} onDeleteArticle={deleteArticle} />
    </main>
  );
}

export default Main;
