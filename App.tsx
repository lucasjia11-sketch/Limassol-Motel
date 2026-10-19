import { useEffect, useLayoutEffect, useRef } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './premium.css';
import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';

function App() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => { window.history.scrollRestoration = previous; };
  }, []);

  useLayoutEffect(() => {
    const withinPage = previousPath.current === pathname;
    previousPath.current = pathname;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior = withinPage && !reduceMotion ? 'smooth' : 'instant';
    let top = 0;
    if (hash) {
      const section = document.getElementById(hash.slice(1));
      const navHeight = document.querySelector('.premium-nav')?.getBoundingClientRect().height ?? 0;
      if (section) top = Math.max(0, window.scrollY + section.getBoundingClientRect().top - navHeight);
    }
    window.scrollTo({ top, left: 0, behavior });
  }, [pathname, hash, key]);

  return <div className="page-transition" key={pathname}><Routes><Route path="/" element={<HomePage/>}/><Route path="/reviews" element={<ReviewPage/>}/><Route path="/about" element={<Navigate to="/" replace/>}/></Routes></div>;
}
export default App;
