/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      // Primary
      purple: "hsl(259, 100%, 65%)",
      red: "hsl(0, 100%, 67%)",
      // Neutral
      white: {
        100: "hsl(0, 0%, 100%)",
        400: "hsl(0, 0%, 94%)",
      },
      gray: {
        100: "hsl(0, 0%, 86%)",
        400: "hsl(0, 1%, 44%)",
      },
      black: "hsl(0, 0%, 8%)",
    },
    extend: {},
  },
  plugins: [],
};
