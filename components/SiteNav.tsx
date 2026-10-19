import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function SiteNav() {
  const { pathname } = useLocation();
  const [locationVisible, setLocationVisible] = useState(false);

  useEffect(() => {
    if (pathname !== '/') return;
    let frame = 0;
    const update = () => {
      const section = document.getElementById('location');
      const navHeight = document.querySelector('.premium-nav')?.getBoundingClientRect().height ?? 0;
      setLocationVisible(Boolean(section && section.getBoundingClientRect().top <= navHeight + 48));
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [pathname]);

  const atLocation = pathname === '/' && locationVisible;
  const atStay = pathname === '/' && !locationVisible;
  return (
    <nav className="premium-nav" aria-label="Primary">
      <Link className="premium-brand" to="/" aria-label="Limassol Motel home">Limassol<span>MOTEL · GOLD COAST</span></Link>
      <div className="premium-links">
        <Link to="/" aria-current={atStay ? 'page' : undefined}>Your stay</Link>
        <Link to="/#location" aria-current={atLocation ? 'location' : undefined}>Location</Link>
        <NavLink to="/reviews">Reviews</NavLink>
      </div>
      <a className="premium-button small" href="https://www.booking.com/hotel/au/limassol-motel.html">Book a stay ↗</a>
    </nav>
  );
}
