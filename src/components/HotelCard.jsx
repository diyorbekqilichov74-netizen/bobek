import { Link } from "react-router-dom";

function HotelCard({
  hotel,
  favorites,
  setFavorites
}) {

  const isFavorite = favorites?.includes(hotel.id);

  function toggleFavorite() {
    if (isFavorite) {
      setFavorites(
        favorites.filter((id) => id !== hotel.id)
      );
    } else {
      setFavorites([
        ...(favorites || []),
        hotel.id
      ]);
    }
  }

  return (
    <article className="hotel-card">

      <div className="hotel-image">

        <img
          src={hotel.image}
          alt={hotel.name}
        />

        <button
          className={`favorite ${isFavorite ? "active" : ""}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? "♥" : "♡"}
        </button>

        <span className="hotel-type">
          {hotel.type}
        </span>

      </div>

      <div className="hotel-content">

        <div className="hotel-title">

          <h3>{hotel.name}</h3>

          <span className="rating">
            ★ {hotel.rating}
          </span>

        </div>

        <p className="location">
          📍 {hotel.location}
        </p>

        <div className="hotel-info">
          <span>🛏 {hotel.rooms} rooms</span>
          <span>👥 {hotel.guests} guests</span>
        </div>

        <p className="hotel-description">
          {hotel.description}
        </p>

        <div className="amenities">
          {hotel.amenities.map((item) => (
            <span key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="hotel-price">
          <span>From</span>

          <strong>
            ${hotel.price}
          </strong>

          <small>
            /night
          </small>
        </div>

        <div className="card-buttons">

          <Link
            to={`/hotels/${hotel.id}`}
            className="outline-button"
          >
            View Details
          </Link>

          <Link
            to={`/booking/hotel/${hotel.id}`}
            className="gold-button"
          >
            Book Now
          </Link>

        </div>

      </div>

    </article>
  );
}

export default HotelCard;