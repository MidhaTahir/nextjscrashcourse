import ArticleList from "../components/ArticleList";
import { server } from "../config/index";


export default function Home({ articles }) {
  return (
    <div>
      
      <ArticleList articles={articles} />
    </div>
  );
}

//getting data from api we have created in api folder
export const getStaticProps = async () => {
  // use absoulte path for hitting api request of the same localhost (only absoulte url are supported)
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

// getting data form external api
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };
