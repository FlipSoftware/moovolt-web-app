import type { Config } from "tailwindcss";
import TailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    backgroundImage: {
      card: "linear-gradient(to top, hsl(var(--card) / .50), hsl(var(--card) / .25))",
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring) / .5)",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        dim: "hsl(var(--primary-dim))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        dim: "hsl(var(--secondary-dim))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        dim: "hsl(var(--destructive-dim))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted) / 0.75)",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--card) / .95)",
        foreground: "hsl(var(--popover-foreground))",
      },
      success: {
        DEFAULT: "hsl(var(--success))",
        dim: "hsl(var(--success-dim))",
        foreground: "hsl(var(--success-foreground))",
      },
      info: {
        DEFAULT: "hsl(var(--info))",
        dim: "hsl(var(--info-dim))",
        foreground: "hsl(var(--info-foreground))",
      },
      warning: {
        DEFAULT: "hsl(var(--warning))",
        dim: "hsl(var(--warning-dim))",
        foreground: "hsl(var(--warning-foreground))",
      },
      error: {
        DEFAULT: "hsl(var(--error))",
        dim: "hsl(var(--error-dim))",
        foreground: "hsl(var(--error-foreground))",
      },
      sidebar: {
        DEFAULT: "hsl(var(--sidebar-background) / .95)",
        foreground: "hsl(var(--sidebar-foreground))",
        primary: "hsl(var(--sidebar-primary))",
        "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
        accent: "hsl(var(--sidebar-accent) / .5)",
        "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        border: "hsl(var(--sidebar-border))",
        ring: "hsl(var(--sidebar-ring))",
      },
    },
    borderRadius: {
      xl: "calc(var(--radius) + 4px)",
      lg: "var(--radius)",
      md: "calc(var(--radius) - 4px)",
      sm: "calc(var(--radius) - 8px)",
    },
    extend: {},
  },
  plugins: [TailwindcssAnimate],
} satisfies Config;
