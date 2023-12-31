/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
];

export const theme = {
    container: {
        center: true,
        padding: "2rem",
        screens: {
            "2xl": "1400px",
        },
    },

    extend: {
        colors: {
            border: "var(--border)",
            input: "var(--input)",
            background: "var(--background)",
            foreground: "hsl(var(--,foreground))",
            hover: "var(--hover)",
            button: {
                DEFAULT: "var(--button)",
                foreground: "var(--button-foreground)",
            },
            modal: "var(--modal)",

            title: {
                DEFAULT: "var(--title)",
                foreground: "var(--title-foreground)",
            },

            secondary: {
                DEFAULT: "hsl(var(--secondary))",
                foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
            },
            card: {
                DEFAULT: "var(--card)",
                foreground: "hsl(var(--card-foreground))",
            },
        },
        borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
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
            blink: "blink 1.4s infinite both;",
            "scale-up": "scaleUp 500ms infinite alternate",
            "spin-slow": "spin 4s linear infinite",
            popup: "popup 500ms var(--popup-delay, 0ms) linear 1",
            skeleton: "skeletonWave 1.6s linear 0.5s infinite",
            "spinner-ease-spin": "spinnerSpin 0.8s ease infinite",
            "spinner-linear-spin": "spinnerSpin 0.8s linear infinite",
        },
        willChange: {
            opacity: "opacity",
        },
    },
};
// eslint-disable-next-line no-undef
export const plugins = [
    // eslint-disable-next-line no-undef
    require("tailwindcss-animate"),
    // eslint-disable-next-line no-undef
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    // plugin(function ({ addVariant }) {
    //   // required this to prevent any style on readOnly input elements
    //   addVariant("not-read-only", "&:not(:read-only)");
    // }),
];
