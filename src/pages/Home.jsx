import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import HotelCard from "../components/HotelCard";
import { hotels } from "../data/hotels";

function Home({ favorites, setFavorites }) {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <span className="eyebrow">
            CURATED TRAVEL · LOCAL EXPERIENCES
          </span>

          <h1>
            Discover Your
            <br />
            <em>Perfect Stay</em>
          </h1>

          <p>
            Find beautiful hotels, comfortable houses and
            experienced local guides for unforgettable journeys.
          </p>

          <SearchBar />

        </div>
      </section>

      <main>

        {/* ABOUT */}
        <section className="section about-section">

          <div>
            <span className="eyebrow">
              ABOUT LUXESTAY
            </span>

            <h2>
              Travel better.
              <br />
              <em>Stay beautifully.</em>
            </h2>
          </div>

          <div>
            <p className="large-text">
              LuxeStay brings trusted accommodation and
              authentic local experiences together in one
              beautiful platform.
            </p>

            <p>
              Whether you're looking for a luxury hotel,
              a peaceful family house or a local guide,
              we help you discover the best places with confidence.
            </p>
          </div>

        </section>


        {/* WHY CHOOSE US */}
        <section className="section">

          <div className="section-header">

            <div>
              <span className="eyebrow">
                WHY CHOOSE US
              </span>

              <h2>
                Made for better journeys
              </h2>
            </div>

          </div>

          <div className="why-grid">

            <div className="why-card">
              <span className="why-icon">✦</span>
              <h3>Best Hotels</h3>
              <p>
                Carefully selected hotels and houses
                with excellent service.
              </p>
            </div>

            <div className="why-card">
              <span className="why-icon">◎</span>
              <h3>Experienced Guides</h3>
              <p>
                Explore destinations with trusted
                local professionals.
              </p>
            </div>

            <div className="why-card">
              <span className="why-icon">◇</span>
              <h3>Affordable Prices</h3>
              <p>
                Find great stays without unnecessary
                hidden costs.
              </p>
            </div>

            <div className="why-card">
              <span className="why-icon">✓</span>
              <h3>Safe Booking</h3>
              <p>
                Secure reservations and protected
                payment experience.
              </p>
            </div>

          </div>

        </section>


        {/* FEATURED HOTELS */}
        <section className="section">

          <div className="section-header">

            <div>
              <span className="eyebrow">
                FEATURED STAYS
              </span>

              <h2>
                Places worth staying for
              </h2>
            </div>

            <Link
              to="/hotels"
              className="text-link"
            >
              Explore all →
            </Link>

          </div>

          <div className="hotel-grid">

            {hotels.slice(0, 6).map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ))}

          </div>

        </section>


        {/* EXPERIENCE */}
        <section className="experience-section">

          <div className="experience-content">

            <span className="eyebrow">
              TRAVEL EXPERIENCES
            </span>

            <h2>
              See more than
              <br />
              <em>the usual.</em>
            </h2>

            <p>
              Walk through ancient cities, taste authentic
              local cuisine and discover stories only locals
              can tell.
            </p>

            <Link
              to="/guides"
              className="gold-button"
            >
              Meet Our Guides
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}

export default Home;