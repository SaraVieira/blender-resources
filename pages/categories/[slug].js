import { useState } from "react";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import path from "path";
import Layout from "../../components/Layout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

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
      <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl capitalize">
              Resources {">"} {slug}
            </h2>
          </div>
          <button
            class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              freeFilter
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={onlyFree}
          >
            Only Free
          </button>

          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {statePosts.map((post) => (
              <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                  <Link
                    as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                    href={`/posts/[slug]`}
                    class="cursor:pointer"
                  >
                    <a>
                      <img
                        class="h-48 w-full object-cover"
                        src={post.og.image.url}
                        alt={post.data.title}
                      />
                    </a>
                  </Link>
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <p class="text-sm font-medium text-indigo-600">
                      <Link
                        as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                        href={`/posts/[slug]`}
                        class="hover:underline"
                      >
                        {post.data.category}
                      </Link>
                    </p>
                    <Link
                      as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                      href={`/posts/[slug]`}
                      class="block mt-2"
                    >
                      <a>
                        <p class="text-xl font-semibold text-gray-900">
                          {post.data.title}
                        </p>
                        <p class="mt-3 text-base text-gray-500">
                          {post.data.description}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                      <a href="#">
                        <span class="sr-only">
                          {post.data.free ? "Free" : "Paid"}
                        </span>
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a href="#" class="hover:underline">
                          {post.data.free ? "Free" : "Paid"}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const data = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);

      return {
        content,
        data,
        filePath,
      };
    })
    .filter((a) => {
      return a.data.category.toLowerCase() === decodeURIComponent(params.slug);
    })
    .map(async (post) => {
      const res = await fetch(
        `http://localhost:3000/api/scrapper?url=${post.data.Link}`
      );
      const { results: og } = await res.json();

      return {
        ...post,
        og,
      };
    });
  const posts = await Promise.all(data);

  return { props: { posts, slug: params.slug } };
};

export const getStaticPaths = async () => {
  const data = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
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
