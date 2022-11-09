/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      blue: {
        100: "hsl(229, 64%, 46%)",
        400: "hsl(230, 89%, 62%)",
        500: "hsl(230, 89%, 65%)",
        900: "hsl(230, 66%, 46%)",
      },
      red: {
        400: "hsl(349, 70%, 56%)",
        500: "hsl(349, 71%, 52%)",
        900: "hsl(347, 76%, 35%)",
      },
      yellow: {
        400: "hsl(39, 89%, 49%)",
        500: "hsl(40, 84%, 53%)",
        900: "hsl(29,77%, 43%)",
      },
      indigo: {
        100: "hsl(214, 47%, 23%)",
        400: "hsl(229, 25%, 31%)",
        700: "hsl(237, 49%, 15%)",
      },
      slate: {
        100: "hsl(217, 16%, 45%)",
        400: "hsl(227, 25%, 78%)",
      },
      white: {
        100: "hsl(0, 0%, 98%)",
        300: "hsl(0, 0%, 85%)",
        500: "hsl(215, 100%, 94%)",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "inner-top": "inset 0 3px var(--tw-shadow-color)",
        "inner-bottom": "inset 0 -4px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};
