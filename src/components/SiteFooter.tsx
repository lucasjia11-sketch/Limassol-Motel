import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <h2>Limassol Motel</h2>
        <p>
          An intentional destination for travellers who seek quiet coastal ease,
          warm service, and a shoreline stay that feels personal.
        </p>
      </div>
      <div>
        <h3>Explore</h3>
        <Link to="/">Rooms</Link>
        
        <Link to="/reviews">Guest Reviews</Link>
      </div>
      <div>
        <h3>Connect</h3>
        <a href="tel:+61755916766">+61 7 5591 6766</a>
        <a href="mailto:Admin@limassolmotel.com.au">
          Admin@limassolmotel.com.au
        </a>
        <a
          href="https://www.booking.com/hotel/au/limassol-motel.html"
          target="_blank"
          rel="noreferrer"
        >
          Booking.com
        </a>
      </div>
    </footer>
  );
}

