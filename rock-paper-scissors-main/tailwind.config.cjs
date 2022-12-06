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
      slate: {
        100: "hsl(217, 16%, 45%)",
        400: "hsl(227, 25%, 78%)",
      },
      white: {
        100: "hsl(0, 0%, 98%)",
        300: "hsl(0, 0%, 85%)",
        500: "hsl(215, 100%, 94%)",
      },
      black: "hsl(0, 0%, 0%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "inner-top": "inset 0 5px rgb(0 0 0 / 0.1)",
        "outer-disk": "inset 0 -5px rgb(0 0 0 / 0.2), 0 4px rgb(0 0 0 / 0.2)",
        "inner-top-md": "inset 0 8px rgb(0 0 0 / 0.1)",
        "outer-disk-md":
          "inset 0 -8px rgb(0 0 0 / 0.3), 0 4px rgb(0 0 0 / 0.2)",
        "inner-top-lg": "inset 0 12px rgb(0 0 0 / 0.1)",
        "outer-disk-lg":
          "inset 0 -10px rgb(0 0 0 / 0.2), 0 4px rgb(0 0 0 / 0.2)",
      },
    },
  },
  plugins: [],
};
