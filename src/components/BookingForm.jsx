import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ item, type }) {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkin: "",
    checkout: "",
    guests: 2,
    rooms: 1,
    requests: ""
  });

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  const pricePerNight = item.price;

  let nights = 1;

  if (form.checkin && form.checkout) {

    const start =
      new Date(form.checkin);

    const end =
      new Date(form.checkout);

    const difference =
      end - start;

    nights = Math.max(
      1,
      Math.ceil(
        difference / (1000 * 60 * 60 * 24)
      )
    );
  }

  const total =
    pricePerNight *
    nights *
    Number(form.rooms);

  function handleSubmit(e) {

    e.preventDefault();

    const booking = {
      item,
      type,
      form,
      nights,
      total
    };

    sessionStorage.setItem(
      "booking",
      JSON.stringify(booking)
    );

    navigate("/payment");
  }

  return (
    <div className="booking-grid">

      <form
        className="panel booking-form"
        onSubmit={handleSubmit}
      >

        <h2>Guest Information</h2>

        <label>
          Full Name

          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </label>

        <label>
          Phone Number

          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+998..."
          />
        </label>

        <label>
          Email

          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@email.com"
          />
        </label>

        <div className="two-columns">

          <label>
            Check-in

            <input
              required
              type="date"
              name="checkin"
              value={form.checkin}
              onChange={handleChange}
            />
          </label>

          <label>
            Check-out

            <input
              required
              type="date"
              name="checkout"
              value={form.checkout}
              onChange={handleChange}
            />
          </label>

        </div>

        <div className="two-columns">

          <label>
            Guests

            <input
              type="number"
              min="1"
              name="guests"
              value={form.guests}
              onChange={handleChange}
            />
          </label>

          <label>
            Rooms

            <input
              type="number"
              min="1"
              name="rooms"
              value={form.rooms}
              onChange={handleChange}
            />
          </label>

        </div>

        <label>
          Special Requests

          <textarea
            name="requests"
            value={form.requests}
            onChange={handleChange}
            placeholder="Anything we should know?"
          />
        </label>

        <button
          className="gold-button full-width"
          type="submit"
        >
          Continue to Payment
        </button>

      </form>

      <aside className="panel booking-summary">

        <img
          src={item.image}
          alt={item.name}
        />

        <h2>
          {item.name}
        </h2>

        <p className="location">
          📍 {item.location}
        </p>

        <hr />

        <div className="summary-row">
          <span>Price</span>
          <strong>
            ${pricePerNight}/night
          </strong>
        </div>

        <div className="summary-row">
          <span>Stay</span>
          <strong>
            {nights} night(s)
          </strong>
        </div>

        <div className="summary-row">
          <span>Rooms</span>
          <strong>
            {form.rooms}
          </strong>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <strong>
            ${total}
          </strong>
        </div>

      </aside>

    </div>
  );
}

export default BookingForm;