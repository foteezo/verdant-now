import { defineConfig } from '@prosophia/lab-classic';

export default defineConfig({
  site: {
    name: "Verdant",
    tagline: "Welcome to our research group",
  },
  theme: {
    primaryColor: "#1e3a8a",
    accentColor: "#d4af37",
    fonts: {
      heading: "Playfair Display",
      body: "Inter",
    },
  },
  features: {
    publications: true,
    team: true,
    news: true,
    gallery: true,
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Team", href: "/team" },
    { label: "Publications", href: "/publications" },
    { label: "Contact", href: "/contact" },
  ],
});
