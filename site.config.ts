import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "KarmaaKutz",
  tagline: "Student barber for house-call cuts, including tapers and line ups.",
  category: "Barber",
  schemaType: "HairSalon",
  area: "Scarborough and Oshawa, ON",
  siteUrl: "https://karmaa-kutz-ca.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#c41e3a" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "House-call barber",
    headline: "Tapers, fades and line ups, at your place",
    subhead: "KarmaaKutz is a student barber offering house-call cuts in Scarborough and Oshawa, including high tapers, taper fades and line ups. House calls are $15 any day of the week. Send a message to book.",
    images: [
      { src: "/images/extra-6.jpg", alt: "A finished fade and beard by KarmaaKutz", width: 2066, height: 2754 },
      { src: "/images/extra-7.jpg", alt: "A taper fade with locs by KarmaaKutz", width: 1702, height: 2266 },
      { src: "/images/post-3.jpg", alt: "A high taper haircut by KarmaaKutz", width: 1080, height: 1440 },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/karmaakutz" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Student barber offering house calls",
    "High tapers, taper fades and line ups",
    "Serving Scarborough and Oshawa",
    "House calls are $15 any day of the week",
  ],

  about: {
    title: "Welcome to KarmaaKutz",
    body: [
      "KarmaaKutz is a student barber offering house-call cuts in Scarborough and Oshawa. There is no shop; appointments come to you. Cuts include high tapers, taper fades and line ups.",
      "House calls are $15 any day of the week. Free haircuts are also offered through November. Send a message on Instagram to book.",
    ],
    image: { src: "/images/extra-6.jpg", alt: "A finished fade and beard by KarmaaKutz", width: 2066, height: 2754 },
  },

  menu: {
    label: "Services",
    title: "Barber services",
    variant: "list",
    showPrices: false,
    priceNote: "House calls are $15 any day of the week. Free haircuts are also offered through November. Send a message to book.",
    groups: [
      {
        title: "Cuts",
        items: [
          { name: "High taper" },
          { name: "Taper fade" },
          { name: "Line ups" },
        ],
      },
      {
        title: "House calls",
        items: [
          { name: "House-call haircuts", description: "$15 any day of the week, in Scarborough and Oshawa. Free haircuts are also offered through November." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cuts",
    items: [
      { src: "/images/extra-6.jpg", width: 2066, height: 2754, alt: "A finished fade and beard by KarmaaKutz", caption: "A fresh fade" },
      { src: "/images/extra-7.jpg", width: 1702, height: 2266, alt: "A taper fade with locs by KarmaaKutz", caption: "Taper and locs" },
      { src: "/images/post-3.jpg", width: 1080, height: 1440, alt: "A high taper haircut by KarmaaKutz", caption: "A high taper", href: "https://www.instagram.com/p/DfkQ5FNES4T/" },
      { src: "/images/extra-1.jpg", width: 2066, height: 2754, alt: "The back of a taper fade by KarmaaKutz", caption: "A clean finish" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "A close fade at the nape by KarmaaKutz", caption: "In the details", href: "https://www.instagram.com/p/DfFJQv0kWeF/" },
      { src: "/images/post-4.jpg", width: 720, height: 960, alt: "A finished haircut by KarmaaKutz", caption: "After a cut", href: "https://www.instagram.com/p/DfYz-6ikebC/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1350, alt: "A high taper with styled buns by KarmaaKutz", caption: "A high taper finish", href: "https://www.instagram.com/p/Cwy6TxXsZfX/" },
      { src: "/images/extra-5.jpg", width: 2066, height: 2754, alt: "A haircut in progress by KarmaaKutz", caption: "In the chair" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "karmaakutz",
    embeds: ["https://www.instagram.com/p/DfkQ5FNES4T/", "https://www.instagram.com/p/DfYz-6ikebC/", "https://www.instagram.com/p/DfFJQv0kWeF/"],
  },

  order: {
    label: "How to book",
    title: "Book a house call in a DM",
    intro: "Send a message on Instagram to book a house-call cut in Scarborough or Oshawa. House calls are $15 any day of the week. Free haircuts are also offered through November.",
    dmMessage: "Hi KarmaaKutz! I would like to book a house call.\nArea (Scarborough or Oshawa):\nPreferred day:\nCut:",
    headerCtaLabel: "DM to book",
    links: [
      { label: "DM to book", href: "https://ig.me/m/karmaakutz" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a message on Instagram to book a house-call cut in Scarborough or Oshawa." },
    { q: "Do you have a shop?", a: "No. KarmaaKutz is a student barber offering house calls only, in Scarborough and Oshawa." },
    { q: "What do house calls cost?", a: "House calls are $15 any day of the week. Free haircuts are also offered through November." },
    { q: "What cuts do you offer?", a: "Cuts include high tapers, taper fades and line ups." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Scarborough and Oshawa, Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/karmaakutz/" }],
  },

  seo: {
    title: "KarmaaKutz | House-call barber in Scarborough and Oshawa",
    description: "Student barber for house-call cuts in Scarborough and Oshawa, including tapers, fades and line ups. House calls are $15. Send an Instagram DM to book.",
    keywords: ["house call barber Scarborough", "barber Oshawa", "KarmaaKutz"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
