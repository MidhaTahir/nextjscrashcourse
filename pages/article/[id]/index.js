import Link from "next/link";
import { useRouter } from "next/router";
import { server } from "../../../config/index";
import Meta from "../../../components/Meta";

const article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Meta title={`Article | ${article.id}`} />
      {/* This is an article {article.id}, another method{id} */}
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go back</Link>
    </>
  );
};

//getting data from our created api
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false, //if we go to something that does not exist in data it will give 404 page
  };
};

// changing getServerSideProps to getStaticProps and using getStaticPaths to get high speed and static hosting
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();
//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   return {
//     paths,
//     fallback: false //if we go to something that does not exist in data it will give 404 page
//   };
// };

export default article;
