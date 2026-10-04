// Central clinic config — edit here. Values marked [PLACEHOLDER] must be verified before launch.
const sharedPhone = "+91 99444 90580";
export const clinic = {
  name: "Dental 360",
  tagline: "Multi-Speciality Group",
  city: "Vellore",
  region: "Tamil Nadu",
  logo: null as string | null, // set to official logo URL when supplied
  phone: sharedPhone,
  phoneHref: "tel:+919944490580",
  whatsapp: "919944490580", // digits only
  email: "hello@dental360.example", // [PLACEHOLDER]
  googleMaps: "https://maps.google.com/?q=Dental+360+Vellore",
  socialLinks: { instagram: "#", facebook: "#" },
  openingHours: "Mon–Sat · 10 am–1:30 pm & 5–8:30 pm · Sun closed",
  locations: [
    { name: "Dental 360 — Sathuvachari", address: "C 10, Arcot Rd, Phase 2, Sathuvachari, Vellore, Tamil Nadu 632009", phone: sharedPhone, hours: "Mon–Sat · 10 am–1:30 pm & 5–8:30 pm · Sun closed" },
    { name: "Dental 360 — Sripuram", address: "48/1, Sukkiya, Muniswamy Vathiyar St, Sripuram, Vellore, Tamil Nadu 632004", phone: sharedPhone, hours: "Mon–Sat · 10 am–1:30 pm & 5–8:30 pm · Sun closed" },
  ],
};

export const whatsappLink = (msg = "Hello Dental 360, I'd like to book an appointment.") =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(msg)}`;

export const treatments = [
  ["General Dentistry", "Check-ups, cleanings and fillings to keep your teeth healthy."],
  ["Root Canal Treatment", "Careful treatment to save infected or damaged teeth."],
  ["Dental Implants", "Fixed, natural-looking replacements for missing teeth."],
  ["Braces & Orthodontics", "Aligning teeth and bites with braces or aligners."],
  ["Crowns & Bridges", "Restoring strength and form to damaged or missing teeth."],
  ["Cosmetic Dentistry", "Refining the shape, shade and balance of your smile."],
  ["Pediatric Dentistry", "Gentle, patient care for children of every age."],
  ["Teeth Whitening", "Professional whitening for a brighter, even shade."],
  ["Wisdom Tooth Treatment", "Assessment and removal of problematic wisdom teeth."],
  ["Dentures", "Comfortable full and partial dentures, fitted with care."],
  ["Oral Surgeries", "Surgical care for teeth, gums and jaw, done safely in-clinic."],
  ["Gum Therapy", "Treating bleeding, swollen or receding gums to protect your teeth."],
  ["Tooth Colour Filling", "Natural-looking fillings that blend seamlessly with your teeth."],
  ["Dental X-Rays", "On-site digital X-rays for quick, accurate diagnosis."],
] as const;
