import { useState } from "react";
import fs from "fs";

import matter from "gray-matter";
import Layout from "../../components/Layout";
import { getAllResources, PATHS } from "../../utils/getAllResources";
import Resource from "../../components/Resource";

export default function PostPage({ posts, slug }) {
  const [statePosts, setStatePosts] = useState(posts);
  const [freeFilter, setFreeFilter] = useState(false);

  const onlyFree = () => {
    setFreeFilter((free) => !free);
    if (freeFilter) {
      setStatePosts(posts);
    } else {
      setStatePosts(posts.filter((p) => p.data.free));
    }
  };

  return (
    <Layout>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl capitalize">
              Resources {">"} {slug}
            </h2>
          </div>
          <button
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              freeFilter
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={onlyFree}
          >
            Only Free
          </button>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {statePosts.map((post) => (
              <Resource key={post.filePath} {...post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const data = await getAllResources();
  const posts = data.filter((a) => {
    return a.data.category.toLowerCase() === decodeURIComponent(params.slug);
  });

  return { props: { posts, slug: params.slug } };
};

export const getStaticPaths = async () => {
  const data = PATHS.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const { data } = matter(source);
    return data.category;
  });

  const paths = Array.from(new Set(data)).map((d) => ({
    params: {
      slug: encodeURIComponent(d).toLowerCase(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
