/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html ./script.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayish_Blue: "hsl(236, 33%, 92%)",
        light_Grayish_Blue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        very_Dark_Grayish_Blue: "hsl(235, 19%, 35%)",
        very_Dark_Blue: "hsl(235, 21%, 11%)",
        very_Dark_Desaturated_Blue: "hsl(235, 24%, 19%)",
        light_Grayish_Blue: "hsl(234, 39%, 85%)",
        light_Grayish_Blue: "hsl(236, 33%, 92%)",
        dark_Grayish_Blue: "hsl(234, 11%, 52%)",
        very_Dark_Grayish_Blue: "hsl(233, 14%, 35%)",
        very_Dark_Grayish_Blue: "hsl(237, 14%, 26%)",
        green_hover: "#55ddff",
        pink_hover: "#c058f3",
      },
      backgroundImage: {
        moonimage: "url('/images/icon-moon.svg')",
        sunimage: "url('/images/icon-sun.svg')",
        iconcross: "url('/images/icon-cross.svg')",
        iconcheck: "url('/images/check.svg')",
        lightbgi: "url('/images/bg-desktop-light.jpg')",
        darkbgi: "url('/images/bg-desktop-dark.jpg')",
        lightbgiMobile: "url('/images/bg-mobile-light.jpg')",
        darkbgiMobile: "url('/images/bg-mobile-dark.jpg')",
      },
      fontWeight: { small: "300", big: "700" },
      screens: {
        lg: "375px",
      },
      fontFamily: {
        body: ["Josefin Sans"],
      },
    },
  },
  plugins: [],
};
