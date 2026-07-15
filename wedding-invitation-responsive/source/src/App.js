import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import "./App.css";

import Loader from "./components/Loader";
import HangingBells from "./components/decor/HangingBells";
import FloatingPetals from "./components/decor/FloatingPetals";
import Hero from "./sections/Hero";
import MarqueeStrip from "./sections/MarqueeStrip";
import Blessing from "./sections/Blessing";
import Details from "./sections/Details";
import Timeline from "./sections/Timeline";
import Countdown from "./sections/Countdown";
import Venue from "./sections/Venue";
import FriendsMarquee from "./sections/FriendsMarquee";
import ThankYou from "./sections/ThankYou";

function App() {
  const reduceMotion = useReducedMotion();
  const [started, setStarted] = useState(Boolean(reduceMotion));
  const [showLoader, setShowLoader] = useState(!reduceMotion);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) {
      setStarted(true);
      setShowLoader(false);
      return undefined;
    }

    const startTimer = window.setTimeout(() => setStarted(true), 2200);
    const loaderTimer = window.setTimeout(() => setShowLoader(false), 2500);
    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(loaderTimer);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let frameId;
    const animate = (time) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(animate);
    };
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!lenisRef.current) return;
    if (started) lenisRef.current.start();
    else lenisRef.current.stop();
  }, [started]);

  return (
    <div className="App grain warm-glow">
      <a className="skip-link" href="#main-content">
        Skip to wedding invitation
      </a>
      <Loader show={showLoader} />
      <HangingBells />
      {!reduceMotion && <FloatingPetals />}

      <main id="main-content">
        <Hero started={started} />
        <MarqueeStrip />
        <Blessing />
        <Details />
        <Timeline />
        <Countdown />
        <Venue />
        <FriendsMarquee />
        <ThankYou />
      </main>
    </div>
  );
}

export default App;
