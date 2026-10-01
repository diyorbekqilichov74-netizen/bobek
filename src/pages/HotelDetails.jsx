import {
  Link,
  useParams
} from "react-router-dom";

import { hotels } from "../data/hotels";

function HotelDetails() {

  const { id } = useParams();

  const hotel =
    hotels.find(
      (item) => item.id === Number(id)
    ) || hotels[0];


  const galleryImages = [
    hotel.image,
    hotels[
      hotel.id % hotels.length
    ].image,
    hotels[
      (hotel.id + 1) % hotels.length
    ].image
  ];


  return (
    <main className="page hotel-details">

      {/* IMAGE GALLERY */}

      <div className="hotel-gallery">

        <div className="gallery-main">
          <img
            src={galleryImages[0]}
            alt={hotel.name}
          />
        </div>

        <div>
          <img
            src={galleryImages[1]}
            alt=""
          />
        </div>

        <div>
          <img
            src={galleryImages[2]}
            alt=""
          />
        </div>

      </div>


      {/* DETAILS */}

      <div className="details-layout">

        <section className="details-content">

          <span className="eyebrow">
            {hotel.type}
          </span>

          <h1>
            {hotel.name}
          </h1>

          <div className="details-meta">

            <span>
              📍 {hotel.location}
            </span>

            <span>
              ★ {hotel.rating}
            </span>

            <span>
              🛏 {hotel.rooms} rooms
            </span>

          </div>


          <p className="large-description">
            {hotel.description}
          </p>

          <p>
            Experience a comfortable and memorable stay
            with easy access to the area's most beautiful
            attractions. Our carefully selected properties
            combine local character with modern comfort.
          </p>


          {/* AMENITIES */}

          <h2>
            Amenities
          </h2>

          <div className="large-amenities">

            {[
              ...hotel.amenities,
              "24/7 Reception",
              "Room Service",
              "Free Cancellation"
            ].map((item) => (

              <span key={item}>
                ✓ {item}
              </span>

            ))}

          </div>


          {/* INFORMATION */}

          <h2>
            Stay Information
          </h2>

          <div className="info-grid">

            <div>
              <span>
                Check-in
              </span>

              <strong>
                14:00
              </strong>
            </div>

            <div>
              <span>
                Check-out
              </span>

              <strong>
                12:00
              </strong>
            </div>

            <div>
              <span>
                Available rooms
              </span>

              <strong>
                {hotel.available}
              </strong>
            </div>

            <div>
              <span>
                Maximum guests
              </span>

              <strong>
                {hotel.guests}
              </strong>
            </div>

          </div>


          {/* REVIEWS */}

          <h2>
            Guest Reviews
          </h2>

          <div className="review-box">

            <div className="review-stars">
              ★★★★★
            </div>

            <p>
              "Beautiful location, friendly staff and
              very comfortable rooms. Everything was
              exactly as described."
            </p>

            <strong>
              — Amina, verified guest
            </strong>

          </div>


          {/* MAP */}

          <h2>
            Location
          </h2>

          <div className="map-placeholder">

            <div>
              <span>📍</span>

              <strong>
                {hotel.location}
              </strong>

              <small>
                Interactive map placeholder
              </small>
            </div>

          </div>

        </section>


        {/* BOOKING CARD */}

        <aside className="details-booking panel">

          <span>
            Starting from
          </span>

          <div className="details-price">
            ${hotel.price}
            <small>
              /night
            </small>
          </div>

          <div className="booking-rating">
            ★ {hotel.rating} Excellent
          </div>

          <hr />

          <p>
            🛏 {hotel.available} rooms available
          </p>

          <p>
            ✓ Free cancellation
          </p>

          <p>
            ✓ Secure booking
          </p>

          <Link
            to={`/booking/hotel/${hotel.id}`}
            className="gold-button full-width"
          >
            Book Now
          </Link>

        </aside>

      </div>

    </main>
  );
}

export default HotelDetails;