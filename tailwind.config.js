/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', "serif"],
        sans: ['"Public Sans"', "sans-serif"],
      },
      fontSize: {
        "11":"11px",
        "13": "13px",
        '24': "24px",
        "32": "32px",
        "48": "48px",
        "56": "56px",
        "72": "72px",
      },
      lineHeight: {
        '5': "5px",
        '25': "25px",
        "32": "32px",
        "40": "40px",
        "56": "56px",
        "72": "72px",
      },
      letterSpacing: {
        xs: "-0.138px",
        sm: "-0.185px",
        md: "-0.246px",
        lg: "-0.369px",
        xl: "-0.431px",
        xxl: "-0.554px",
        'custom': '-0.115px',
      },
      colors: {
        primary: {
          "dark-pink": "#ba4270",
          "link-water-white": "#fbfcfe"
        },
        secondary: {
          "san-juan-blue": "#36536b",
          "mirage-blue": "#1b262f",
          "charm-pink": "#da6d97",
          "light-san-juan-blue": "#6c8294"
        },
        "red": "#F00",
      },
      borderWidth: {
        '1': '1px',
      },
      borderRadius: {
        5: "5px",
        24: "24px"
      },
      boxShadow: {
        primaryBtn: '10px 10px 25px -10px rgba(54, 83, 107, 0.25);'
      }
    },
  },
  plugins: [],
};
