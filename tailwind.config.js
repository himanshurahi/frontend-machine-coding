/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        black: {
          "primary": "#00f2fe",
          "secondary": "#00ff87",
          "accent": "#ff00c1",
          "neutral": "#000000",
          "base-100": "#000000",
          "base-200": "#0a0a0a",
          "base-300": "#1a1a1a",
          "info": "#00ffff",
          "success": "#00ff00",
          "warning": "#ffff00",
          "error": "#ff0000",
        },
        coder: {
          "primary": "#61AFEF",
          "secondary": "#98C379",
          "accent": "#C678DD",
          "neutral": "#282C34",
          "base-100": "#1E222A",
          "base-200": "#282C34",
          "base-300": "#3E4451",
          "info": "#56B6C2",
          "success": "#98C379",
          "warning": "#E5C07B",
          "error": "#E06C75",
        }
      },
      "light",
      "dark",
      "synthwave"
    ],
    darkTheme: "black",
  },
}