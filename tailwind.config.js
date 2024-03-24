module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#f9f9fc", 100: "#f2f3f6" },
        yellow: { 800: "#fcb022" },
        black: { 900: "#000000", "900_66": "#00000066" },
        white: { A700: "#ffffff", A700_3f: "#ffffff3f", A700_bf: "#ffffffbf" },
        blue_gray: { 100: "#d9d9d9", 500: "#667084", "500_01": "#667085" },
        red: { 300: "#c67676", 900: "#9b3535" },
        indigo: { A200: "#7772ff" },
        teal: { 900: "#052c4d" },
        black_900_63: "#00000063",
      },
      boxShadow: { xs: "0px 4px  120px 0px #39564d11" },
      fontFamily: {
        roboto: "Roboto",
        archivo: "Archivo",
        oswald: "Oswald",
        inter: "Inter",
        helvetica: "Helvetica",
        poppins: "Poppins",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
