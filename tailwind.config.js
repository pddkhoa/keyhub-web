/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lavender: "#e8eefc",
        "low-color": "#ffd940",
        "medium-color": "#ffae00",
        "high-color": "#ff0000",
        "critical-color": "#d942f4",
        "ongoing-color": "#27ae60",
        "archive-color": "#2980b9",
        "pending-color": "#8A2BE2",
        "fix-failed-color": "#f22128ff",
        "fixing-color": "#27a8e9ff",
        "fixed-color": "#1dd75bff",
        "open-color": "#27a8e9ff",
        "accepted-color": "#009400",
        "confirm-color": "#f49d1aff",
        "close-color": "#7f8c8d",
        "cancel-color": "#ced2d8ff",
        "low-priority-color": "#27ae60",
        "medium-priority-color": "#e67e22",
        "high-priority-color": "#e74c3c",
      },
      minHeight: {
        32: "8rem",
        "dynamic-screen": "100dvh",
        body: "calc(100dvh - 7rem)",
        inherit: "inherit",
        166: "41.5rem",
      },
      maxWidth: {
        80: "20rem",
      },
      minWidth: {
        32: "8rem",
      },
      height: {
        "dynamic-screen": "100dvh",
        header: "3.5rem",
        body: "calc(100dvh - 7rem)",
      },
      width: {
        93: "23.25rem",
        125: "31.25rem",
        110: "27.5rem",
        100: "25rem",
        160: "40rem",
        lg: "64rem",
        xl: "80rem",
      },
      aria: {
        invalid: 'invalid="true"',
        visible: 'visible="true"',
        invisible: 'visible="false"',
        current: 'current="true"',
      },
      boxShadow: {
        top: "0 -2px 5px -1.95px rgba(0, 0, 0, 0.24)",
      },
      keyframes: {
        "face-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "face-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        "zoom-in": {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "zoom-out": {
          "0%": {
            opacity: 1,
            transform: "scale(1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(0)",
          },
        },
        ripple: {
          "0%": {
            opacity: 1,
            transform: "scale(0)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(3)",
          },
        },
      },
      animation: {
        "face-in": "face-in 0.5s ease-out",
        "face-out": "face-out 0.5s ease-in",
        "zoom-in": "zoom-in 0.5s ease-out",
        "zoom-out": "zoom-out 0.5s ease-in",
        ripple: "ripple 1.8s ease-out infinite",
      },
      willChange: {
        opacity: "opacity",
      },
    },
  },
  plugins: [],
};
