import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HotelCard from "../components/HotelCard";
import { hotels } from "../data/hotels";

function Hotels({ favorites, setFavorites }) {

  const [searchParams] = useSearchParams();

  const initialSearch =
    searchParams.get("search") || "";

  const [search, setSearch] =
    useState(initialSearch);

  const [type, setType] =
    useState("All");

  const [rating, setRating] =
    useState("All");

  const [maxPrice, setMaxPrice] =
    useState("");

  const [sort, setSort] =
    useState("default");

  const [visibleCount, setVisibleCount] =
    useState(12);


  const filteredHotels = useMemo(() => {

    let result = [...hotels];

    /* SEARCH */
    if (search.trim()) {

      const query =
        search.toLowerCase();

      result = result.filter((hotel) =>
        hotel.name.toLowerCase().includes(query) ||
        hotel.location.toLowerCase().includes(query)
      );

    }


    /* TYPE */
    if (type !== "All") {

      result = result.filter(
        (hotel) => hotel.type === type
      );

    }


    /* RATING */
    if (rating !== "All") {

      result = result.filter(
        (hotel) =>
          hotel.rating >= Number(rating)
      );

    }


    /* PRICE */
    if (maxPrice) {

      result = result.filter(
        (hotel) =>
          hotel.price <= Number(maxPrice)
      );

    }


    /* SORT */
    if (sort === "price-low") {

      result.sort(
        (a, b) => a.price - b.price
      );

    }

    if (sort === "price-high") {

      result.sort(
        (a, b) => b.price - a.price
      );

    }

    if (sort === "rating") {

      result.sort(
        (a, b) => b.rating - a.rating
      );

    }

    return result;

  }, [
    search,
    type,
    rating,
    maxPrice,
    sort
  ]);


  return (
    <main className="page">

      {/* PAGE HEADER */}

      <div className="page-header">

        <span className="eyebrow">
          STAYS & HOUSES
        </span>

        <h1>
          Find Your
          <br />
          <em>Perfect Stay</em>
        </h1>

        <p>
          Compare beautiful places, discover
          comfortable rooms and book with confidence.
        </p>

      </div>


      {/* FILTERS */}

      <div className="filters panel">

        <div className="filter-field">

          <label>
            Location
          </label>

          <input
            type="text"
            placeholder="Hotel or city"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <div className="filter-field">

          <label>
            Hotel Type
          </label>

          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
          >
            <option>All</option>
            <option>Hotel</option>
            <option>House</option>
            <option>Villa</option>
          </select>

        </div>


        <div className="filter-field">

          <label>
            Rating
          </label>

          <select
            value={rating}
            onChange={(e) =>
              setRating(e.target.value)
            }
          >
            <option>All</option>
            <option value="4.9">
              4.9+
            </option>
            <option value="4.8">
              4.8+
            </option>
            <option value="4.7">
              4.7+
            </option>
            <option value="4.5">
              4.5+
            </option>
          </select>

        </div>


        <div className="filter-field">

          <label>
            Max Price
          </label>

          <input
            type="number"
            placeholder="$ / night"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value)
            }
          />

        </div>


        <div className="filter-field">

          <label>
            Sort
          </label>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >
            <option value="default">
              Recommended
            </option>

            <option value="price-low">
              Lowest price
            </option>

            <option value="price-high">
              Highest price
            </option>

            <option value="rating">
              Highest rating
            </option>
          </select>

        </div>

      </div>


      {/* RESULT INFO */}

      <div className="results-bar">

        <strong>
          {filteredHotels.length}
        </strong>

        <span>
          stays available
        </span>

      </div>


      {/* HOTEL LIST */}

      {filteredHotels.length > 0 ? (

        <div className="hotel-grid">

          {filteredHotels
            .slice(0, visibleCount)
            .map((hotel) => (

              <HotelCard
                key={hotel.id}
                hotel={hotel}
                favorites={favorites}
                setFavorites={setFavorites}
              />

            ))}

        </div>

      ) : (

        <div className="empty-state">

          <div className="empty-icon">
            ⌕
          </div>

          <h2>
            No stays found
          </h2>

          <p>
            Try changing your search or filters.
          </p>

          <button
            className="gold-button"
            onClick={() => {
              setSearch("");
              setType("All");
              setRating("All");
              setMaxPrice("");
            }}
          >
            Clear Filters
          </button>

        </div>

      )}


      {/* LOAD MORE */}

      {visibleCount < filteredHotels.length && (

        <button
          className="outline-button load-more"
          onClick={() =>
            setVisibleCount(
              visibleCount + 6
            )
          }
        >
          Load More
        </button>

      )}

    </main>
  );
}

export default Hotels;