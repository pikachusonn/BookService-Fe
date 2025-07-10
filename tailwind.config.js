module.exports = {
  content: [
    "./app/**/*.{ts, tsx}",
    "./pages/**/*.{ts, tsx}",
    "./components/**/*.{ts, tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        customLightTheme: {
          primary: "#F0F0F0",
          "primary-content": "#171717",
          secondary: "#f6d860",
          "secondary-content": "#1f2937",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#2ded17",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    base: true,
    styled: true,
  },
};
