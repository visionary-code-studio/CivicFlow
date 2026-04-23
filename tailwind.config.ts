import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        civic: {
          ivory: "#FAF8F3",
          sand: "#F5F2EC",
          surface: "#FFFEF9",
          "surface-2": "#F0EDE6",
          primary: "#1C1917",
          secondary: "#78716C",
          muted: "#A8A29E",
          accent: "#D97706",
          "accent-hover": "#B45309",
          "accent-light": "#FEF3C7",
          clay: "#92400E",
          "clay-light": "#FDE68A",
          success: "#16A34A",
          "success-light": "#DCFCE7",
          warning: "#B45309",
          "warning-light": "#FEF3C7",
          border: "#E7E5E1",
          "border-strong": "#D6D3CE",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      borderRadius: {
        "xl": "12px",
        "2xl": "20px",
        "3xl": "28px",
      },
      boxShadow: {
        "civic-sm": "0 1px 3px rgba(28, 25, 23, 0.08)",
        "civic-md": "0 4px 16px rgba(28, 25, 23, 0.10)",
        "civic-lg": "0 8px 32px rgba(28, 25, 23, 0.12)",
        "civic-xl": "0 16px 48px rgba(28, 25, 23, 0.14)",
        "accent": "0 4px 16px rgba(217, 119, 6, 0.30)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both",
        "fade-in": "fadeIn 0.5s ease both",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.3)", opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
