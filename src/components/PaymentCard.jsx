import { useState } from "react";

function PaymentCard({ onPay }) {

  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: ""
  });

  const [flipped, setFlipped] =
    useState(false);

  function updateCard(field, value) {

    setCard({
      ...card,
      [field]: value
    });
  }

  function formatCardNumber(value) {

    return value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }

  function handleSubmit(e) {

    e.preventDefault();

    onPay();
  }

  return (
    <div className="payment-container">

      <div
        className={`credit-card ${
          flipped ? "flipped" : ""
        }`}
      >

        <div className="credit-front">

          <div className="card-top">
            <span className="chip">
              ▦
            </span>

            <strong>
              VISA
            </strong>
          </div>

          <div className="card-number">
            {formatCardNumber(card.number) ||
              "•••• •••• •••• ••••"}
          </div>

          <div className="card-bottom">

            <span>
              {card.name ||
                "YOUR NAME"}
            </span>

            <span>
              {card.expiry ||
                "MM/YY"}
            </span>

          </div>

        </div>

        <div className="credit-back">

          <div className="card-stripe" />

          <div className="cvv-display">
            {card.cvv || "•••"}
          </div>

          <small>
            Authorized use only
          </small>

        </div>

      </div>

      <form
        className="panel payment-form"
        onSubmit={handleSubmit}
      >

        <div className="payment-methods">

          <button
            type="button"
            className="selected"
          >
            💳 Bank Card
          </button>

          <button type="button">
            VISA
          </button>

          <button type="button">
            Mastercard
          </button>

        </div>

        <label>
          Cardholder Name

          <input
            required
            value={card.name}
            onChange={(e) =>
              updateCard(
                "name",
                e.target.value
              )
            }
            placeholder="YOUR NAME"
          />
        </label>

        <label>
          Card Number

          <input
            required
            inputMode="numeric"
            value={formatCardNumber(card.number)}
            onChange={(e) =>
              updateCard(
                "number",
                e.target.value
              )
            }
            placeholder="1234 5678 9012 3456"
          />
        </label>

        <div className="two-columns">

          <label>
            Expiration Date

            <input
              required
              placeholder="MM/YY"
              value={card.expiry}
              onChange={(e) =>
                updateCard(
                  "expiry",
                  e.target.value
                )
              }
            />
          </label>

          <label>
            CVV

            <input
              required
              maxLength="4"
              value={card.cvv}
              onFocus={() =>
                setFlipped(true)
              }
              onBlur={() =>
                setFlipped(false)
              }
              onChange={(e) =>
                updateCard(
                  "cvv",
                  e.target.value.replace(
                    /\D/g,
                    ""
                  )
                )
              }
              placeholder="123"
            />
          </label>

        </div>

        <button
          type="submit"
          className="gold-button full-width"
        >
          Pay Now
        </button>

        <p className="secure-payment">
          🔒 Secure Payment
          <br />
          Your payment information is protected.
        </p>

      </form>

    </div>
  );
}

export default PaymentCard;