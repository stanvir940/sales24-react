import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-4 mr-64 mt-10 ml-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search products..."
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

export default Search;
