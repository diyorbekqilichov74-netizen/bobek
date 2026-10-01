import {
  Link,
  Navigate
} from "react-router-dom";

function Success() {

  let booking = null;

  try {

    booking = JSON.parse(
      sessionStorage.getItem(
        "completedBooking"
      )
    );

  } catch {
    booking = null;
  }


  if (!booking) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }


  return (
    <main className="success-page">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <span className="eyebrow">
          BOOKING CONFIRMED
        </span>

        <h1>
          You're all set!
        </h1>

        <p>
          Your reservation has been successfully
          completed. We hope you have an amazing trip.
        </p>


        <div className="confirmation">

          <div>
            <span>
              Booking ID
            </span>

            <strong>
              {booking.bookingId}
            </strong>
          </div>

          <div>
            <span>
              Property
            </span>

            <strong>
              {booking.item.name}
            </strong>
          </div>

          <div>
            <span>
              Dates
            </span>

            <strong>
              {booking.form.checkin ||
                "Selected dates"}
              {" → "}
              {booking.form.checkout ||
                "Selected dates"}
            </strong>
          </div>

          <div>
            <span>
              Total
            </span>

            <strong>
              ${booking.total}
            </strong>
          </div>

        </div>


        <div className="success-actions">

          <Link
            to="/"
            className="gold-button"
          >
            Back to Home
          </Link>

          <Link
            to="/hotels"
            className="outline-button"
          >
            Explore More Stays
          </Link>

        </div>

      </div>

    </main>
  );
}

export default Success;