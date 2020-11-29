import fs from "fs";
import matter from "gray-matter";
import { useRef, useState } from "react";
import Layout from "../components/Layout";
import { PATHS } from "../utils/getAllResources";

export default function Add({ categories }) {
  const name = useRef();
  const description = useRef();
  const category = useRef();
  const link = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const addResource = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({
        name: name.current.value,
        description: description.current.value,
        category: category.current.value,
        link: link.current.value,
      }),
    });
    setLoading(false);
    name.current.value = "";
    description.current.value = "";
    category.current.value = categories[0];
    link.current.value = "";
    setSuccess(true);
    window.setTimeout(() => setSuccess(false), 10000);
  };
  return (
    <>
      <Layout>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-8xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Suggest a Resource
              </h2>
            </div>
            <div className="mt-10 bg-white flex flex-column align-center justify-center items-center">
              <form
                style={{ maxWidth: "70%", width: 400 }}
                onSubmit={addResource}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      required
                      ref={name}
                      type="text"
                      name="name"
                      id="name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="The most amazing resource"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="link"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Link
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      https://
                    </span>
                    <input
                      required
                      ref={link}
                      type="text"
                      name="link"
                      id="link"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full px-3 py-2 rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <select
                    required
                    ref={category}
                    id="category"
                    name="category"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}

                    <option>Other</option>
                  </select>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      required
                      ref={description}
                      type="text"
                      name="description"
                      id="description"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="The most amazing resource"
                    />
                  </div>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className={`mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                    loading ? "bg-gray-400" : "bg-indigo-600"
                  } hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 `}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
      {success && (
        <div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">
                    Successfully sent!
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    This submission will be reviewed. Thank you!
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    onClick={() => setSuccess(false)}
                    className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close</span>

                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
