const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        xs: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1230px",
        "2xl": "1340px",
        "3xl": "1340px",
      },
    },
    extend: {
      colors: {
        footer: "#111204",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: "#FF8533",
          DEFAULT: "#FF6400",
          dark: "#CC5000",
        },
        secondary: {
          light: "#004D73",
          DEFAULT: "#003049",
          dark: "#00202F",
        },
        accent: {
          light: "#d4f3ef",
          DEFAULT: "#34d399",
          dark: "#0f766e",
        },
        neutral: {
          light: "#f3f4f6",
          DEFAULT: "#9ca3af",
          dark: "#4b5563",
        },
        dark: {
          main: "#1F1D2B",
          card: "#252836",
          light: "#353949",
          hover: "#2f3343",
        },
        "main-bg": "#fff",
        "main-dark": "#1F1D2B",
        "card-dark": "#252836",
        "dark-light": "#353949",
        "hover-color-dark": "#2f3343",
        blue: "#1fb6ff",
        purple: "#3f3cbb",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        h3: "#252623",
        formInputBg: "#f5f5f5",
      },
      fontFamily: {
        sans: ["Poppins", "Outfit", ...fontFamily.sans],
        questrial: "Questrial",
        manrope: ["Manrope", "sans-serif"],
        pockota: ["Pockota", "sans-serif"],
        "mona-sans": ["Mona Sans", "sans-serif"],
        macondo: ['"Macondo"', "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      gridTemplateColumns: {
        "16-auto": "250px auto",
      },
      zIndex: {
        "-10": "-10",
        60: "60",
        70: "70",
      },
      padding: {
        safe: "env(safe-area-inset)",
      },
      aspectRatio: {
        "16/9": [16, 9],
        "4/3": [4, 3],
        "1/1": [1, 1],
      },
      lineHeight: {
        tighter: "1.1",
        relaxed: "1.8",
      },
      letterSpacing: {
        wider: ".05em",
        tightest: "-.05em",
      },
      fontSize: {
        xs: "var(--font-size-xs)", // Extra small (varies, typically around 12px)
        sm: "var(--font-size-sm)", // Small (varies, typically around 14px)
        base: "var(--font-size-base)", // Base (typically 16px)
        lg: "var(--font-size-lg)", // Large (typically 18px)
        xl: "var(--font-size-xl)", // Extra large (typically 20px)
        "2xl": "var(--font-size-2xl)", // 2x extra large (typically 24px)
        "3xl": "var(--font-size-3xl)", // 3x extra large (typically 30px)
        "4xl": "var(--font-size-4xl)", // 4x extra large (typically 36px)
        custom: "16px", // Custom size (16px)
      },
      backgroundImage: {
        "footer-gradient":
          "linear-gradient(to right, #0e1c26, #2a454b, #294861)",
      },
      textAlign: {
        left: "left",
        center: "center",
        right: "right",
      },
      borderRadius: {
        sm: "0.125rem", // Small border radius (2px)
        DEFAULT: "0.25rem", // Default border radius (4px)
        md: "0.375rem", // Medium border radius (6px)
        lg: "0.5rem", // Large border radius (8px)
        xl: "0.75rem", // Extra large border radius (12px)
        "2xl": "1rem", // 2x extra large border radius (16px)
        "3xl": "1.5rem", // 3x extra large border radius (24px)
        full: "9999px", // Full border radius for circles
      },
      animation: {
        spinSlow: "spin 4s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    // require("acentricity-ui"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-muted": {
          opacity: 0.8,
        },
        ".transition-a": {
          transition: "all 0.3s ease-in-out",
        },
        ".card-shadow": {
          boxShadow: " 0 0 0.8rem 0.25rem rgba(0, 0, 0, 0.1)",
        },
        ".shadow-light": {
          boxShadow: "0.1rem 0.1rem 0.3rem .1rem rgba(0, 0, 0, 0.05)",
        },
        ".border-light": {
          border: "1px solid rgba(46, 46, 46, 0.1)",
        },
        ".input-shadow": {
          boxShadow: "0 0 0 1000px #f5f5f9 inset !important",
        },
        ".input-dark-shadow": {
          boxShadow: "0 0 0 1000px #13131A inset !important",
        },
        ".inputAutofillColor": {
          "-webkit-text-fill-color": "#ccc",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-start-between-col": {
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
          flexDirection: "column",
        },
        ".flex-center-between-row": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        },
        ".flex-center-between-col": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
        },
        ".flex-align-center": {
          display: "flex",
          alignItems: "center",
        },

        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".safe-bottom": {
          paddingBottom: "env(safe-area-inset-bottom)",
        },
        ".mobile-hover": {
          "@media (hover: none)": {
            "&:hover": {
              backgroundColor: "inherit",
              color: "inherit",
            },
          },
        },
      };
      addUtilities(newUtilities);
    }),
    // require("addVariablesForColors"),
  ],
  darkMode: "class",
};
