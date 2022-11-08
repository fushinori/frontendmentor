/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      blue: {
        100: "hsl(229, 64%, 46%)",
        400: "hsl(230, 89%, 62%)",
        500: "hsl(230, 89%, 65%)",
      },
      red: {
        400: "hsl(349, 70%, 56%)",
        500: "hsl(349, 71%, 52%)",
      },
      yellow: {
        400: "hsl(39, 89%, 49%)",
        500: "hsl(40, 84%, 53%)",
      },
      indigo: {
        100: "hsl(214, 47%, 23%)",
        400: "hsl(229, 25%, 31%)",
        700: "hsl(237, 49%, 15%)",
      },
      slate: "hsl(217, 16%, 45%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
