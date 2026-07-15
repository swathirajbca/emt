import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { weddingConfig as C } from "../config/weddingConfig";
import { Reveal } from "../components/Reveal";
import { CornerKolam } from "../components/decor/Ornaments";
import templeBackdrop from "../assets/temple-backdrop.svg";


const Venue = () => (
  <section data-testid="venue-section" className="section-block relative warm-glow" aria-labelledby="venue-heading">
    <CornerKolam className="corner-kolam bottom-3 right-3 -scale-y-100 sm:bottom-5 sm:right-5" aria-hidden="true" />
    <CornerKolam className="corner-kolam bottom-3 left-3 -scale-100 sm:bottom-5 sm:left-5" aria-hidden="true" />

    <div className="section-shell grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="min-w-0">
        <Reveal><span className="eyebrow text-maroon-soft">The Venue</span></Reveal>
        <Reveal delay={0.1}><h2 id="venue-heading" className="section-title mt-6 text-ink">{C.venueName}</h2></Reveal>
        <Reveal delay={0.2}>
          <div className="mt-6 flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-maroon" aria-hidden="true" />
            <address className="max-w-md not-italic section-copy text-inkSoft">{C.venueAddress}</address>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href={C.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="google-maps-btn"
            className="map-button"
            aria-label={`Open directions to ${C.venueName} in Google Maps`}
          >
            <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
            <span>Open in Google Maps</span>
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.15} x={24}>
        <a
          href={C.googleMapLink}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="map-frame-link"
          className="map-card group"
          aria-label={`View route to ${C.venueName}`}
        >
          <img
            src={templeBackdrop}
            alt="South Indian temple near the wedding venue"
            className="map-card-image"
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 44vw, 92vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/75 via-transparent to-transparent" aria-hidden="true" />
          <div className="map-card-caption">
            <span className="font-deco text-sm tracking-wide text-cream">See the route</span>
            <span className="map-card-icon" aria-hidden="true"><Navigation className="h-5 w-5" /></span>
          </div>
        </a>
      </Reveal>
    </div>
  </section>
);

export default Venue;
