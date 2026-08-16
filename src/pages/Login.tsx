import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      <div className="login-background login-bg-one" />
      <div className="login-background login-bg-two" />

      <div className="login-container">

        {/* Left Side */}
        <section className="login-showcase">

          <div className="login-brand">
            <div className="brand-mark">
              <Sparkles size={20} />
            </div>

            <div>
              <strong>Supportly</strong>
              <span>Customer Care</span>
            </div>
          </div>

          <div className="showcase-content">

            <span className="showcase-badge">
              <Sparkles size={13} />
              Support made simple
            </span>

            <h1>
              Your support.
              <br />
              <span>One place.</span>
            </h1>

            <p>
              Manage your requests, communicate with our
              support team, and stay updated every step of
              the way.
            </p>

            <div className="showcase-features">

              <div>
                <div className="feature-number">
                  01
                </div>

                <div>
                  <strong>Track everything</strong>
                  <span>
                    Follow your requests in real time.
                  </span>
                </div>
              </div>

              <div>
                <div className="feature-number">
                  02
                </div>

                <div>
                  <strong>Stay connected</strong>
                  <span>
                    Keep conversations in one place.
                  </span>
                </div>
              </div>

              <div>
                <div className="feature-number">
                  03
                </div>

                <div>
                  <strong>Get things resolved</strong>
                  <span>
                    Know exactly where your request stands.
                  </span>
                </div>
              </div>

            </div>

          </div>

          <div className="login-footer">
            © 2026 Supportly
          </div>

        </section>

        {/* Right Side */}
        <section className="login-form-section">

          <div className="login-form-wrapper">

            <div className="mobile-login-brand">
              <div className="brand-mark">
                <Sparkles size={18} />
              </div>

              <strong>Supportly</strong>
            </div>

            <div className="login-heading">

              <span className="form-eyebrow">
                WELCOME BACK
              </span>

              <h2>
                Sign in to your account
              </h2>

              <p>
                Enter your details to access your customer
                workspace.
              </p>

            </div>

            <form className="login-form">

              <div className="form-group">

                <label htmlFor="email">
                  Email address
                </label>

                <div className="input-wrapper">

                  <Mail size={18} />

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />

                </div>

              </div>

              <div className="form-group">

                <div className="label-row">
                  <label htmlFor="password">
                    Password
                  </label>

                  <button
                    type="button"
                    className="forgot-password"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="input-wrapper">

                  <LockKeyhole size={18} />

                  <input
                    id="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter your password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>

                </div>

              </div>

              <label className="remember-me">

                <input type="checkbox" />

                <span>
                  Remember me
                </span>

              </label>

              <button
                type="submit"
                className="login-button"
              >
                <span>Sign in</span>

                <ArrowRight size={18} />
              </button>

            </form>

            <div className="login-divider">
              <span>New to Supportly?</span>
            </div>

            <button className="create-account-button">
              Create a customer account
            </button>

            <p className="login-note">
              By continuing, you agree to our Terms and
              Privacy Policy.
            </p>

          </div>

        </section>

      </div>
    </div>
  );
}