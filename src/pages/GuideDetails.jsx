import {
  Link,
  useParams
} from "react-router-dom";

import { guides } from "../data/guides";

function GuideDetails() {

  const { id } = useParams();

  const guide =
    guides.find(
      (item) => item.id === Number(id)
    ) || guides[0];


  return (
    <main className="page">

      {/* GUIDE HERO */}

      <section className="guide-profile panel">

        <div className="guide-profile-image">

          <img
            src={guide.image}
            alt={guide.name}
          />

        </div>


        <div className="guide-profile-content">

          <span className="eyebrow">
            LOCAL EXPERT
          </span>

          <h1>
            {guide.name}
          </h1>

          <div className="profile-rating">

            <span>
              ★ {guide.rating}
            </span>

            <span>
              {guide.tours} tours completed
            </span>

          </div>

          <p className="large-description">
            {guide.bio}
          </p>

          <div className="profile-location">
            📍 {guide.city}
          </div>


          <div className="languages">

            {guide.languages.map(
              (language) => (
                <span key={language}>
                  {language}
                </span>
              )
            )}

          </div>


          <Link
            to={`/booking/guide/${guide.id}`}
            className="gold-button"
          >
            Book This Guide · $
            {guide.price}/day
          </Link>

        </div>

      </section>


      {/* STATS */}

      <div className="guide-stats">

        <div>
          <strong>
            {guide.experience}
          </strong>

          <span>
            Years Experience
          </span>
        </div>

        <div>
          <strong>
            {guide.languages.length}
          </strong>

          <span>
            Languages
          </span>
        </div>

        <div>
          <strong>
            {guide.tours}+
          </strong>

          <span>
            Tours
          </span>
        </div>

        <div>
          <strong>
            {guide.rating}
          </strong>

          <span>
            Rating
          </span>
        </div>

      </div>


      {/* DETAILS */}

      <section className="section guide-detail-section">

        <span className="eyebrow">
          SPECIALIZATION
        </span>

        <h2>
          What I can show you
        </h2>

        <p className="large-text">
          {guide.specialization}
        </p>

        <p>
          Every tour is designed around your interests.
          Discover famous landmarks, hidden streets,
          local traditions and authentic experiences.
        </p>


        <h2>
          Tour History
        </h2>

        <div className="tour-history">

          <div>
            <strong>
              {guide.tours}
            </strong>

            <span>
              Tours completed
            </span>
          </div>

          <div>
            <strong>
              {guide.experience}
            </strong>

            <span>
              Years guiding
            </span>
          </div>

          <div>
            <strong>
              98%
            </strong>

            <span>
              Happy travelers
            </span>
          </div>

        </div>


        <h2>
          Reviews
        </h2>

        <div className="review-box">

          <div className="review-stars">
            ★★★★★
          </div>

          <p>
            "One of the best guides we've ever had.
            Very friendly, knowledgeable and professional."
          </p>

          <strong>
            — Daniel, verified traveler
          </strong>

        </div>

      </section>

    </main>
  );
}

export default GuideDetails;