import { Link } from "react-router-dom";
import beachImg from "../assets/220737396.jpg";
import porchImg from "../assets/204789140.jpg";

export default function AboutUsPage() {
  return (
    <main className="about-page">
      <nav className="about-nav" aria-label="Primary">
        <span className="about-brand">The Coastal Editorial</span>
        <div className="about-nav-links">
          <Link to="/">Homepage</Link>
          <Link className="is-active" to="/about">
            About Us
          </Link>
        </div>
        <a
          className="about-book-button"
          href="https://www.booking.com/hotel/au/limassol-motel.html"
          target="_blank"
          rel="noreferrer"
        >
          Book Now
        </a>
      </nav>

      <header className="about-hero">
        <div className="about-hero-media">
          <img
            src={beachImg}
            alt="Wide coastal view with pale sand and still ocean water"
          />
        </div>
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1>Our Story</h1>
          <p>A sanctuary where curated simplicity meets the shore.</p>
        </div>
      </header>

      <section className="about-story">
        <div className="about-story-image">
          <img
            src={porchImg}
            alt="Warm porch scene with coastal light and relaxed atmosphere"
          />
        </div>
        <div className="about-story-copy">
          <span className="about-kicker">Heritage &amp; Intent</span>
          <h2>Born from the mist.</h2>
          <div className="about-story-text">
            <p>
              Located in Gold Coast, 1.5 mi from Southport Broadwater Parklands,
              Limassol Motel features accommodations with an outdoor swimming
              pool, free private parking, a garden and barbecue facilities.
              Among the facilities at this property are a shared kitchen and
              room service, along with free WiFi throughout the property.
            </p>
            <p>
              We believe luxury is found in the quality of light falling across
              a linen sheet and the perfect cup of locally roasted coffee
              enjoyed on a salt-dusted balcony.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
