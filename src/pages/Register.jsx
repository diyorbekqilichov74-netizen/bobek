import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    if (
      form.password !==
      form.confirmPassword
    ) {
      setError("Passwords do not match.");
      return;
    }

    localStorage.setItem(
      "luxestay_user",
      JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone
      })
    );

    navigate("/");
  }

  return (
    <main className="auth-page">

      <div className="auth-visual">
        <div>
          <span className="eyebrow">
            WELCOME TO LUXESTAY
          </span>

          <h1>
            Your next
            <br />
            <em>journey starts here.</em>
          </h1>

          <p>
            Discover extraordinary places and
            authentic local experiences.
          </p>
        </div>
      </div>


      <div className="auth-container">

        <div className="auth-form-wrapper">

          <Link
            to="/"
            className="logo"
          >
            <span>✦</span>
            LuxeStay
          </Link>

          <div className="auth-heading">

            <span className="eyebrow">
              CREATE ACCOUNT
            </span>

            <h2>
              Join LuxeStay
            </h2>

            <p>
              Create an account to manage your
              bookings and favorite stays.
            </p>

          </div>


          <div className="social-login">

            <button type="button">
              <strong>G</strong>
              Continue with Google
            </button>

          </div>


          <div className="divider">
            <span>or register with email</span>
          </div>


          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

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
              Email

              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </label>


            <label>
              Phone Number

              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+998 90 000 00 00"
              />
            </label>


            <label>
              Password

              <div className="password-input">

                <input
                  required
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>

            </label>


            <label>
              Confirm Password

              <input
                required
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
              />
            </label>


            {error && (
              <div className="form-error">
                {error}
              </div>
            )}


            <button
              className="gold-button full-width"
              type="submit"
            >
              Create Account
            </button>

          </form>


          <p className="auth-switch">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

    </main>
  );
}

export default Register;