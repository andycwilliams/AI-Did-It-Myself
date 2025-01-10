module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        processing: "processing 1.5s infinite",
      },
      keyframes: {
        processing: {
          "0%": {
            boxShadow: "0 0 0 2px #ff8a00", // Initial small border color
          },
          "50%": {
            boxShadow: "0 0 0 6px rgba(255, 138, 0, 0.5)", // Grow border
          },
          "100%": {
            boxShadow: "0 0 0 2px #ff8a00", // Shrink border back
          },
        },
      },
    },
  },
  plugins: [],
};
