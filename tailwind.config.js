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
        '5': '0.3125rem',  // 5px
        '18': '18px',
        '22': '1.375rem',  // 22px
        '30': '1.875rem',  // 30px
        '31': '1.9375rem', // 31px
        '33': '2.0625rem', // 33px
        '37': '2.3125rem', // 37px
        '43': '3rem',      // 48px
        '56': '3.5rem',    // 56px
        '80': '5rem',      // 80px
        '125': '7.8125rem',// 125px
        '208': '13rem',    // 208px
        '220': '13.75rem',  // 220px
        '663': '41.4375rem', //663px
        '780': '48.75rem', //780px
      },

      spacing: {
        '5': '0.3125rem',  // 5px
        '17': '1.0625rem',  // 17px
        '27': '1.6875rem', // 27px
        '31': '1.9375', // 31px
        '33': '2.0625rem', // 33px
        '39': '2.375rem', // 39px
        '40': '2.5rem',    // 40px
        '41': '2.5625rem',    // 41px
        '43': '3rem',      // 48px
        '48': '2.6875rem', // 48px
        '54': '3.375rem',  // 54px
        '69': '4.1325rem', // 69px
        '72': '4.5rem',    // 72px
        '93': '5.8125rem', // 93px
        '95': '5.9375rem', // 95px
        '100': '6.25rem',  // 100px
        '110': '6.875rem', // 110px
        '120': '7.5rem',  // 120px
        '125': '7.8125rem',// 125px
        '150': '9.375rem', // 150px
        '161': '10.0625rem', // 161px
        '165': '10.3125rem', // 165px
        '173': '10.8125rem', //173pxx
        '185': '11.5625rem', //185px
        '208': '13rem',    // 208px
        '223': '13.9375rem', // 223px
        '260': '16.25rem', // 260px
        '327': '20.4375rem', // 327px
        '328': '20.5rem', // 328px
        '350': '21.875rem', // 350px
        '445': '27.8125rem', // 445px
        '456': '28.5rem', // 456px
        '546': '34.125rem', // 546px
        '689': '43.0625rem', // 689px
        '730': '45.625rem', // 730px
        '780': '48.75rem', //780px
        '1110': '69.375rem' // 1110px
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
          'padding-top': "2.5625rem",  // 41px
          'padding-bottom': '2.5rem',  // 40px
          'gap': '1.125rem',           // 18px
        },
        ".error-lbl": {
          "position": "absolute",
          "padding": "3.375rem 3.3125rem 0", // 54px 53px 0px
        },
        "@screen sm": {
          ".sm-bg-footer": {
            "top": "-3.4375rem",   // -55px
            "left": "17.4375rem",  // 279px
          },
          ".cform-error-lbl": {
            "position": "absolute",
            "padding": "3.5rem 2.6875rem 0", // 56px 43px 0px
          },
        },
        "@screen lg": {
          ".lg-bg-footer": {
            "left": "65.625rem", // 1050px
            "top": "-8.5rem",    // -136px
          },
          ".error-lbl": {
            "position": "absolute",
            "padding": "3.5625rem 2.6875rem 0", // 57px 43px 0px
          },
        },
      },
        ["responsive", "hover"]);
    },
  ],
};
