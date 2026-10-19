import { useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";


const reviews = [
  {
    "title": "Great stay",
    "quote": "Staff were kind and friendly plus really helpful with a few things. The room was really spacious, shower was great, bed and pillows were super comfy. I would visit that place again",
    "name": "Caleb",
    "score": "10.0",
    "date": "October 12, 2026",
    "dateTime": "2026-10-12"
  },
  {
    "title": "Great Value and Excellent Service",
    "quote": "Great Value and Excellent Service The receptionist was very helpful and friendly throughout our stay. I had some issues with the air conditioning and fridge not working when we arrived, but they responded immediately and got everything fixed quickly. They also offered to help us several times during our stay, even when we didn’t require any additional assistance. It was great to see such attentive and genuinely helpful service. This is a budget hotel, but it offers good value for money. Overall, we had a pleasant stay and were very happy with the service. I would happily stay here again.",
    "name": "MD FAZLE MUNIEM",
    "score": "10.0",
    "date": "October 07, 2026",
    "dateTime": "2026-10-07"
  },
  {
    "title": "We would stay again and for longer",
    "quote": "The manager was great, very helpful and super accommodating. Was able to help with everything we needed. Very friendly. Yes there was a language barrier but we both took the time to accommodate to each other and turned into a great evening.",
    "name": "Morgan",
    "score": "8.0",
    "date": "September 26, 2026",
    "dateTime": "2026-09-26"
  },
  {
    "title": "Good location and comfortable stay, but a few issues could be improved.",
    "quote": "We had a pleasant stay at this motel. The location was great and very convenient for getting around. The beds were comfortable, which made for a good night’s sleep, and the bathroom was clean and perfectly reasonable for our stay. Overall, it was good value for money and suited our needs well.",
    "name": "Megan",
    "score": "7.0",
    "date": "September 25, 2026",
    "dateTime": "2026-09-25"
  }
];

export default function ReviewPage() {
  const [activeReview, setActiveReview] = useState(0);
  const [direction, setDirection] = useState("next");


  const goToPreviousReview = () => {
    setDirection("previous");
    setActiveReview((currentReview) =>
      currentReview === 0 ? reviews.length - 1 : currentReview - 1,
    );
  };

  const goToNextReview = () => {
    setDirection("next");
    setActiveReview((currentReview) =>
      currentReview === reviews.length - 1 ? 0 : currentReview + 1,
    );
  };

  return (
    <main className="premium-page premium-reviews">
      <SiteNav />

      <header className="premium-hero"><p className="premium-kicker">THE STAY, THROUGH THEIR EYES</p><h1>Small comforts.<br /><span>Lasting impressions.</span></h1><p>Discover what guests appreciate about a stay at Limassol Motel.</p><div className="premium-actions"><a className="premium-text-link" href="#guest-reviews">Explore guest highlights ↓</a></div></header>

      <section className="review-section" id="guest-reviews" aria-labelledby="review-heading">
        <div className="review-heading">
          <p className="premium-kicker">A WARM WELCOME. A COMFORTABLE STAY.</p><h2 id="review-heading">Guest highlights.</h2>
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
            {reviews.map((review, index) => (<article className={`review-card ${index === activeReview ? `review-enter-${direction}` : "review-inactive"}`} key={review.title} aria-hidden={index !== activeReview}>
              <div>
                <span className="quote-mark" aria-hidden="true">
                  "
                </span>
                <span className="review-score">{review.score}/10</span>
                <h3>“{review.title}”</h3>
                <blockquote className="guest-quote"><p>“{review.quote}”</p></blockquote>
              </div>
              <footer className="review-card-footer">
                <div>
                  <h4>{review.name}</h4>
                  <span><time dateTime={review.dateTime}>{review.date}</time></span>
                </div>
              </footer>
            </article>))}
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
              onClick={() => { setDirection(index < activeReview ? "previous" : "next"); setActiveReview(index); }}
            />
          ))}
        </div>
      </section>

      <section className="premium-closing"><p className="premium-kicker">YOUR NEXT GOLD COAST STAY</p><h2>Make time<br />for a little escape.</h2><a className="premium-button" href="https://www.booking.com/hotel/au/limassol-motel.html">Check availability ↗</a></section><SiteFooter />
    </main>
  );
}




