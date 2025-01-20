import { Config } from "tailwindcss"

const config: Config = {
  content: ["src/app/**/*.tsx", "src/components/*.tsx"],
  theme: {
    extend: {
      colors: {
        foreground: "#050705",
        background: "#fcfdfc",
        primary: "#719778",
        secondary: "#c4afb8",
      },
    },
  },
}

export default config
