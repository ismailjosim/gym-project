module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        default: {

          "primary": "#fc2420",

          "secondary": "#1ae04f",

          "accent": "#dbef83",

          "neutral": "#23252F",

          "base-100": "#FFFFFF",

          "info": "#9AB4DF",

          "success": "#20D57A",

          "warning": "#957C0F",

          "error": "#F3381B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

