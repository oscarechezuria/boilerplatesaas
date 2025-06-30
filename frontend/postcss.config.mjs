const config = {
  plugins: ["@tailwindcss/postcss"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#000000",
      },
    },
  },
};

export default config;
