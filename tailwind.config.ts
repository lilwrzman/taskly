import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "custom-stone": "#F3F2EC",
        "custom-gray": "#1E2631",
        "custom-orange": "#FA6D2C",
        "custom-lime": "#C0C954",
        "custom-fuchsia": "#F2B8EB",
      },
      textColor: {
        "custom-stone": "#F3F2EC",
        "custom-gray": "#1E2631",
        "custom-orange": "#FA6D2C",
        "custom-lime": "#C0C954",
        "custom-fuchsia": "#F2B8EB",
      },
      borderColor: {
        "custom-stone": "#F3F2EC",
        "custom-gray": "#1E2631",
        "custom-orange": "#FA6D2C",
        "custom-lime": "#C0C954",
        "custom-fuchsia": "#F2B8EB",
      },
      outlineColor: {
        "custom-stone": "#F3F2EC",
        "custom-gray": "#1E2631",
        "custom-orange": "#FA6D2C",
        "custom-lime": "#C0C954",
        "custom-fuchsia": "#F2B8EB",
      }
    },
  },
  plugins: [],
};
export default config;
