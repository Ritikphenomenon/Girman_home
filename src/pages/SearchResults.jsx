import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import users from "../data/users.json"; // Assuming this JSON contains user data.
import Card from "./Card";
import NotFound from "./NotFound";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const filteredUsers = users.filter((user) =>
        Object.values(user).some((value) =>
          String(value).toLowerCase().includes(query)
        )
      );
      setResults(filteredUsers);
    }
  }, [query]);

  return (
    <div className="search-results">
      {results.length > 0 ? (
        <div className="results">
          {results.map((user, index) => (
            <div key={index}>
              <Card
                firstname={user.first_name}
                lastname={user.last_name}
                city={user.city}
                contact={user.contact_number}
              />
            </div>
          ))}
        </div>
      ) : (
        <NotFound/>
      )}
    </div>
  );
}

export default SearchResults;
