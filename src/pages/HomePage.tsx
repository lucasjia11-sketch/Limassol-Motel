import { Link } from "react-router-dom";
import motelImg from "../assets/276507083.jpg";
import motelImg1 from "../assets/293834745.jpg";

export default function HomePage() {
  return (
    <main className="editorial-page">
      <nav className="topbar" aria-label="Primary">
        <div className="brand">The Coastal Editorial</div>
        <div className="topbar-links">
          <a href="#rooms">Homepage</a>
          <Link to="/about">About Us</Link>
        </div>
        <a
          className="book-button"
          href="https://www.booking.com/hotel/au/limassol-motel.html"
          target="_blank"
          rel="noreferrer"
        >
          Book Now
        </a>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Limassol Motel</p>
          <h1>
            The art of <span>slow living</span> by the shore.
          </h1>
          <p className="hero-text" id="story">
            A curated coastal escape where minimalist design meets the rhythm of
            the tides. Discover a family-run stay with breezy rooms, a sunny
            pool, beach access, and a calmer pace that feels intentionally away
            from everything noisy.
          </p>
          <div className="hero-actions">
            <a
              className="primary-button"
              href="https://www.booking.com/hotel/au/limassol-motel.html"
            >
              Book our rooms
            </a>
            <Link className="secondary-link" to="/about">
              Learn about us
            </Link>
          </div>
          <dl className="hero-facts" id="features">
            <div>
              <dt>Highlights</dt>
              <dd>Pool, beach access, non-smoking rooms, room service</dd>
            </div>
            <div>
              <dt>Feeling</dt>
              <dd>Editorial, sun-washed, quiet, and easy to settle into</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual" id="rooms">
          <div className="photo-card photo-card-main">
            <img src={motelImg} alt="Limassol Motel exterior near the coast" />
          </div>
          <div className="photo-card photo-card-detail">
            <img
              src={motelImg1}
              alt="Poolside view of the boutique motel in warm afternoon light"
            />
          </div>
          <div className="floating-note">
            <p className="note-label">Stay Notes</p>
            <p className="note-copy">
              White walls, salt air, warm evenings, and the beach just moments
              away.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
