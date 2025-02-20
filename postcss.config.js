module.exports = {
  theme: {
    extend: {
      animation: {
        bubble: "float 4s infinite ease-in-out",
        "bubble-slow": "float 6s infinite ease-in-out",
        "bubble-fast": "float 3s infinite ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
