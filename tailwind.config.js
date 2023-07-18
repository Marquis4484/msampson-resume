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
         keyframes: {
            glowing: {
               "0%": { backgroundPosition: "0 0" },
               "50%": { backgroundPosition: "400% 0" },
               "100%": { backgroundPosition: "0 0" },
            },
         },
         colors: {
            "th-primary": "var(--primary)",
            "th-primary-focus": "var(--primary-focus)",
            "th-secodary": "var(--secondary)",
            "th-accent": "var(--accent)",
         },
      },
   },

   theme: {
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
