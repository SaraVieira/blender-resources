import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import { PATHS } from "../utils/getAllResources";

export default function Categories({ categories }) {
  return (
    <>
      <Head>
        <title>Blender Resources - Categories</title>
      </Head>
      <Layout categories={categories}>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Categories
              </h2>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-3 lg:mt-8">
              {categories.map((category) => (
                <Link
                  key={category}
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
    </>
  );
}
export async function getStaticProps() {
  const data = PATHS.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const { data } = matter(source);
    return data.category;
  });

  return {
    props: { categories: Array.from(new Set(data)) },
  };
}
