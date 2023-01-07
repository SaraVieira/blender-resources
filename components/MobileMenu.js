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
        <Link
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          href="/"
        >
          Home
        </Link>
        <Link
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          href="/categories"
        >
          Categories
        </Link>
        <Link
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          href="/add"
        >
          Add Resource
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
