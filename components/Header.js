import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const active =
  "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900";

const nonActive =
  "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700";

const Header = ({ setSearchValue, searchValue, search }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={() => setShow(!show)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className={router.route === `/` ? active : nonActive}
                >
                  Home
                </Link>
                <Link
                  href="/categories"
                  className={
                    router.route.includes(`/categories`) ? active : nonActive
                  }
                >
                  Categories
                </Link>
                <Link
                  href="/add"
                  className={router.route === `/add` ? active : nonActive}
                >
                  Add Resource
                </Link>
              </div>
            </div>
          </div>
          <form onSubmit={search}>
            <label htmlFor="search" className="sr-only">
              Email
            </label>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="search"
              name="search"
              id="search"
              className="text-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-600 rounded-md bg-gray-800 placeholder-gray-300"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
      <MobileMenu show={show} />
    </nav>
  );
};

export default Header;
