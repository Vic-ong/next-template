import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "var(--font-local-sans)",
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          "var(--font-mono)",
          "var(--font-local-mono)",
          ...defaultTheme.fontFamily.mono,
        ],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        sm: "0px 0px 12px 0.5px rgba(14,63,126,0.03), 0px 6px 6px -3px rgba(14,63,126,0.03), 0px 12px 12px -6px rgba(14,63,126,0.03), 0px 0.5px 0.5px -0.25px rgba(42,51,69,0.03), 0px 1.5px 1.5px -0.75px rgba(42,51,69,0.03), 0px 3px 3px -1.5px rgba(42,51,69,0.03);",
        md: "0px 0px 24px 1px rgba(14,63,126,0.04), 0px 12px 12px -6px rgba(14,63,126,0.04), 0px 24px 24px -12px rgba(14,63,126,0.04), 0px 1px 1px -0.5px rgba(42,51,69,0.04), 0px 3px 3px -1.5px rgba(42,51,69,0.04), 0px 6px 6px -3px rgba(42,51,69,0.04);",
        lg: "0px 0px 30px 1.5px rgba(14,63,126,0.04), 0px 15px 15px -7.5px rgba(14,63,126,0.04), 0px 30px 30px -15px rgba(14,63,126,0.04), 0px 1.5px 1.5px -0.88px rgba(42,51,69,0.04), 0px 3.75px 3.75px -1.88px rgba(42,51,69,0.04), 0px 7.5px 7.5px -3.75px rgba(42,51,69,0.04);",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
