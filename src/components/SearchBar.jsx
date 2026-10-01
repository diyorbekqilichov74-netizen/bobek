import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {

  const navigate = useNavigate();

  const [destination, setDestination] =
    useState("");

  const [guests, setGuests] =
    useState(2);

  function handleSearch() {

    const params = new URLSearchParams();

    if (destination) {
      params.set("search", destination);
    }

    params.set("guests", guests);

    navigate(`/hotels?${params.toString()}`);
  }

  return (
    <div className="search-box">

      <label>
        Destination

        <input
          type="text"
          placeholder="Where are you going?"
          value={destination}
          onChange={(e) =>
            setDestination(e.target.value)
          }
        />
      </label>

      <label>
        Check-in

        <input
          type="date"
        />
      </label>

      <label>
        Check-out

        <input
          type="date"
        />
      </label>

      <label>
        Guests

        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) =>
            setGuests(e.target.value)
          }
        />
      </label>

      <button
        className="gold-button search-button"
        onClick={handleSearch}
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;