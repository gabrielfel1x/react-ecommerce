/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      images: {
        banner2: 'url("./src/assets/banner.png")',
      },
      screens: {
        "max-md": { max: "767px" },
      },
      colors: {
        white: "#faf3e7",
        primary: "#fb002e",
        secondary: "#ffc3dc",
        tertiary: "#ffa1b2",
        cards: "#f5ebda",
        primaryHover: "#c80025",
        headingFirst: "#010f1c",
        headingSecondary: "#021d35",
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
    fontFamily: {
      primary: "Recursive",
      secondary: "Poppins",
    },
  },
  plugins: [],
};
