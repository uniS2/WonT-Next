// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary: "#63D4F2",
        secondary: "#E1FF01",
        content: "#121349",
        contentSecondary: "#363636",
        contentMuted: "#828282",
        error: "#E76761",
        point: "#5F8CEA",
        button: "#C9D9F8",
      },
      fontFamily: {
        suit: ["suit"],
        suitLight: ["suitLight"],
        suitRegular: ["suitRegular"],
        suitMedium: ["suitMedium"],
        suitBold: ["suitBold"],
        suitExtraBold: ["suitExtraBold"],
        suitHeavy: ["suitHeavy"],
      },
    },
  },
  plugins: [],
};
