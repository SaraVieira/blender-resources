import Link from "next/link";

const MobileMenu = ({ show }) => {
  return (
    <div
      className="hidden sm:hidden"
      style={{
        display: show ? "block" : "none",
      }}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link href="/">
          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
            Home
          </a>
        </Link>
        <Link href="/categories">
          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
            Categories
          </a>
        </Link>
        <Link href="/add">
          <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
            Add Resource
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
