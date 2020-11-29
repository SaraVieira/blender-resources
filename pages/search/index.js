import Layout from "../../components/Layout";
import { getAllResources } from "../../utils/getAllResources";

import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../../components/SearchResults.js"),
  { ssr: false }
);

export default function Index({ posts }) {
  return (
    <Layout>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <DynamicComponentWithNoSSR posts={posts} />
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const posts = await getAllResources();
  return { props: { posts } };
}
