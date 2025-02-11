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
      gap: {
        "30": "1.875rem",
        "31": "1.9375rem",
        "33": "2.0625rem",
        "56": "3.5rem",
        "80": "80px"

      },
      fontSize: {
        "11": "11px",
        "13": "13px",
        "15": "15px",
        "18": "18px",
        '24': "24px",
        "32": "32px",
        "36": "36px",
        "48": "48px",
        "56": "56px",
        "72": "72px",
      },
      lineHeight: {
        '5': "5px",
        '25': "25px",
        '28': "28px",
        "32": "32px",
        "36": "36px",
        "40": "40px",
        "56": "56px",
        "72": "72px",
      },
      letterSpacing: {
        xs: "-0.138px",
        md: "-0.246px",
        lg: "-0.369px",
        xl: "-0.431px",
        '0.246': '0.0154rem',
        '0.115': '0.0071875rem',
        '0.185': '0.185px',
        '0.138': '0.138px',
        '0.277': '0.277px',
        '0.554': '0.554px',
        '0.431': '0.431px',
        '0.369': '0.369px',
        '0.115': '0.115px',

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
        "alice-blue": "#EDF3F8"
      },
      borderWidth: {
        '1': '1px',
      },
      borderRadius: {
        5: "5px",
        24: "24px"
      },
      boxShadow: {
        primary: '10px 10px 25px -10px rgba(54, 83, 107, 0.25);'
      },

      screens: {
        xs: '490px',
        sm: '744px',
        lg: '1440px',
        xl: '1920px',
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".social-icon": {
          'padding-top': "2.5625rem",
          'padding-bottom': '2.5rem',
          'gap': '1.125rem',
        },
        ".error-lbl": {
          "position": "absolute",
          "padding": "8px 116px 0px",
        },
        "@screen sm": {
          ".sm-bg-footer": {
            "top": "-3.4375rem",
            "left": "279px",
          },
          ".cform-error-lbl": {
            "position": "absolute",
            "padding": "8px 0px 0px",
          },
        },
        "@screen lg": {
          ".lg-bg-footer": {
            "left": "1050px",
            "top": "-136px",
          },
          ".error-lbl": {
            "position": "absolute",
            "padding": "5px 28px 0px",
          },
        },

      }, ["responsive", "hover"]);
    },
  ],
};
