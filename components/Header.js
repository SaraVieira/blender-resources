import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";

const active =
  "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900";

const nonActive =
  "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700";

const Header = ({ setSearchValue, searchValue, search }) => {
  const router = useRouter();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
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
              <Logo />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/">
                  <a className={router.route === `/` ? active : nonActive}>
                    Home
                  </a>
                </Link>
                <Link href="/categories">
                  <a
                    className={
                      router.route.includes(`/categories`) ? active : nonActive
                    }
                  >
                    Categories
                  </a>
                </Link>
                <Link href="/add">
                  <a className={router.route === `/add` ? active : nonActive}>
                    Add Resource
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <form onSubmit={search}>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="search"
              name="email"
              id="email"
              className="text-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-600 rounded-md bg-gray-800 placeholder-gray-300"
              placeholder="Search"
            />
          </form>
        </div>
      </div>

      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Team
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Projects
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
