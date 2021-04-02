import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    //   https://nextjs.org/docs/api-reference/next/link
    //   This was done previously for dynamic routes (use href and as both) but now it can be done with href this is what I understand from documentation
    //   href="/article/[id]"
    //   as={`/article/${article.id}`}
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h4>{article.title} &rarr;</h4>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
