import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setError(
        "Please enter your email and password."
      );
      return;
    }

    navigate("/");
  }

  return (
    <main className="auth-page">

      <div className="auth-visual login-visual">

        <div>

          <span className="eyebrow">
            WELCOME BACK
          </span>

          <h1>
            Continue your
            <br />
            <em>journey.</em>
          </h1>

          <p>
            Your favorite destinations and
            reservations are waiting for you.
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
              SIGN IN
            </span>

            <h2>
              Welcome back
            </h2>

            <p>
              Sign in to access your account.
            </p>

          </div>


          <div className="social-login">

            <button type="button">
              <strong>G</strong>
              Continue with Google
            </button>

          </div>


          <div className="divider">
            <span>or continue with email</span>
          </div>


          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            <label>
              Email

              <input
                required
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="you@example.com"
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
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Your password"
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


            <div className="forgot-row">

              <label className="checkbox">

                <input type="checkbox" />

                Remember me

              </label>

              <button
                type="button"
                className="forgot-button"
              >
                Forgot password?
              </button>

            </div>


            {error && (
              <div className="form-error">
                {error}
              </div>
            )}


            <button
              className="gold-button full-width"
              type="submit"
            >
              Login
            </button>

          </form>


          <p className="auth-switch">

            Don't have an account?

            <Link to="/register">
              Create account
            </Link>

          </p>

        </div>

      </div>

    </main>
  );
}

export default Login;