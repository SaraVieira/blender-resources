import fs from "fs";
import slugify from "slugify";

import matter from "gray-matter";
import Layout from "../../components/Layout";
import { getAllResources, PATHS } from "../../utils/getAllResources";
import Head from "next/head";
import Link from "next/link";

export default function PostPage({ resource: { data, image } }) {
  return (
    <>
      <Head>
        <title>Blender Resources - {data.title}</title>
      </Head>
      <Layout>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl capitalize">
                {data.title}
              </h2>
            </div>
            <div className="mt-12">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <a href={data.Link} target="_blank" rel="noreferrer">
                    <img
                      className="h-96 w-full object-cover object-top"
                      src={image}
                      alt={data.title}
                    />
                  </a>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <Link
                        href={`/categories/[slug]`}
                        as={`/categories/${encodeURIComponent(
                          data.category
                        ).toLocaleLowerCase()}`}
                        class="hover:underline"
                      >
                        {data.category}
                      </Link>
                    </p>

                    <a href={data.Link} target="_blank" rel="noreferrer">
                      <p className="text-xl font-semibold text-gray-900">
                        {data.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {data.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <p className="text-sm font-medium text-gray-900 flex justify-between w-full">
                      <span
                        className={`p-1 rounded-sm ${
                          data.free ? "bg-green-100 " : "bg-white "
                        }`}
                      >
                        {data.free ? "Free" : "Paid"}
                      </span>
                      {!data.free ? (
                        <span className="bg-blue-100 p-1 rounded-sm">
                          {data.price}
                        </span>
                      ) : (
                        <span />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const data = await getAllResources();
  const resource = data.find((a) => {
    return a.data.title.toLowerCase() === params.slug.split("-").join(" ");
  });

  return { props: { resource, slug: params.slug } };
};

export const getStaticPaths = async () => {
  const data = PATHS.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const { data } = matter(source);

    return slugify(data.title, { lower: true });
  });

  const paths = Array.from(new Set(data)).map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
