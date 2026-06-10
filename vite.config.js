import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base = repo name for GitHub Pages (https://armanadilmangat.github.io/portfolio/)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/portfolio/",
});
