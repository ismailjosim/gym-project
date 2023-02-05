/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui: {
      themes: [
        {
          default: {

            "primary": "#6765F0",

            "secondary": "#264373",

            "accent": "#9190E9",

            "neutral": "#262524",

            "base-100": "#ffffff",

            "info": "#DD69C7",

            "success": "#FFC0F3",

            "warning": "#4BACE1",

            "error": "#D8F1FF",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}
