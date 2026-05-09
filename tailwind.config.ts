import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#6343ff",
          accent: "#C4E61A",
          "light-purple": "#b684ff",
          "bg-dark": "#08080F",
          "bg-purple": "#5240CC",
          "dark-1": "#07050E",
          "dark-2": "#0D0A1C",
          "dark-3": "#121028",
          "dark-4": "#181438",
          "dark-5": "#1F1A48",
          "dark-6": "#272058",
          "light-1": "#EAE5FF",
          "light-2": "#F0ECFF",
          "light-3": "#F6F4FF",
          "on-dark": "#EAE6F8",
          "muted-dark": "#9B8FF0",
          "on-light": "#18153A",
          "muted-light": "#4A3F8C",
        },
      },
      fontFamily: {
        headline: ["var(--font-bricolage)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.375rem, 2vw, 1.875rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand": "linear-gradient(135deg, #6343ff 0%, #5240CC 100%)",
        "gradient-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,67,255,0.25), transparent)",
      },
      boxShadow: {
        "glow-primary": "0 0 60px -15px #6343ff",
        "glow-accent": "0 0 40px -10px #C4E61A",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
