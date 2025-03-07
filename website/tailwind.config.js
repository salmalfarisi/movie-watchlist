/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./components/**/*.vue",
    "./components/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'green-vue': {
          "100": "#0e2017",
          "200": "#1b402e",
          "300": "#296045",
          "400": "#2e774b",
          "500": "#3b9760",
          "600": "#47b774",
          "700": "#42b883",
          "800": "#00dc82",
          "900": "#42a58d",
          "1000": "#429a8f",
        },
        'blue-vue': {
          "100": "#ffffff",
          "200": "#c5dcf3",
          "300": "#8cbae8",
          "400": "#5298dd",
          "500": "#1976d2",
          "600": "#1976d2",
          "700": "#1e6ab5",
          "800": "#245f98",
          "900": "#29547b",
          "1000": "#2f495e"
        }
    },
    },
  },
  plugins: [],
}

