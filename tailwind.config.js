/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
   darkMode: false,
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,jsx,ts,tsx}",
   ],

   theme: {
      extend: {
         colors: {
            "th-primary": "var(--primary)",
            "th-primary-focus": "var(--primary-focus)",
            "th-secondary": "var(--secondary)",
            "th-accent": "var(--accent)",
            "th-text-ms": "var(--text-ms)",
            "th-background": "var(--background)",
            "th-nav-link": "var(--nav-link)",
            "th-desc": "var(--desc)",
            "th-content": "var(--content)",
            "th-button": "var(--button)",
            "th-sidebar": "var(--sidebar)",
            "th-button-highlight": "var(--button-highlight)",
         },
      },
      screens: {
         phone: "280px",
         // => @media (min-width: 400px) { ... }

         tablet: "640px",
         // => @media (min-width: 640px) { ... }

         laptop: "1024px",
         // => @media (min-width: 1024px) { ... }

         desktop: "1280px",
         // => @media (min-width: 1280px) { ... }
      },
   },

   plugins: [],
};
