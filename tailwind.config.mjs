/** @type {import('tailwindcss').Config} */

const disabledCss = {
  // "code::before": false,
  // "code::after": false,
  "blockquote p:first-of-type::before": false,
  "blockquote p:last-of-type::after": false,
  // pre: false,
  // code: false,
  // "pre code": false,
};

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography() {
        return {
          DEFAULT: {
            css: [disabledCss],
          },
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
                hr: {
                  marginTop: "0",
                  marginBottom: "1.5rem",
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
