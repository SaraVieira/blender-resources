import { useEffect, useState } from "react";
import Resource from "./Resource";

const SearchResults = ({ posts }) => {
  const [searchResults, setSearchResults] = useState();
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("query").toLocaleLowerCase();

  const setResults = () => {
    const results = posts.filter(
      ({ data }) =>
        data.title.toLocaleLowerCase().includes(query) ||
        data.category.toLocaleLowerCase().includes(query) ||
        data.description.toLocaleLowerCase().includes(query)
    );
    setSearchResults(results);
  };
  useEffect(() => {
    setResults();
  }, [query]);
  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl capitalize">
          Search {">"} {urlParams.get("query")}
        </h2>
      </div>

      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {searchResults ? (
          searchResults.map((post) => (
            <Resource key={post.filePath} {...post} />
          ))
        ) : (
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
