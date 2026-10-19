import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import exterior from '../assets/276507083.jpg';
import pool from '../assets/293834745.jpg';
const booking = 'https://www.booking.com/hotel/au/limassol-motel.html';
const comforts = [
 ['Settle in.', 'Air conditioning, free Wi-Fi and a 32-inch flat-screen TV. Everyday comfort, at your own pace.'],
 ['Feel at home.', 'A mini-fridge, microwave and electric kettle in your room, plus a shared kitchen for a little more space.'],
 ['Room to unwind.', 'Private bathrooms with hair dryers. Family rooms for time together. Balconies in selected rooms.'],
 ['Stay effortlessly.', 'Free private self-parking, room service and 24/7 service. The essentials, taken care of.'],
];
export default function HomePage() {
 return <main className="premium-page">
  <SiteNav/>
  <header className="premium-hero"><p className="premium-kicker">A LITTLE GOLD COAST EASE</p><h1>Less rush.<br/><span>More room to relax.</span></h1><p>A comfortable room. A dip in the pool. Time to yourself.<br/>Welcome to Limassol Motel.</p><div className="premium-actions"><a className="premium-button" href={booking}>Find your stay ↗</a><a className="premium-text-link" href="#rooms">Explore the comforts ↓</a></div></header>
  <figure className="premium-cover"><img src={exterior} alt="Limassol Motel" fetchPriority="high"/><figcaption>Your Gold Coast base. Your own pace.</figcaption></figure>
  <div className="premium-highlights" aria-label="Stay highlights"><span><strong>24/7</strong> service</span><span><strong>Free</strong> Wi-Fi</span><span><strong>Free</strong> private parking</span><span><strong>Outdoor</strong> swimming pool</span></div>
  <section className="premium-section" id="rooms"><p className="premium-kicker">THOUGHTFULLY SIMPLE</p><h2>Everything you need.<br/><span>Space to feel at home.</span></h2><p className="premium-intro">For a short escape or a family stay, enjoy the everyday comforts that make settling in easy.</p><div className="comfort-grid">{comforts.map(([title,copy],i)=><article key={title}><span className="comfort-number">0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
  <section className="premium-pool"><div className="premium-pool-image"><img src={pool} alt="Another view of Limassol Motel" loading="lazy"/></div><div className="premium-pool-copy"><p className="premium-kicker">TAKE A MOMENT</p><h2>A slower kind<br/>of afternoon.</h2><p>Cool off in the outdoor swimming pool. Unwind in the garden. Get together over a barbecue. There’s no need to fill every moment.</p><a className="premium-text-link" href={booking}>Make yourself at home ↗</a></div></section>
  <section className="premium-section premium-location" id="location"><div><p className="premium-kicker">WELL PLACED. EASY GOING.</p><h2>Out and about.<br/><span>Close to your stay.</span></h2><p className="premium-intro">Explore the Broadwater, enjoy a swim or make time for a little shopping. Your Gold Coast stay starts here.</p><a className="premium-text-link" href="https://www.google.com/maps/search/?api=1&query=Limassol+Motel+Gold+Coast" target="_blank" rel="noreferrer">Find us on the map ↗</a></div><dl className="location-list"><div><dt>Southport Broadwater Parklands</dt><dd>Approx. 2–2.4 km</dd></div><div><dt>Gold Coast Aquatic Centre</dt><dd>Approx. 2 km</dd></div><div><dt>Harbour Town</dt><dd>Approx. 3.1 km</dd></div></dl></section>
  <section className="premium-closing"><p className="premium-kicker">LIMASSOL MOTEL</p><h2>A little escape.<br/>A comfortable stay.</h2><a className="premium-button" href={booking}>Check availability ↗</a></section><SiteFooter/>
 </main>;
}


