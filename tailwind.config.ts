import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beetoo: {
          orange: "#ff6b35",
          "orange-light": "#f7931e",
          blue: "#2563EB",
          green: "#10B981",
          dark: "#1a1a1a",
          light: "#f9f9f9",
        },
      },
      backgroundImage: {
        "gradient-beetoo": "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
        "gradient-dark": "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
