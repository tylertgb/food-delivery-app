
/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        poppins: ['Inter', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-50px)", opacity: "0" },
        },
      },
      animation: {
        show: "slideIn 0.5s ease-out forwards",
        hide: "slideOut 0.5s ease-in forwards",
      },
      backgroundImage: {
        'overlay-prime': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.1))",
        'heroOverlay': "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.555))",
        'header-bg': 'url(./assets/header_img.png)',
        'section-bg': 'url(./assets/images/section-bg.png)',

        'dark-gradient': 'linear-gradient(to bottom, rgb(6, 4, 11), rgba(21, 8, 55, 1))',
        'purple-glow': 'linear-gradient(to right, rgba(64, 80, 242, 1), rgba(107, 74, 199, 1))',

        'gradient-page': 'linear-gradient(to right, #0a254d, #0a264d)',
      },
    },
  },
}
export default config