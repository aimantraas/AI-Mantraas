import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          950: "#030813",
          900: "#06122b",
          800: "#0c2254",
          700: "#123b91",
          500: "#2f81ff",
          400: "#52c6ff",
          300: "#7dd4ff"
        }
      },
      fontFamily: {
        heading: ["var(--font-orbitron)", "sans-serif"],
        body: ["var(--font-rajdhani)", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 0.8rem rgba(82,198,255,.6), 0 0 2.2rem rgba(47,129,255,.45)",
        card: "0 1rem 3.2rem rgba(1,8,26,.55)"
      },
      backgroundImage: {
        "electric-grid":
          "radial-gradient(circle at 2px 2px, rgba(82,198,255,0.14) 1px, transparent 0)"
      },
      animation: {
        "pulse-glow": "pulseGlow 2.8s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite alternate",
        "pop-in": "popIn 0.8s ease-out forwards"
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0.6rem rgba(82,198,255,.4), 0 0 1.3rem rgba(47,129,255,.3)" },
          "50%": { boxShadow: "0 0 1.1rem rgba(82,198,255,.8), 0 0 2.6rem rgba(47,129,255,.5)" }
        },
        drift: {
          "0%": { transform: "translate3d(-3%, -2%, 0) scale(1.02)" },
          "100%": { transform: "translate3d(3%, 2%, 0) scale(1.08)" }
        },
        popIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.15)" },
          "70%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
