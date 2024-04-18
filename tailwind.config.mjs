/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography() {
        return {
          lg: {
            css: [
              {
                li: {
                  marginTop: "0",
                  marginBottom: "0",
                },
                cite: {
                  fontSize: "1.0rem",
                },
              },
            ],
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
