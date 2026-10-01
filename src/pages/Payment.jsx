import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PaymentCard from "../components/PaymentCard";

function Payment() {

  const navigate = useNavigate();

  const [booking] = useState(() => {

    try {

      return JSON.parse(
        sessionStorage.getItem("booking")
      );

    } catch {
      return null;
    }

  });


  function handlePayment() {

    const bookingId =
      "LS-" +
      Math.floor(
        100000 +
        Math.random() * 900000
      );

    const completedBooking = {
      ...booking,
      bookingId
    };

    sessionStorage.setItem(
      "completedBooking",
      JSON.stringify(
        completedBooking
      )
    );

    navigate("/success");
  }


  if (!booking) {

    return (
      <main className="page empty-state">

        <div className="empty-icon">
          !
        </div>

        <h1>
          No booking found
        </h1>

        <p>
          Please select a hotel or guide first.
        </p>

        <Link
          to="/hotels"
          className="gold-button"
        >
          Browse Hotels
        </Link>

      </main>
    );

  }


  return (
    <main className="page payment-page">

      <div className="page-header compact">

        <span className="eyebrow">
          SECURE CHECKOUT
        </span>

        <h1>
          Complete Your
          <br />
          <em>Payment</em>
        </h1>

        <p>
          Your reservation is almost complete.
        </p>

      </div>


      <div className="payment-layout">

        <section>

          <PaymentCard
            onPay={handlePayment}
          />

        </section>


        <aside className="panel checkout-summary">

          <span className="eyebrow">
            YOUR RESERVATION
          </span>

          <img
            src={booking.item.image}
            alt={booking.item.name}
          />

          <h2>
            {booking.item.name}
          </h2>

          <p className="location">
            📍 {booking.item.location}
          </p>

          <hr />

          <div className="summary-row">
            <span>
              Price
            </span>

            <strong>
              ${booking.item.price}
            </strong>
          </div>

          <div className="summary-row">
            <span>
              Nights
            </span>

            <strong>
              {booking.nights}
            </strong>
          </div>

          <div className="summary-row">
            <span>
              Guests
            </span>

            <strong>
              {booking.form.guests}
            </strong>
          </div>

          <div className="summary-row">
            <span>
              Rooms
            </span>

            <strong>
              {booking.form.rooms}
            </strong>
          </div>

          <div className="summary-total">
            <span>
              Total
            </span>

            <strong>
              ${booking.total}
            </strong>
          </div>

        </aside>

      </div>

    </main>
  );
}

export default Payment;