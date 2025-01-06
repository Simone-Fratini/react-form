import React from "react";

function BlogList({ articles, onDeleteArticle }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      {articles.length === 0 ? (
        <p className="text-gray-500">No articles added yet.</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <li
              key={article.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <h2 className="text-lg font-bold">{article.title}</h2>
                <p className="text-sm text-gray-600">Status: {article.status}</p>
              </div>
              <button
                onClick={() => onDeleteArticle(article.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BlogList;
