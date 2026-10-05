import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Phone, MessageCircle, CalendarCheck, MapPin, Mail, Clock, Menu, X, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicPhoto from "@/assets/dental360-clinic-twilight.png";
import interior from "@/assets/dental360-treatment-room.png";
import smile from "@/assets/dental360-consult-room.png";
import sripuramPhoto from "@/assets/dental360-sripuram.png";
import interior1 from "@/assets/dental360-interior-1.png";
import interior2 from "@/assets/dental360-interior-2.png";
import interior3 from "@/assets/dental360-interior-3.png";
import interior4 from "@/assets/dental360-interior-4.png";
import { clinic, treatments, whatsappLink } from "@/lib/clinic";

export const nav = [
  ["Treatments", "/treatments"],
  ["About", "/about"],
  ["Doctors", "/doctors"],
  ["Locations", "/locations"],
  ["Contact", "/contact"],
] as const;

export function Logo({ invert = false }: { invert?: boolean }) {
  if (clinic.logo) return <img src={clinic.logo} alt="Dental 360" className="h-10 w-auto" />;
  return (
    <Link to="/" aria-label="Dental 360 home" className="flex flex-col leading-none">
      <span className="flex items-baseline gap-1.5">
        <span className="font-serif text-xl font-bold tracking-wide text-primary">DENTAL</span>
        <span className={`text-xl font-bold ${invert ? "text-ink-foreground" : "text-foreground"}`}>
          36<span className="relative">0<span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-primary" /></span>
        </span>
      </span>
      <span className={`mt-1 text-[0.6rem] tracking-[0.18em] uppercase ${invert ? "text-ink-foreground/60" : "text-muted-foreground"}`}>
        Multi-Speciality Group
      </span>
    </Link>
  );
}

const publicEmail = clinic.email.endsWith(".example") ? null : clinic.email;

function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className={`sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-[0_10px_30px_-18px_rgba(20,20,40,0.35)]" : ""}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 md:px-10">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map(([l, h]) => (
            <Link key={l} to={h} activeProps={{ className: "font-semibold text-foreground" }} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={clinic.phoneHref} className="hidden items-center gap-2 text-sm font-semibold xl:inline-flex">
            <Phone className="h-4 w-4 text-primary" /> {clinic.phone}
          </a>
          <Link to="/contact" className="hidden bg-ink px-5 py-3 text-xs font-semibold tracking-[0.14em] text-ink-foreground uppercase transition-colors hover:bg-primary lg:inline-flex">
            Book Appointment
          </Link>
          <Button variant="ghost" size="icon" className="h-11 w-11 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-background px-5 py-4 lg:hidden">
          {nav.map(([l, h]) => (
            <Link key={l} to={h} activeProps={{ className: "font-semibold text-foreground" }} onClick={() => setOpen(false)} className="block border-b border-border py-4 text-lg">{l}</Link>
          ))}
          <a href={clinic.phoneHref} className="mt-4 flex items-center gap-3 py-3 text-base font-semibold"><Phone className="h-4 w-4 text-primary" /> Call {clinic.phone}</a>
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex w-full items-center justify-center gap-2 bg-primary px-5 py-4 text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase">
            Book appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-12 pb-16 md:px-10 lg:grid-cols-12 lg:gap-16 lg:pt-20 lg:pb-24">
      <div className="reveal flex flex-col justify-center lg:col-span-6">
        <p className="eyebrow">Dental 360 • Multi-Speciality Group</p>
        <h1 className="display mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl xl:text-7xl">
          Exceptional dental care.<br /><span className="text-primary">Closer to you.</span>
        </h1>
        <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
          Affordable, modern dental care for the whole family in Vellore — gentle teeth treatment at our Sathuvachari and Sripuram clinics.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="group inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-colors hover:bg-ink">
            Book an Appointment <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 border border-foreground/40 px-7 py-4 text-xs font-semibold tracking-[0.14em] uppercase transition-colors hover:border-foreground">
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </div>
      <figure className="reveal relative mb-6 lg:col-span-6 lg:mb-0" style={{ animationDelay: "0.15s" }}>
        <div className="overflow-hidden rounded-[22px] border border-border shadow-[0_30px_60px_-30px_rgba(20,20,40,0.35)]">
          <img src={clinicPhoto} alt="Dental 360 clinic entrance and signage in Vellore at dusk" width={1234} height={1092} fetchPriority="high" className="aspect-[16/10] w-full object-cover lg:aspect-[4/3]" style={{ objectPosition: "50% 44%" }} />
        </div>
        <figcaption className="absolute bottom-4 left-4 rounded-full border border-border bg-background px-5 py-2.5 text-[0.65rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase shadow-sm lg:-bottom-5 lg:left-6">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle" />Our clinic · Sathuvachari
        </figcaption>
      </figure>
    </section>
  );
}


export function TrustStrip() {
  const items = ["Modern Dental Care", "Multi-Speciality Treatment", "Patient-Centred Care", "Vellore"];
  return (
    <section aria-label="Highlights" className="border-y border-border">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {items.map((t, i) => (
          <li key={t} className={`flex items-center gap-3 px-5 py-7 text-sm font-medium md:px-10 ${i ? "md:border-l border-border" : ""} ${i % 2 ? "border-l md:border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function About({ image = interior, alt = "Inside Dental 360", asPage = false }: { image?: string; alt?: string; asPage?: boolean }) {
  const Heading = asPage ? "h1" : "h2";
  return (
    <section id="about" className="reveal-in mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:px-10 lg:grid-cols-2 lg:gap-20 lg:py-32">
      <img src={image} alt={alt} loading="lazy" className="aspect-[5/6] w-full object-cover" />
      <div>
        <p className="eyebrow">About Dental 360</p>
        <Heading className="display mt-6 text-4xl md:text-5xl">Modern dentistry, with a human touch.</Heading>
        <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
          Dental 360 is a multi-speciality dental group in Vellore, bringing a full range of treatments together under one roof. From routine check-ups to advanced restorative work, every visit is planned around clear explanations, comfort and care that fits you.
        </p>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          We believe good dentistry starts with listening — so you always understand your options before any treatment begins.
        </p>
        <Link to="/treatments" className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-semibold">
          Explore treatments <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export function Treatments({ asPage = false }: { asPage?: boolean } = {}) {
  const Heading = asPage ? "h1" : "h2";
  return (
    <section id="treatments" className={`reveal-in bg-secondary ${asPage ? "pt-14 pb-20 lg:pt-20 lg:pb-28" : "py-24 lg:py-32"}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Treatments</p>
            <Heading className={`display mt-5 max-w-2xl ${asPage ? "text-4xl md:text-6xl" : "text-4xl md:text-5xl"}`}>Every speciality, one trusted clinic.</Heading>
            {asPage && <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Comprehensive dental care under one roof — from routine check-ups to implants and orthodontics.</p>}
          </div>
          <Link to="/contact" className="shrink-0 pb-1 text-sm font-semibold underline-offset-4 hover:underline">Not sure what you need? Ask us →</Link>
        </div>
        <ol className="mt-12 grid border-t border-l border-border sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {treatments.map(([name, desc], i) => (
            <li key={name} className="border-r border-b border-border bg-secondary">
              <Link to="/contact" search={{ treatment: name }} className="group relative flex h-full flex-col p-6 transition-colors duration-300 hover:bg-background lg:min-h-60 lg:p-7">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold text-muted-foreground tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-8 text-lg leading-snug font-semibold tracking-tight lg:mt-auto lg:pt-10">{name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Featured({ image = smile, alt = "Dental 360 operatory with modern dental chair and consultation desk", focus = "50% 30%" }: { image?: string; alt?: string; focus?: string }) {
  return (
    <section className="relative">
      <img src={image} alt={alt} loading="lazy" className="h-[70vh] min-h-[440px] w-full object-cover" style={{ objectPosition: focus }} />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/30 to-transparent" />
      <div className="absolute inset-0 mx-auto flex max-w-7xl items-end px-5 pb-16 md:px-10 md:pb-24">
        <div className="max-w-xl text-ink-foreground">
          <p className="eyebrow">Dental 360</p>
          <h2 className="display mt-5 text-4xl md:text-6xl">Complete care for every smile.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase">
            Plan your visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  const items = [
    ["Personalized Care", "Treatment plans shaped around your needs, comfort and goals."],
    ["Modern Approach", "Contemporary techniques and equipment for precise, efficient care."],
    ["Comfortable Experience", "A calm environment and gentle care from your first visit."],
    ["Comprehensive Treatment", "Multiple specialities under one roof — no running between clinics."],
  ];
  return (
    <section className="reveal-in mx-auto max-w-7xl px-5 py-24 md:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Why Dental 360</p>
          <h2 className="display mt-6 text-4xl md:text-5xl">Care you can feel at ease with.</h2>
        </div>
        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-8">
          {items.map(([t, d], i) => (
            <div key={t} className="border-t border-foreground pt-6">
              <span className="text-xs font-semibold text-primary">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Doctors() {
  return (
    <section id="doctors" className="reveal-in border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <p className="eyebrow">Our Doctors</p>
        <h1 className="display mt-6 text-4xl md:text-5xl">The team behind your care.</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Profiles and portraits are on the way. Call or message the clinic and we will match you with the dentist for your visit — you will meet them in person before any treatment starts.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={clinic.phoneHref} className="inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase">
            <Phone className="h-4 w-4" /> Call {clinic.phone}
          </a>
          <a href={whatsappLink("Hello Dental 360, I'd like to know which doctor to see.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 border border-foreground/40 px-7 py-4 text-xs font-semibold tracking-[0.14em] uppercase">
            <MessageCircle className="h-4 w-4" /> WhatsApp the clinic
          </a>
        </div>
        <a href={clinic.socialLinks.instagram} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
          <Instagram className="h-4 w-4 text-primary" /> See the clinic on Instagram <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

const locationPhotos: Record<string, { url: string; alt: string; focus: string }> = {
  "Dental 360 — Sathuvachari": { url: clinicPhoto, alt: "Dental 360 Sathuvachari clinic entrance and signage at dusk", focus: "50% 44%" },
  "Dental 360 — Sripuram": { url: sripuramPhoto, alt: "Dental 360 Sripuram clinic storefront and signage", focus: "50% 30%" },
};

const branchGalleries: Record<string, { url: string; alt: string }[]> = {
  "Dental 360 — Sathuvachari": [
    { url: interior1, alt: "Dental 360 Sathuvachari operatory with a modern dental chair and large monitor" },
    { url: interior2, alt: "Dental 360 Sathuvachari consultation room with a dental chair, desk and screen" },
    { url: interior3, alt: "Dental 360 Sathuvachari treatment room with operatory light, monitor and waiting chair" },
    { url: interior4, alt: "Dental 360 Sathuvachari operatory with mint-green cabinets and sink" },
  ],
};

export function Locations() {
  return (
    <section id="locations" className="reveal-in bg-ink py-24 text-ink-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="eyebrow">Locations</p>
        <h1 className="display mt-6 text-4xl md:text-5xl">Find us in Vellore.</h1>
        <div className="mt-16 grid gap-px bg-ink-foreground/15 md:grid-cols-2">
          {clinic.locations.map((l) => {
            const photo = locationPhotos[l.name];
            const gallery = branchGalleries[l.name];
            return (
            <article key={l.name} className="bg-ink p-8 md:p-10">
              {photo && (
                <img src={photo.url} alt={photo.alt} loading="lazy" className="mb-8 aspect-[16/10] w-full rounded-2xl object-cover" style={{ objectPosition: photo.focus }} />
              )}
              <h3 className="text-xl font-semibold">{l.name}</h3>
              <ul className="mt-8 space-y-4 text-sm text-ink-foreground/75">
                <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={mapsUrl(l.address)} target="_blank" rel="noreferrer" className="hover:text-ink-foreground">{l.address}</a></li>
                <li><a href={clinic.phoneHref} className="inline-flex min-h-11 items-center gap-3 hover:text-ink-foreground"><Phone className="h-4 w-4 shrink-0 text-primary" />{l.phone}</a></li>
                <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{l.hours}</li>
              </ul>
              {gallery && (
                <>
                  <p className="mt-8 text-xs tracking-[0.18em] text-ink-foreground/50 uppercase">Inside the clinic</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {gallery.map((g) => (
                      <img key={g.url} src={g.url} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
                    ))}
                  </div>
                </>
              )}
              <a href={mapsUrl(l.address)} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 border-b border-ink-foreground/40 pb-1 text-sm font-semibold hover:border-primary">
                Get directions <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "I am from Sikkim, and this is one of the best dental services I have ever received. The dentist explained every step, and her calm, gentle way of working removed all my fear — the treatment was smooth and almost painless.",
    name: "Deepa Chettri",
    place: "Sikkim",
  },
  {
    quote:
      "I came to India from Bangladesh for medical purposes and decided to finally solve my teeth issues at Dental 360. The staff, the equipment and the doctor were even more than I imagined — she was so dedicated. In treatment, the aim should be to serve, not only money.",
    name: "A. K. Azad",
    place: "Bangladesh",
  },
  {
    quote:
      "I'm Srikanta, coming from Kolkata. Very nice work — I had too many dental problems, and now I am feeling very good. The sisters and the doctor behave so nicely, and the price is also reasonable. Thanks, Dental 360.",
    name: "Srikanta Hatui",
    place: "Kolkata",
  },
];

export function Reviews() {
  const slides = testimonials;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = slides[i] ?? slides[0]!;
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setI((n) => (n + 1) % slides.length), 9000);
    return () => clearTimeout(id);
  }, [i, paused, slides.length]);
  const step = (dir: number) => setI((n) => (n + dir + slides.length) % slides.length);
  return (
    <section className="reveal-in mx-auto max-w-4xl px-5 py-24 text-center md:px-10 lg:py-32" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); }}>
      <p className="eyebrow">Patient Stories</p>
      <blockquote key={i} className="reveal mt-10 font-serif text-xl font-normal leading-snug md:text-3xl">
        “{t.quote}”
      </blockquote>
      <div className="mt-10">
        <p className="text-lg font-semibold tracking-tight md:text-2xl">{t.name}</p>
        <p className="mt-2 flex items-center justify-center gap-2 text-base text-muted-foreground md:text-lg">
          <MapPin className="h-4 w-4 text-primary md:h-5 md:w-5" /> {t.place}
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-1">
        <button type="button" aria-label="Previous story" onClick={() => step(-1)} className="p-2"><ChevronLeft className="h-5 w-5" /></button>
        {slides.map((s, n) => (
          <button key={s.name} aria-label={`Show review from ${s.name}`} aria-current={n === i} onClick={() => setI(n)} className="p-2">
            <span className={`block h-1.5 rounded-full transition-all ${n === i ? "w-8 bg-primary" : "w-1.5 bg-border"}`} />
          </button>
        ))}
        <button type="button" aria-label="Next story" onClick={() => step(1)} className="p-2"><ChevronRight className="h-5 w-5" /></button>
      </div>
    </section>
  );
}

const field = "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base outline-none transition-colors focus-visible:border-primary";
const labelCls = "flex flex-col gap-1 text-xs font-semibold tracking-wider uppercase";

function todayISO() {
  const d = new Date();
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

export function Appointment({ initialTreatment }: { initialTreatment?: string } = {}) {
  const known = treatments.some(([name]) => name === initialTreatment);
  const [sent, setSent] = useState(false);
  const [waHref, setWaHref] = useState<string | null>(null);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Appointment request\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nClinic: ${f.get("clinic")}\nDate: ${f.get("date") || "Flexible"}\nTime: ${f.get("time")}\nTreatment: ${f.get("treatment")}\nMessage: ${f.get("message") || "—"}`;
    const href = whatsappLink(msg);
    const opened = window.open(href, "_blank", "noopener,noreferrer");
    setWaHref(href);
    setSent(true);
    if (!opened) return;
  };
  return (
    <section id="appointment" className="reveal-in scroll-mt-24 bg-secondary py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Appointments</p>
          <h1 className="display mt-6 text-4xl md:text-5xl">Ready to take the next step?</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Share a few details. We’ll open WhatsApp with your request filled in — send that message and the clinic will confirm your visit.</p>
          <div className="mt-10 space-y-3 text-sm">
            <a href={clinic.phoneHref} className="flex min-h-11 items-center gap-3"><Phone className="h-4 w-4 text-primary" /> {clinic.phone}</a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-3"><MessageCircle className="h-4 w-4 text-primary" /> Chat on WhatsApp</a>
          </div>
        </div>
        <form onSubmit={submit} className="grid gap-x-8 gap-y-6 bg-background p-7 sm:grid-cols-2 md:p-12 lg:col-span-7">
          <label className={labelCls}>Name<input required name="name" autoComplete="name" className={field} /></label>
          <label className={labelCls}>Phone<input required name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} /></label>
          <label className={labelCls}>Clinic
            <select name="clinic" className={field}>{clinic.locations.map((l) => <option key={l.name}>{l.name}</option>)}</select>
          </label>
          <label className={labelCls}>Treatment
            <select name="treatment" defaultValue={known ? initialTreatment : "Not sure / Consultation"} className={field}><option>Not sure / Consultation</option>{treatments.map(([t]) => <option key={t}>{t}</option>)}</select>
          </label>
          <label className={labelCls}>Preferred Date<input name="date" type="date" min={todayISO()} className={field} /></label>
          <label className={labelCls}>Preferred Time
            <select name="time" className={field}><option>Morning</option><option>Afternoon</option><option>Evening</option></select>
          </label>
          <label className={`${labelCls} sm:col-span-2`}>Message<textarea name="message" rows={3} className={field} /></label>
          <div className="sm:col-span-2">
            <button type="submit" className="inline-flex w-full items-center justify-center gap-3 bg-primary px-7 py-4 text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-colors hover:bg-ink sm:w-auto">
              Continue on WhatsApp <ArrowRight className="h-4 w-4" />
            </button>
            {sent && waHref && (
              <p role="status" className="mt-4 text-sm text-muted-foreground">
                If WhatsApp didn’t open, <a href={waHref} target="_blank" rel="noreferrer" className="font-semibold text-foreground underline underline-offset-4">send the request here</a>.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export function Contact() {
  const items = [
    [Phone, "Phone", clinic.phone, clinic.phoneHref],
    [MessageCircle, "WhatsApp", "Message us", whatsappLink()],
    ...(publicEmail ? [[Mail, "Email", publicEmail, `mailto:${publicEmail}`] as const] : []),
    [MapPin, "Google Maps", "Open directions", clinic.googleMaps],
    [Instagram, "Instagram", "@dental_360_vellore", clinic.socialLinks.instagram],
  ] as const;
  return (
    <section id="contact" className="reveal-in mx-auto max-w-7xl px-5 py-24 md:px-10">
      <p className="eyebrow">Contact</p>
      <div className="mt-10 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([Icon, label, value, href]) => (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group border-b border-border py-8 sm:pr-6">
            <Icon className="h-5 w-5 text-primary" />
            <p className="mt-6 text-xs tracking-[0.18em] text-muted-foreground uppercase">{label}</p>
            <p className="mt-2 font-semibold group-hover:text-primary">{value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-28 text-ink-foreground lg:pb-10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-4">
        <div>
          <Logo invert />
          <p className="mt-6 text-sm text-ink-foreground/60">Multi-speciality dental care in {clinic.city}, {clinic.region}.</p>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-ink-foreground/50 uppercase">Navigate</p>
          <ul className="mt-5 space-y-2 text-sm">{nav.map(([l, h]) => <li key={l}><Link to={h} className="hover:text-primary">{l}</Link></li>)}</ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-ink-foreground/50 uppercase">Treatments</p>
          <ul className="mt-5 space-y-2 text-sm">{treatments.slice(0, 6).map(([t]) => <li key={t}><Link to="/contact" search={{ treatment: t }} className="hover:text-primary">{t}</Link></li>)}</ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-ink-foreground/50 uppercase">Contact</p>
          <ul className="mt-5 space-y-2 text-sm text-ink-foreground/80">
            <li><a href={clinic.phoneHref} className="hover:text-primary">{clinic.phone}</a></li>
            {publicEmail && <li><a href={`mailto:${publicEmail}`} className="hover:text-primary">{publicEmail}</a></li>}
            <li>{clinic.openingHours}</li>
            <li><a href={clinic.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-3 border-t border-ink-foreground/15 px-5 pt-8 text-xs text-ink-foreground/50 md:flex-row md:px-10">
        <p>© {new Date().getFullYear()} Dental 360 Multi-Speciality Group. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function MobileBar() {
  const cls = "flex flex-1 flex-col items-center gap-1 py-3 text-[0.65rem] font-semibold tracking-[0.14em] uppercase";
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-50 flex border-t border-border bg-background pb-[env(safe-area-inset-bottom)] lg:hidden">
      <a href={clinic.phoneHref} className={cls}><Phone className="h-4 w-4" />Call</a>
      <a href={whatsappLink()} target="_blank" rel="noreferrer" className={`${cls} border-x border-border`}><MessageCircle className="h-4 w-4" />WhatsApp</a>
      <Link to="/contact" className={`${cls} bg-primary text-primary-foreground`}><CalendarCheck className="h-4 w-4" />Book</Link>
    </nav>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-in");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-background focus:px-4 focus:py-2">Skip to content</a>
      <Header />
      <main id="content">{children}</main>
      <Footer />
      <MobileBar />
    </>
  );
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="reveal mx-auto max-w-7xl px-5 pt-16 pb-4 md:px-10 lg:pt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display mt-6 max-w-3xl text-5xl md:text-6xl">{title}</h1>
      {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{text}</p>}
    </section>
  );
}
