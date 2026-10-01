import { Link } from "react-router-dom";

function NotFound() {

  return (
    <main className="not-found">

      <div>

        <span className="not-found-number">
          404
        </span>

        <span className="eyebrow">
          PAGE NOT FOUND
        </span>

        <h1>
          Looks like you've
          <br />
          <em>taken a wrong turn.</em>
        </h1>

        <p>
          The page you're looking for doesn't exist
          or has been moved.
        </p>

        <Link
          to="/"
          className="gold-button"
        >
          Return Home
        </Link>

      </div>

    </main>
  );
}

export default NotFound;