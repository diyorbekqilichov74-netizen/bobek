import {
  useParams,
  Link
} from "react-router-dom";

import BookingForm from "../components/BookingForm";

import { hotels } from "../data/hotels";
import { guides } from "../data/guides";

function Booking() {

  const { type, id } =
    useParams();

  const data =
    type === "guide"
      ? guides
      : hotels;

  const item =
    data.find(
      (entry) =>
        entry.id === Number(id)
    ) || data[0];


  return (
    <main className="page booking-page">

      <div className="page-header compact">

        <Link
          to={
            type === "guide"
              ? `/guides/${item.id}`
              : `/hotels/${item.id}`
          }
          className="back-link"
        >
          ← Back
        </Link>

        <span className="eyebrow">
          RESERVATION
        </span>

        <h1>
          Complete Your
          <br />
          <em>Booking</em>
        </h1>

        <p>
          Enter your details and review your reservation
          before continuing to payment.
        </p>

      </div>


      <BookingForm
        item={item}
        type={type}
      />

    </main>
  );
}

export default Booking;