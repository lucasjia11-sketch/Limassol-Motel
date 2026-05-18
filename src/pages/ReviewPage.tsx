import { useState } from "react";
import { Link } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";
import beachImg from "../assets/220737396.jpg";

const reviews = [
  {
    title: "Kind, Simple, Spotless",
    quote:
      "Guests praise the motel for an easy stay, very clean rooms, and a front desk team that feels genuinely kind and helpful.",
    name: "Erwin",
    location: "Australia",
    score: "10",
  },
  {
    title: "Comfortable And Peaceful",
    quote:
      "Travellers liked the right location for their plans, the comfortable rooms, and the calm feeling of the property.",
    name: "R",
    location: "Australia",
    score: "10",
  },
  {
    title: "Cloud-Level Beds",
    quote:
      "A family stay called out the extremely comfortable beds and loved having the beach just across the way.",
    name: "Rochelle",
    location: "Australia",
    score: "10",
  },
  {
    title: "Family-Run Warmth",
    quote:
      "The motel's family-run feel stood out to guests looking for a straightforward, welcoming place to land.",
    name: "Todd",
    location: "Australia",
    score: "10",
  },
  {
    title: "Quick Getaway Pick",
    quote:
      "Families highlighted the convenient location, comfortable rooms, and easy access to nearby Gold Coast plans.",
    name: "Jasper",
    location: "Australia",
    score: "10",
  },
  {
    title: "Clean And Well Kept",
    quote:
      "Guests were impressed by the cleanliness and care of the room, especially for a short overnight stay.",
    name: "Marie",
    location: "Australia",
    score: "10",
  },
  {
    title: "Friendly Local Advice",
    quote:
      "Helpful staff pointed visitors toward nearby dinner options within walking distance, making the stay feel easy.",
    name: "Marie",
    location: "Australia",
    score: "10",
  },
  {
    title: "Great Value",
    quote:
      "Reviewers mention tidy rooms, friendly staff, and a practical price point for a quick Gold Coast stopover.",
    name: "Jaimea-rae",
    location: "Australia",
    score: "10",
  },
];

export default function ReviewPage() {
  const [activeReview, setActiveReview] = useState(0);
  const review = reviews[activeReview];

  const goToPreviousReview = () => {
    setActiveReview((currentReview) =>
      currentReview === 0 ? reviews.length - 1 : currentReview - 1,
    );
  };

  const goToNextReview = () => {
    setActiveReview((currentReview) =>
      currentReview === reviews.length - 1 ? 0 : currentReview + 1,
    );
  };

  return (
    <main className="review-page">
      <nav className="review-nav" aria-label="Primary">
        <span className="review-brand">Limassol Motel</span>
        <div className="review-nav-links">
          <Link to="/">Homepage</Link>
          <Link to="/about">About Us</Link>
          <Link className="is-active" to="/reviews">
            Reviews
          </Link>
        </div>
        <a
          className="review-book-button"
          href="https://www.booking.com/hotel/au/limassol-motel.html"
          target="_blank"
          rel="noreferrer"
        >
          Book Now
        </a>
      </nav>

      <header className="review-hero">
        <img
          src={beachImg}
          alt="Calm Gold Coast shoreline near Limassol Motel"
        />
        <div className="review-hero-shade" />
        <div className="review-hero-content">
          <span>Verified Guest Highlights</span>
          <h1>Past Reviews</h1>
        </div>
      </header>

      <section className="review-section" aria-labelledby="review-heading">
        <div className="review-heading">
          <h2 id="review-heading">Guest Reviews</h2>
          <div aria-hidden="true" />
        </div>

        <div className="review-carousel" aria-label="Guest review carousel">
          <button
            className="review-arrow"
            type="button"
            aria-label="Previous review"
            onClick={goToPreviousReview}
          >
            <span aria-hidden="true">{"<"}</span>
          </button>

          <div className="review-cards" aria-live="polite">
            <article className="review-card" key={review.title}>
              <div>
                <span className="quote-mark" aria-hidden="true">
                  "
                </span>
                <span className="review-score">{review.score}/10</span>
                <h3>{review.title}</h3>
                <p>{review.quote}</p>
              </div>
              <footer className="review-card-footer">
                <div>
                  <h4>{review.name}</h4>
                  <span>{review.location}</span>
                </div>
              </footer>
            </article>
          </div>

          <button
            className="review-arrow"
            type="button"
            aria-label="Next review"
            onClick={goToNextReview}
          >
            <span aria-hidden="true">{">"}</span>
          </button>
        </div>

        <div className="review-dots" aria-label="Choose a review">
          {reviews.map((singleReview, index) => (
            <button
              className={activeReview === index ? "is-active" : ""}
              type="button"
              aria-label={`Show ${singleReview.title} review`}
              aria-current={activeReview === index ? "true" : undefined}
              key={singleReview.title}
              onClick={() => setActiveReview(index)}
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
