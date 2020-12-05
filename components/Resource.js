import Link from "next/link";

const Resource = ({ filePath, image, data }) => (
  <div
    key={filePath}
    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
  >
    <div className="flex-shrink-0">
      <a href={data.Link} target="_blank" rel="noreferrer">
        <img
          className="h-48 w-full object-cover"
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
          <p className="text-xl font-semibold text-gray-900">{data.title}</p>
          <p className="mt-3 text-base text-gray-500">{data.description}</p>
        </a>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
          <a href="#">
            <span className="sr-only">{data.free ? "Free" : "Paid"}</span>
          </a>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">
            <a href="#" className="hover:underline">
              {data.free ? "Free" : "Paid"}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Resource;
