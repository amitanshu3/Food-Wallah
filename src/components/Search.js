// Search.js
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTxt, setSearchTxt] = useState("");

  const handleButtonClick = () => {
    onSearch(searchTxt);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTxt);
    }
  };

  return (
    <div className="search m-4 p-4">
      <input
        type="text"
        className="border border-solid border-black"
        value={searchTxt}
        onChange={(e) => setSearchTxt(e.target.value)}
        onKeyDown={handleEnterKeyPress}
      />
      <button
        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
        onClick={handleButtonClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
