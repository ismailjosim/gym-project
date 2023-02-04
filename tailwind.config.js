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

            "primary": "#fc2420",

            "secondary": "#1ae04f",

            "accent": "#dbef83",

            "neutral": "#23252F",

            "base-100": "#2F3237",

            "info": "#9AB4DF",

            "success": "#20D57A",

            "warning": "#957C0F",

            "error": "#F3381B",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}
