/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      center: true
    },

    extend: {
      fontFamily: {
        logo: ["Cinzel", "serif"],
        body: ["Fira Code", "monospace"]
      },
      colors: {
        "primary-red": "#7D0F22",
        "primary-purple": "#1b0745"
      },
      width: {
        "72": "18rem",
        "80": "20rem",
        "104": "26rem"
      }
    }
  },
  variants: {},
  plugins: []
};
