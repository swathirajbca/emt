import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { weddingConfig as C } from "../config/weddingConfig";
import { Reveal } from "../components/Reveal";
import goldLotus from "../assets/gold-lotus.png";

const calc = (target) => {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
};

const Unit = ({ value, label, testid }) => {
  const reduceMotion = useReducedMotion();
  return (
    <div className="countdown-unit" data-testid={testid}>
      <div className="countdown-number-box">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={reduceMotion ? false : { y: "55%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={reduceMotion ? undefined : { y: "-55%", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="countdown-number"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="countdown-label">{label}</span>
    </div>
  );
};

const Countdown = () => {
  const [time, setTime] = useState(() => calc(C.weddingDateTime));

  useEffect(() => {
    const id = window.setInterval(() => setTime(calc(C.weddingDateTime)), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section data-testid="countdown-section" className="section-block relative overflow-hidden bg-maroon text-center text-cream" aria-labelledby="countdown-heading">
      <div className="countdown-glow" aria-hidden="true" />
      <div className="section-shell relative">
        <Reveal>
          <img src={goldLotus} alt="Golden lotus" className="section-lotus" loading="lazy" decoding="async" />
          <span className="eyebrow text-gold-gradient">The Countdown</span>
          <h2 id="countdown-heading" className="section-title mt-6 text-cream">Counting every moment</h2>
        </Reveal>

        <Reveal delay={0.15} className="relative mt-10 sm:mt-14">
          {time.done ? (
            <p className="font-display text-3xl text-gold-gradient sm:text-4xl" data-testid="countdown-done">Today we celebrate our union!</p>
          ) : (
            <div className="countdown-grid" role="timer" aria-live="off" aria-label={`${time.days} days, ${time.hours} hours, ${time.minutes} minutes and ${time.seconds} seconds until the wedding`}>
              <Unit value={time.days} label="Days" testid="countdown-days" />
              <Unit value={time.hours} label="Hours" testid="countdown-hours" />
              <Unit value={time.minutes} label="Minutes" testid="countdown-minutes" />
              <Unit value={time.seconds} label="Seconds" testid="countdown-seconds" />
            </div>
          )}
        </Reveal>

        <Reveal delay={0.25}><p className="mt-10 font-deco text-base text-cream/80 sm:mt-12 sm:text-lg">until {C.weddingDateText}</p></Reveal>
      </div>
    </section>
  );
};

export default Countdown;
