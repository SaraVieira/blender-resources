import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { useState } from "react";
import Layout from "../components/Layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

export default function Index({ categories }) {
  return (
    <Layout>
      <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Categories
            </h2>
          </div>
          <div class="mt-6 grid grid-cols-2 gap-5 md:grid-cols-3 lg:mt-8">
            {categories.map((category) => (
              <Link
                href={`/categories/[slug]`}
                as={`/categories/${encodeURIComponent(
                  category
                ).toLocaleLowerCase()}`}
              >
                <div className="col-span-1 flex justify-center px-8 py-8 bg-gray-50 text-xl font-bold text-gray-700 border-2 hover:text-gray-100 hover:bg-gray-700 transition-DEFAULT duration-100 cursor:pointer">
                  {category}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const data = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data } = matter(source);
    return data.category;
  });

  return {
    props: { categories: Array.from(new Set(data)) },
  };
}
