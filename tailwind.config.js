/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#DAE0E6",
          dark: "#030303",
        },
        reddit: {
          orange: "#FF4500",
          blue: "#0079D3",
          gray: {
            dark: "#1A1A1B",
            border: "#343536",
            button: "#272729",
            text: "#878A8C",
          },
        },
      },
    },
  },
  plugins: [],
};
