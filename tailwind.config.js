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
        primary: "#3d81c5",
        success: "#c1dd30 ",
        info: "#bce8e7",
        letters: "#4a5568",
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
