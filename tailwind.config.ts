import { Config } from "tailwindcss"

const config: Config = {
  content: ["src/app/**/*.tsx", "src/components/*.tsx"],
  theme: {
    extend: {
      colors: {
        foreground: "#080404",
        background: "#faf3f4",
        primary: "#b1535d",
        secondary: "#b5c176",
      },
    },
  },
}

export default config
