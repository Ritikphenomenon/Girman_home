import  { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className="search-bar">
    <div className="search-icon-container">
      <img src="search.png" alt="Search" className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
      />
    </div>
  </div>
  
  );
}

export default SearchBar;
