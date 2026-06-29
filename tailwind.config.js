/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          navy: "#0F172A",
          navy2: "#1E293B",
          blue: "#1D4ED8",
          blue2: "#2563EB",
          blueLt: "#EFF6FF",
          blueBd: "#BFDBFE",
          red: "#DC2626",
          redLt: "#FEF2F2",
          orange: "#D97706",
          orangeLt: "#FFFBEB", // kept for compatibility if used, though DLLS-GEMA didn't explicitly define orange-lt in root, wait DLLS-GEMA did not have it. Let's keep it to avoid breaking UI that uses it.
          green: "#16A34A",
          greenLt: "#F0FDF4",
          greenBd: "#BBF7D0", // kept for compatibility
          teal: "#0D9488",
          tealLt: "#F0FDFA", // kept for compatibility
          purple: "#7C3AED",
          purpleLt: "#F5F3FF", // kept for compatibility, DLLS-GEMA didn't define it explicitly but it's fine.
          slate: "#64748B",
          slate2: "#94A3B8",
          slate3: "#CBD5E1",
          bg: "#F8FAFC",  // Swapped to match DLLS-GEMA --bg
          bg2: "#F1F5F9", // Swapped to match DLLS-GEMA --bg2
          white: "#FFFFFF",
          border: "#E2E8F0",
          border2: "#CBD5E1"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
