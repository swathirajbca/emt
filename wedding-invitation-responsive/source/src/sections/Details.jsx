import React from "react";
import { weddingConfig as C } from "../config/weddingConfig";
import { Reveal, MaskLine } from "../components/Reveal";
import { LotusMark, CornerKolam, KolamDivider } from "../components/decor/Ornaments";
import WalkingDoll from "../components/decor/WalkingDolls";

const ArchCard = ({ side, overline, name, profession, parents, relation, delay = 0 }) => {
  const isBride = side === "bride";

  return (
    <Reveal delay={delay} className={`couple-profile couple-profile--${side}`}>
      <WalkingDoll
        side={isBride ? "left" : "right"}
        variant={isBride ? "female" : "male"}
        className="couple-doll"
      />
      <article className="arch-card">
        <div className="absolute left-1/2 top-5 -translate-x-1/2 text-gold" aria-hidden="true">
          <LotusMark className="h-8 w-12" />
        </div>
        <p className="eyebrow text-inkSoft">{overline}</p>
        <h3 className="arch-card-name">{name}</h3>
        <div className="arch-card-profession">{profession}</div>
        <div className="mx-auto my-4 w-[min(10rem,80%)] text-gold/70" aria-hidden="true">
          <KolamDivider className="w-full" />
        </div>
        <p className="font-body text-sm leading-relaxed text-inkSoft">{relation}</p>
        <p className="arch-card-parents">{parents}</p>
      </article>
    </Reveal>
  );
};

const detailItems = [
  { k: "When", v: C.weddingDateText, s: C.weddingDay },
  { k: "Where", v: C.venueName, s: "Coimbatore, Tamil Nadu" },
  { k: "Dress Code", v: "Traditional", s: "Your wish" },
];

const Details = () => (
  <section data-testid="details-section" className="section-block relative warm-glow" aria-labelledby="invitation-title">
    <CornerKolam className="corner-kolam left-3 top-3 sm:left-5 sm:top-5" aria-hidden="true" />
    <CornerKolam className="corner-kolam right-3 top-3 -scale-x-100 sm:right-5 sm:top-5" aria-hidden="true" />

    <div className="section-shell text-center">
      <Reveal><span className="eyebrow text-maroon-soft">The Invitation</span></Reveal>
      <h2 id="invitation-title" className="section-title mx-auto mt-7 max-w-3xl text-ink">
        <MaskLine delay={0.05}>{C.inviteOverline}</MaskLine>
      </h2>
      <Reveal delay={0.2}>
        <p className="section-copy mx-auto mt-5 max-w-2xl text-inkSoft">{C.inviteMessage}</p>
      </Reveal>

      <div className="couple-layout">
        <ArchCard
          side="bride"
          overline="The Bride"
          name={C.brideFullName}
          profession={<><span>Incident Manager</span><span>(Accenture)</span></>}
          parents={C.brideParents}
          relation="D/o"
          delay={0.1}
        />

        <div className="weds-divider" aria-label="weds">
          <span>weds</span>
        </div>

        <ArchCard
          side="groom"
          overline="The Groom"
          name={C.groomFullName}
          profession={<><span>Additional Government Pleader</span><span>(Madukkarai CBE Dist.)</span></>}
          parents={C.groomParents}
          relation="S/o"
          delay={0.2}
        />
      </div>

      <Reveal delay={0.2}>
        <dl className="details-grid">
          {detailItems.map((item, index) => (
            <div key={item.k} className="detail-block" data-testid={`detail-block-${index}`}>
              <dt className="eyebrow text-maroon-soft">{item.k}</dt>
              <dd className="detail-value">{item.v}</dd>
              <dd className="mt-2 font-body text-sm text-inkSoft">{item.s}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
);

export default Details;
