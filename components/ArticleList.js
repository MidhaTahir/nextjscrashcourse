import articleStyles from "../styles/Article.module.css";
import ArticleItem from "../components/ArticleItem";
import React from "react";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
