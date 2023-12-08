/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  // darkMode: "media",
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
