/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        robato:["var(--font-robato)"],
        pacifico:["var(--font-pacifico)"],
        bellefair:["var(--font-Bellefair)"],
        kalam:["var(--font-kalam)"]
      },
      colors:{
        primary:"#9a3412",
        secondary:'#64748b'
      }
    },
  },
  plugins: [require("daisyui")],
};
