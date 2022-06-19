module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};
