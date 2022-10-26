/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        sm: ".9375rem",
      },
      colors: {
        "soft-orange": "hsl(35, 77%, 62%)",
        "soft-red": "hsl(5, 85%, 63%)",
        "off-white": "hsl(36, 100%, 99%)",
        "grayish-blue": {
          400: "hsl(233, 8%, 79%)",
          700: "hsl(236, 13%, 42%)",
        },
        "dark-blue": "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
