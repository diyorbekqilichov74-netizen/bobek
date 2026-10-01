import { Link } from "react-router-dom";

function GuideCard({ guide }) {

  return (
    <article className="guide-card">

      <div className="guide-image">

        <img
          src={guide.image}
          alt={guide.name}
        />

      </div>

      <div className="guide-content">

        <div className="hotel-title">

          <h3>{guide.name}</h3>

          <span className="rating">
            ★ {guide.rating}
          </span>

        </div>

        <p className="location">
          📍 {guide.city}
        </p>

        <p className="guide-experience">
          {guide.age} years old ·{" "}
          {guide.experience} years experience
        </p>

        <p>
          <strong>
            {guide.specialization}
          </strong>
        </p>

        <div className="languages">
          {guide.languages.map((language) => (
            <span key={language}>
              {language}
            </span>
          ))}
        </div>

        <p className="guide-tours">
          {guide.tours} tours completed
        </p>

        <div className="guide-price">
          ${guide.price}
          <small>/day</small>
        </div>

        <div className="card-buttons">

          <Link
            to={`/guides/${guide.id}`}
            className="outline-button"
          >
            View Profile
          </Link>

          <Link
            to={`/booking/guide/${guide.id}`}
            className="gold-button"
          >
            Book Guide
          </Link>

        </div>

      </div>

    </article>
  );
}

export default GuideCard;