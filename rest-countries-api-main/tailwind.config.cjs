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
        900: "rgb(0 0 0 / 0.05)",
      },
      cyan: "#67e8f9",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fade: "fade 300ms ease-in",
      },
      backgroundImage: {
        "light-search": "url('$lib/assets/search-light.svg')",
        "dark-search": "url('$lib/assets/search-dark.svg')",
      },
      gridTemplateColumns: {
        "auto-fit-320": "repeat(auto-fit, minmax(320px, 1fr))",
        "auto-fit-120": "repeat(auto-fit, minmax(120px, 200px))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
