/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea8dc",
        success: "#5ea88b",
        info: "#bce8e7",
      },
    },
    fontFamily: {
      "montserrat-bold": ["Montserrat-Bold"],
      "montserrat-medium": ["Montserrat-Medium"],
      "montserrat-regular": ["Montserrat-Regular"],
      "montserrat-semibold": ["Montserrat-SemiBold"],
    },
  },
  plugins: [],
};
