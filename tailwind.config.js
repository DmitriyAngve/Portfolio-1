/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "animation": {
        "text": "text 4s linear infinite",
      },
      "keyframes": {
        "text": {
          "0%, 100%": {
            "background-size": "200% 100%",
            "background-position": "left",
          },
          "50%": {
            "background-size": "200% 100%",
            "background-position": "right",
          },
        },
      },
      boxShadow: {
        "right": "10px 0 25px -10px rgba(231, 148, 14, 0.43)",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
