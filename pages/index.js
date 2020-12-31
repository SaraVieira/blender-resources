import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Resource from "../components/Resource";
import { getAllResources } from "../utils/getAllResources";
import Hero from "../components/Hero";
import Filters from "../components/Filters";

export default function Index({ posts, categories }) {
  const [statePosts, setStatePosts] = useState(posts);

  return (
    <>
      <Head></Head>
      <Layout>
        <Hero />

        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Resources
              </h2>
            </div>
            <Filters
              setStatePosts={setStatePosts}
              posts={posts}
              categories={categories}
            />
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {statePosts.map((post) => (
                <Resource key={post.filePath} {...post} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const posts = await getAllResources();
  const categories = [
    ...new Set(
      posts.map((post) => {
        return post.data.category;
      })
    ),
  ];
  return { props: { posts, categories } };
}
