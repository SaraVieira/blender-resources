import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllResources } from "../../utils/getAllResources";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../../components/SearchResults.js"),
  { ssr: false }
);

export default function Search({ posts }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Blender Resources - Search Results{" "}
          {router.query?.query && `for "${router.query?.query}"`}
        </title>
      </Head>
      <Layout>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <DynamicComponentWithNoSSR posts={posts} />
        </div>
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const posts = await getAllResources();
  return { props: { posts } };
}
