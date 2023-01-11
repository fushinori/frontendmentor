/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "dark-blue": {
        100: "hsl(200, 15%, 8%)",
        500: "hsl(209, 23%, 22%)",
        700: "hsl(207, 26%, 17%)",
      },
      gray: {
        100: "hsl(0, 0%, 98%)",
        700: "hsl(0, 0%, 52%)",
      },
      white: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
};
