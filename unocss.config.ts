import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
  presets: [
    presetUno(),
    presetAnimations(),
    presetShadcn(),
    presetIcons(),
    presetTypography(),
    presetWebFonts(),
  ],
  preflights: [
    {
      getCSS: () => `
        :root {
          --background: 203 75% 84%;
          --foreground: 229 84% 5%;
          --card: 204 100% 98%;
          --card-foreground: 229 84% 5%;
          --popover: 0 0% 100%;
          --popover-foreground: 229 84% 5%;
          --primary: 222 100% 50%;
          --primary-dim: 215 98% 23%;
          --primary-foreground: 210 40% 98%;
          --secondary: 165 78% 58%;
          --secondary-dim: 189 46% 88%;
          --secondary-foreground: 222 47% 11%;
          --complementary: 222.2 47.4% 11.2%;
          --complementary-dim: 222.2 47.4% 11.2%;
          --complementary-foreground: 222.2 47.4% 11.2%;
          --muted: 0 0% 100%;
          --muted-foreground: 215 25% 27%;
          --accent: 204 88% 90%;
          --accent-foreground: 222 47% 11%;
          --destructive: 0 72% 51%;
          --destructive-dim: 0 74.2% 60.2%;
          --destructive-foreground: 210 40% 98%;
          --border: 204 63% 86%;
          --input: 204 100% 98%;
          --ring: 215 16% 47%;
          --success: 180 100% 50%;
          --success-dim: 180 100% 50%;
          --info: 180 100% 50%;
          --info-dim: 180 100% 50%;
          --warning: 180 100% 50%;
          --warning-dim: 180 100% 50%;
          --error: 180 100% 50%;
          --error-dim: 180 100% 50%;
          --radius: 12px;
          --chart-1: 12 76% 61%;
          --chart-2: 173 58% 39%;
          --chart-3: 197 37% 24%;
          --chart-4: 43 74% 66%;
          --chart-5: 27 87% 67%;
        }

        .dark {
          --background: 204 100% 10%;
          --foreground: 210 40% 98%;
          --card: 204 100% 10%;
          --card-foreground: 210 40% 98%;
          --popover: 204 100% 10%;
          --popover-foreground: 210 40% 98%;
          --primary: 198 100% 74%;
          --primary-dim: 217.2 91.2% 59.8%;
          --primary-foreground: 222 47% 11%;
          --secondary: 165 50% 50%;
          --secondary-dim: 217.2 32.6% 17.5%;
          --secondary-foreground: 210 40% 98%;
          --complementary: 210 40% 98%;
          --complementary-dim: 210 40% 98%;
          --complementary-foreground: 210 40% 98%;
          --muted: 203 100% 80%;
          --muted-foreground: 214 32% 91%;
          --accent: 203 29% 30%;
          --accent-foreground: 210 40% 98%;
          --destructive: 0 72% 51%;
          --destructive-dim: 0 62.8% 30.6%;
          --destructive-foreground: 210 40% 98%;
          --border: 203 100% 20%;
          --input: 203 100% 30%;
          --ring: 215 20% 65%;
          --success: 180 100% 50%;
          --success-dim: 180 100% 50%;
          --success-foreground: 180 100% 50%;
          --info: 180 100% 50%;
          --info-dim: 180 100% 50%;
          --info-foreground: 180 100% 50%;
          --warning: 180 100% 50%;
          --warning-dim: 180 100% 50%;
          --warning-foreground: 180 100% 50%;
          --error: 180 100% 50%;
          --error-dim: 180 100% 50%;
          --error-foreground: 180 100% 50%;
          --radius: 12px;
          --chart-1: 220 70% 50%;
          --chart-2: 160 60% 45%;
          --chart-3: 30 80% 55%;
          --chart-4: 280 65% 60%;
          --chart-5: 340 75% 55%;
        }
      `,
    },
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        "(components|src)/**/*.{js,ts}",
      ],
    },
  },
  shortcuts: [
    {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      "p-ui": "leading-6 [&:not(:first-child)]:mt-6",
      body: "leading-6 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      table: "my-6 w-full overflow-y-auto",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      detail: "text-xs font-medium leading-5",
      badge: "text-xs font-medium leading-none",
      "45deg-primary-overlay": "bg-gradient-to-br from-white/50 to-white/25",
      "dark-45deg-primary-overlay":
        "bg-gradient-to-br from-primary-dim/50 to-primary-dim/25",
      "45deg-secondary-overlay":
        "bg-gradient-to-br from-secondary/50 to-secondary/25",
    },
  ],
  theme: {
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input) / .50)",
      ring: "hsl(var(--ring) / .50)",
      background: "hsl(var(--background) / .90)",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary) / .90)",
        dim: "hsl(var(--primary-dim))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary) / .90)",
        dim: "hsl(var(--secondary-dim) / .90)",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive) / .90)",
        dim: "hsl(var(--destructive-dim) / .90)",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted) / .25)",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent) / .25)",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card) / .25)",
        foreground: "hsl(var(--card-foreground))",
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
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 4px)",
      sm: "calc(var(--radius) - 8px)",
    },
  },
});
