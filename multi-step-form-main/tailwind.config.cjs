/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      // Primary colours
      "marine-blue": "hsl(213, 96%, 18%)",
      "purplish-blue": "hsl(243, 100%, 62%)",
      "pastel-blue": "hsl(228, 100%, 84%)",
      "light-blue": "hsl(206, 94%, 87%)",
      "strawberry-red": "hsl(354, 84%, 57%)",
      // Neutral colours
      "cool-gray": "hsl(231, 11%, 63%)",
      "light-gray": "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      backgroundImage: {
        "sidebar-mobile": "url('/bg-sidebar-mobile.svg')",
        "sidebar-desktop": "url('/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
