// @ts-nocheck
"use client";

import { Saira_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import content from "../data/content.json";

const display = Saira_Condensed({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Tradesman / fleet — asphalt charcoal, safety yellow, steel, hi-vis orange, white
const ASPHALT = "#1F2630";
const ASPHALT_DEEP = "#0E1218";
const STEEL = "#3F4858";
const STEEL_MID = "#5C6678";
const HIVIS = "#F5C518";
const HIVIS_DEEP = "#B8920A";
const ORANGE = "#FF7A1A";
const WHITE = "#F4F6FA";
const PAPER = "#E8ECF2";
const MUTED = "#8A93A4";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: WHITE, color: ASPHALT }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pulseDot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.4); } }
        @keyframes scroll-stripe { from { background-position: 0 0; } to { background-position: 56px 0; } }
        .fade-up { animation: fadeUp 0.85s cubic-bezier(.2,.7,.2,1) forwards; }
        .fade-in { animation: fadeIn 1.1s ease-out forwards; }
        .pulse { animation: pulseDot 1.6s ease-in-out infinite; }
        .hivis-stripe { background-image: repeating-linear-gradient(135deg, ${HIVIS} 0 18px, ${ASPHALT} 18px 28px); animation: scroll-stripe 2s linear infinite; }
        .d1 { animation-delay: .1s; opacity: 0; }
        .d2 { animation-delay: .22s; opacity: 0; }
        .d3 { animation-delay: .35s; opacity: 0; }
      `}</style>

      {/* HI-VIS STRIPE TOP */}
      <div className="hivis-stripe fixed top-0 left-0 right-0 z-40 h-3" />

      {/* NAV */}
      <nav className="fixed top-3 left-0 right-0 z-50" style={{ backgroundColor: ASPHALT_DEEP, color: WHITE, borderBottom: `1px solid ${STEEL}` }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-3">
            <span className={display.className} style={{ fontSize: "1.8rem", color: HIVIS, fontWeight: 900, letterSpacing: "0.005em" }}>AKP</span>
            <span className={mono.className + " text-[10px] uppercase tracking-[0.3em]"} style={{ color: WHITE }}>BRAKES · MOBILE</span>
          </a>
          <div className={display.className + " hidden md:flex items-center gap-6 text-sm uppercase tracking-wider"} style={{ color: WHITE, fontWeight: 600 }}>
            <a href="#services" className="hover:text-yellow-400 transition">SERVICES</a>
            <a href="#story" className="hover:text-yellow-400 transition">HOW IT WORKS</a>
            <a href="#visit" className="hover:text-yellow-400 transition">BOOK</a>
          </div>
          <a href={phoneTel} className={display.className + " px-5 py-2.5 text-sm uppercase tracking-widest transition-transform hover:-translate-y-0.5"} style={{ backgroundColor: HIVIS, color: ASPHALT_DEEP, fontWeight: 800 }}>
            ☎ INSTANT QUOTE
          </a>
        </div>
      </nav>

      {/* HERO — service tech card */}
      <section id="top" className="relative pt-28 min-h-[100vh] flex items-center overflow-hidden" style={{ backgroundColor: ASPHALT }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url("${content.hero.image}")` }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(105deg, ${ASPHALT_DEEP}f5 0%, ${ASPHALT}cc 60%, ${ASPHALT}f5 100%)` }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8" style={{ color: WHITE }}>
            <div className="fade-in d1 inline-flex items-center gap-3 px-4 py-2 mb-8" style={{ backgroundColor: HIVIS, color: ASPHALT_DEEP }}>
              <span className="w-2.5 h-2.5 rounded-full pulse" style={{ backgroundColor: ORANGE }} />
              <span className={display.className + " text-xs uppercase tracking-widest font-bold"}>SAME-DAY MOBILE SERVICE · ORANGE COUNTY · OPEN NOW</span>
            </div>
            <h1 className={display.className + " fade-up d1"} style={{ fontSize: "clamp(3rem, 9vw, 7rem)", color: WHITE, lineHeight: 0.92, letterSpacing: "-0.005em", fontWeight: 800, textTransform: "uppercase" }}>
              Brakes done in<br /><span style={{ color: HIVIS }}>your driveway.</span><br />Same day.
            </h1>
            <p className="fade-up d2 mt-8 text-lg max-w-xl leading-relaxed" style={{ color: PAPER }}>
              {content.hero.subheading}
            </p>
            <div className="fade-up d3 mt-10 flex flex-col sm:flex-row gap-3">
              <a href={phoneTel} className={display.className + " px-9 py-4 text-base uppercase tracking-widest font-bold transition-transform hover:-translate-y-0.5"} style={{ backgroundColor: HIVIS, color: ASPHALT_DEEP, clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)" }}>
                GET INSTANT QUOTE →
              </a>
              <a href="#services" className={display.className + " px-9 py-4 text-base uppercase tracking-widest font-bold transition-colors"} style={{ backgroundColor: "transparent", color: WHITE, border: `2px solid ${WHITE}` }}>
                VIEW PRICING
              </a>
            </div>
          </div>
          <div className="md:col-span-4 fade-up d3 space-y-3">
            {[
              { v: "90 MIN", l: "AVG. ARRIVAL TIME" },
              { v: "2 YR", l: "WORKMANSHIP WARRANTY" },
              { v: "ASE", l: "MASTER BRAKE TECHS" },
            ].map((s, i) => (
              <div key={i} className="px-5 py-4 flex items-center justify-between" style={{ backgroundColor: ASPHALT_DEEP, borderLeft: `4px solid ${HIVIS}` }}>
                <p className={mono.className + " text-[10px] uppercase tracking-widest font-bold"} style={{ color: MUTED }}>{s.l}</p>
                <p className={display.className} style={{ fontSize: "1.7rem", color: WHITE, fontWeight: 800, letterSpacing: "-0.005em" }}>{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY / PROCESS */}
      <section id="story" className="px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className={mono.className + " text-[10px] uppercase tracking-widest font-bold mb-3"} style={{ color: HIVIS_DEEP }}>01 / THE PROCESS</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: ASPHALT, fontWeight: 800, lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.005em" }}>
              {content.about.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "QUOTE IN 2 MIN", d: "Call or text — we ask three questions about your car and give you a flat price. No \"we'll see when we get there\"." },
              { n: "02", t: "TECH ARRIVES IN 90 MIN", d: "We dispatch the closest van. Tech rolls up with parts, jack, equipment. Whole shop in a truck." },
              { n: "03", t: "BACK ON THE ROAD", d: "Job done curbside in 60–90 min per axle. Test drive, brake bedded, old parts hauled away. Warranty in writing." },
            ].map((x, i) => (
              <div key={i} className="p-7" style={{ backgroundColor: PAPER, borderTop: `4px solid ${HIVIS}` }}>
                <p className={mono.className + " text-xs uppercase tracking-widest font-bold mb-3"} style={{ color: HIVIS_DEEP }}>{x.n}</p>
                <h3 className={display.className} style={{ fontSize: "1.5rem", color: ASPHALT, fontWeight: 700, lineHeight: 1.05 }}>{x.t}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: STEEL }}>{x.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto space-y-5 text-base md:text-lg leading-relaxed" style={{ color: STEEL_MID }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section id="services" className="px-6 py-24 md:py-32" style={{ backgroundColor: ASPHALT_DEEP, color: WHITE }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className={mono.className + " text-[10px] uppercase tracking-widest font-bold mb-3"} style={{ color: HIVIS }}>02 / PRICING</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: WHITE, fontWeight: 800, lineHeight: 1, textTransform: "uppercase" }}>
              FLAT-RATE <span style={{ color: HIVIS }}>PRICING.</span>
            </h2>
            <p className="mt-4 text-base" style={{ color: PAPER }}>No surprises, no upsells, no shop hours waiting.</p>
          </div>
          <div>
            {content.services.map((s, i) => (
              <div key={i} className="flex items-baseline gap-6 py-7 flex-wrap" style={{ borderTop: `1px solid ${STEEL}`, borderBottom: i === content.services.length - 1 ? `1px solid ${STEEL}` : "none" }}>
                <div className={mono.className + " text-sm w-14"} style={{ color: HIVIS }}>SVC.{String(i + 1).padStart(2, "0")}</div>
                <div className="flex-1 flex items-baseline justify-between gap-6 flex-wrap">
                  <div className="max-w-2xl">
                    <h3 className={display.className} style={{ fontSize: "1.6rem", color: WHITE, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.005em" }}>{s.title}</h3>
                    <p className="mt-2 text-base leading-relaxed" style={{ color: PAPER }}>{s.description}</p>
                  </div>
                  {s.price && (
                    <div className={display.className + " px-4 py-2"} style={{ fontSize: "1.4rem", color: ASPHALT_DEEP, backgroundColor: HIVIS, fontWeight: 800, whiteSpace: "nowrap" }}>{s.price}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {content.gallery && (
        <section className="px-6 py-20" style={{ backgroundColor: PAPER }}>
          <div className="max-w-6xl mx-auto">
            <p className={mono.className + " text-[10px] uppercase tracking-widest font-bold mb-3"} style={{ color: HIVIS_DEEP }}>03 / ON THE JOB</p>
            <h2 className={display.className + " mb-10"} style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", color: ASPHALT, fontWeight: 800, textTransform: "uppercase" }}>
              IN THE FIELD
            </h2>
            <div className="grid md:grid-cols-3 gap-3">
              {content.gallery.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url("${src}")`, border: `2px solid ${ASPHALT}` }} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REVIEWS */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className={mono.className + " text-[10px] uppercase tracking-widest font-bold mb-3"} style={{ color: HIVIS_DEEP }}>04 / CUSTOMER FEEDBACK</p>
          <h2 className={display.className + " mb-12"} style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: ASPHALT, fontWeight: 800, textTransform: "uppercase" }}>
            FROM OUR <span style={{ color: ORANGE }}>CALL LOG.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {content.reviews.slice(0, 3).map((r, i) => (
              <div key={i} className="p-7" style={{ backgroundColor: WHITE, border: `2px solid ${PAPER}`, borderLeft: `4px solid ${HIVIS}` }}>
                <div className="flex gap-1 mb-4" style={{ color: HIVIS_DEEP, fontSize: "1.1rem" }}>
                  {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className="text-base leading-relaxed" style={{ color: ASPHALT }}>"{r.text}"</p>
                <p className={mono.className + " mt-5 text-xs uppercase tracking-widest font-bold"} style={{ color: HIVIS_DEEP }}>&gt; {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT / BOOK */}
      <section id="visit" className="px-6 py-24 md:py-32" style={{ backgroundColor: ASPHALT, color: WHITE }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className={mono.className + " text-[10px] uppercase tracking-widest font-bold mb-3"} style={{ color: HIVIS }}>05 / BOOK A TECH</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: WHITE, fontWeight: 800, lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.005em" }}>
              CALL THE <span style={{ color: HIVIS }}>DISPATCH.</span>
            </h2>
            <p className="mt-6 text-base" style={{ color: PAPER }}>{content.contact.address}</p>
            <a href={phoneTel} className={display.className + " block mt-3"} style={{ fontSize: "2.4rem", color: HIVIS, fontWeight: 800 }}>
              ☎ {content.contact.phone}
            </a>
            <p className={mono.className + " mt-2 text-xs uppercase tracking-widest"} style={{ color: MUTED }}>EMAIL: {content.contact.email}</p>
            <div className="mt-10">
              <p className={mono.className + " text-[10px] uppercase tracking-widest font-bold mb-4"} style={{ color: MUTED }}>DISPATCH HOURS</p>
              <table className="w-full">
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, time]) => (
                    <tr key={day} style={{ borderBottom: `1px solid ${STEEL}` }}>
                      <td className={display.className + " py-3 text-base uppercase tracking-wider"} style={{ color: WHITE, fontWeight: 700 }}>{day}</td>
                      <td className={mono.className + " py-3 text-sm text-right font-bold"} style={{ color: String(time).toLowerCase() === "closed" ? ORANGE : HIVIS }}>{String(time)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a href={phoneTel} className={display.className + " inline-block mt-10 px-9 py-4 text-base uppercase tracking-widest font-bold transition-transform hover:-translate-y-0.5"} style={{ backgroundColor: HIVIS, color: ASPHALT_DEEP }}>
              CALL NOW · 2-MIN QUOTE →
            </a>
          </div>
          <div className="h-[560px]" style={{ border: `3px solid ${HIVIS}` }}>
            <iframe title="AKP Brakes location" width="100%" height="100%" loading="lazy" style={{ border: 0 }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: ASPHALT_DEEP, color: WHITE, borderTop: `4px solid ${HIVIS}` }}>
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className={display.className} style={{ fontSize: "2rem", color: HIVIS, fontWeight: 900 }}>AKP</span>
            <span className={mono.className + " text-xs uppercase tracking-[0.3em]"} style={{ color: PAPER }}>BRAKES · MOBILE · ORANGE COUNTY</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {content.social && Object.entries(content.social).map(([k, v]) => (
              <a key={k} href={String(v)} target="_blank" rel="noreferrer" className={display.className + " px-3 py-1 text-xs uppercase tracking-widest font-bold transition-transform hover:-translate-y-0.5"} style={{ backgroundColor: HIVIS, color: ASPHALT_DEEP }}>{k}</a>
            ))}
          </div>
        </div>
        <div className={mono.className + " py-5 text-center text-[10px] uppercase tracking-[0.35em]"} style={{ borderTop: `1px solid ${STEEL}`, color: MUTED }}>
          © {new Date().getFullYear()} AKP BRAKES · MOBILE BRAKE SERVICE · ASE CERTIFIED
        </div>
      </footer>
    </main>
  );
}